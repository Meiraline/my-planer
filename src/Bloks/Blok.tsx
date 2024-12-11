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

  // Обновление размеров блока на основе внутреннего контента
  const updateSizeFromContent = () => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.offsetWidth;
      const contentHeight = contentRef.current.offsetHeight;

      // Рассчитываем новые размеры
      const newWidth = Math.max(minWidth, Math.min(Math.ceil(contentWidth / 50), maxWidth));
      const newHeight = Math.max(minHeight, Math.min(Math.ceil(contentHeight / 50), maxHeight));

      setWidth(newWidth);
      setHeight(newHeight);

      // Проверка на переполнение
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
        justifyContent: "center", // Центрирование по горизонтали
        alignItems: "center", // Центрирование по вертикали
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
        }}
      >
        {p.children}
      </div>
    </div>
  );
}

export default Blok;
