import React, { useRef, useState, useEffect, useCallback } from "react";

interface BoxProps {
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  children?: React.ReactNode;
}

export function Blok(p: BoxProps) {
  const defaultWidth = 2;
  const defaultHeight = 2;
  const maxWidth = p.maxWidth || 6;
  const maxHeight = p.maxHeight || 6;
  const minWidth = p.minWidth || 1;
  const minHeight = p.minHeight || 1;

  const [width, setWidth] = useState(defaultWidth);
  const [height, setHeight] = useState(defaultHeight);

  const [overflowX, setOverflowX] = useState(false);
  const [overflowY, setOverflowY] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

 
  const updateSizeFromContent = useCallback(() => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const contentHeight = contentRef.current.scrollHeight;

      const newWidth = Math.max(
        minWidth,
        Math.min(Math.floor(contentWidth / 60), maxWidth)
      );

      const newHeight = Math.max(
        minHeight,
        Math.min(Math.floor((contentHeight - 50) / 80), maxHeight)
      );

      setWidth(newWidth);
      setHeight(newHeight);

      setOverflowX(newWidth >= maxWidth);
      setOverflowY(newHeight >= maxHeight);
    }
  }, [minWidth, maxWidth, minHeight, maxHeight]); 

  useEffect(() => {
    updateSizeFromContent();
  }, [p.children, updateSizeFromContent]); 

  return (
    <div
      style={{
        gridColumn: `span ${width}`,
        gridRow: `span ${height}`,
        padding: "1vw",
        boxSizing: "border-box",

        display: "flex",
        justifyContent: overflowX ? "flex-start" : "center",
        alignItems: overflowY ? "flex-start" : "center",
        overflowX: overflowX ? "auto" : "hidden",
        overflowY: overflowY ? "auto" : "hidden",

        backgroundColor: "#F5E9DB",
        border: "0.3vh solid #313131",
        borderRadius: "1rem",
        
      }}
    >
      <div
        ref={contentRef}
        style={{
          width: "min-content",
          height: "min-content",
          margin: "auto",
        }}
      >
        {p.children}
      </div>
    </div>
  );
}

export default Blok;
