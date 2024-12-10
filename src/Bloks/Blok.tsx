import React, { useRef, useState, useEffect } from "react";
import { checkAndResizeBlock } from "./checkAndResizeBlock.tsx";

interface BoxProps {
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  children?: React.ReactNode;
}

export function Blok(p: BoxProps) {
  const defaultWidth = 2;
  const defaultHeight = 2;
  const maxWidth = p.maxWidth || 6;
  const maxHeight = p.maxHeight || 6;

  const [width, setWidth] = useState(p.width || defaultWidth);
  const [height, setHeight] = useState(p.height || defaultHeight);
  const [overflowX, setOverflowX] = useState(false);
  const [overflowY, setOverflowY] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cleanup = checkAndResizeBlock({
      contentRef,
      width,
      height,
      setWidth,
      setHeight,
      maxWidth,
      maxHeight,
      setOverflowX,
      setOverflowY,
    });
    return cleanup; // Очистка observer при размонтировании
  }, [width, height, p.children]);

  return (
    <div
      style={{
        gridColumn: `span ${width}`,
        gridRow: `span ${height}`,
        overflowX: overflowX ? "auto" : "hidden",
        overflowY: overflowY ? "auto" : "hidden",

        backgroundColor: "#F5E9DB",
        border: "0.3vh solid #313131",
        borderRadius: "1rem",
        padding: "2vw",
      }}
    >
      <div ref={contentRef} style={{ width: "100%", height: "100%" }}>
        {p.children}
      </div>
    </div>
  );
}

export default Blok;
