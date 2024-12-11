import React, { useRef, useState, useEffect } from "react";

interface BoxProps {
  width?: number;
  height?: number;
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

  const [width, setWidth] = useState(p.width || defaultWidth);
  const [height, setHeight] = useState(p.height || defaultHeight);
  const contentRef = useRef<HTMLDivElement>(null);

  // Функция для проверки прокрутки и корректировки размеров
  const updateSize = () => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const contentHeight = contentRef.current.scrollHeight;
      const containerWidth = contentRef.current.clientWidth;
      const containerHeight = contentRef.current.clientHeight;

      // Проверка на увеличение ширины
      if (contentWidth > containerWidth && width < maxWidth) {
        setWidth((prev) => Math.min(prev + 1, maxWidth));
      }
      // Проверка на уменьшение ширины
      else if (contentWidth <= containerWidth && width > minWidth) {
        setWidth((prev) => Math.max(prev - 1, minWidth));
      }

      // Проверка на увеличение высоты
      if (contentHeight > containerHeight && height < maxHeight) {
        setHeight((prev) => Math.min(prev + 1, maxHeight));
      }
      // Проверка на уменьшение высоты
      else if (contentHeight <= containerHeight && height > minHeight) {
        setHeight((prev) => Math.max(prev - 1, minHeight));
      }
    }
  };

  // Проверка размеров при изменении контента
  useEffect(() => {
    updateSize();
  }, [p.children]);

  return (
    <div
      style={{
        gridColumn: `span ${width}`,
        gridRow: `span ${height}`,
        overflow: "hidden",
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
