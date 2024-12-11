import React, { useRef, useState, useEffect } from "react";

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

  // Функция обновления размеров блока на основе контента
  const updateSizeFromContent = () => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const contentHeight = contentRef.current.scrollHeight;

      // Округление вниз и устранение "лишнего" блока по вертикали
      const newWidth = Math.max(
        minWidth,
        Math.min(Math.floor(contentWidth  / 60), maxWidth) // Округление вниз
      );

      const newHeight = Math.max(
        minHeight,
        Math.min(Math.floor((contentHeight - 50) / 80), maxHeight) // Убираем пиксель на лишний блок
      );

      setWidth(newWidth);
      setHeight(newHeight);

      // Проверка переполнения
      setOverflowX(newWidth >= maxWidth);
      setOverflowY(newHeight >= maxHeight);
    }
  };

  // Эффект для обновления размеров при изменении контента
  useEffect(() => {
    updateSizeFromContent();
  }, [p.children]);

  return (
    <div
      style={{
        gridColumn: `span ${width}`,
        gridRow: `span ${height}`,
        backgroundColor: "#F5E9DB",
        border: "0.3vh solid #313131",
        borderRadius: "1rem",
        display: "flex",
        justifyContent: overflowX ? "flex-start" : "center",
        alignItems: overflowY ? "flex-start" : "center",
        overflowX: overflowX ? "auto" : "hidden",
        overflowY: overflowY ? "auto" : "hidden",
        padding: "1vw",
        boxSizing: "border-box",
      }}
    >
      <div
        ref={contentRef}
        style={{
          width: "min-content",
          height: "min-content",
          margin: "auto", // Центрирование контента
        }}
      >
        {p.children}
      </div>
    </div>
  );
}

export default Blok;


