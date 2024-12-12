import React, { useRef, useState, useEffect, useCallback } from "react";

interface BoxProps {
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  children?: React.ReactNode;
}

export function Blok(p: BoxProps) {
  const maxWidth = p.maxWidth || 12;
  const maxHeight = p.maxHeight || 12;
  const minWidth = p.minWidth || 1;
  const minHeight = p.minHeight || 1;

  const [width, setWidth] = useState(minWidth); // Начальное значение ширины
  const [height, setHeight] = useState(minHeight); // Начальное значение высоты

  const [overflowX, setOverflowX] = useState(false);
  const [overflowY, setOverflowY] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  // Функция обновления размеров
  const updateSizeFromContent = useCallback(() => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const contentHeight = contentRef.current.scrollHeight;

      // Рассчитываем новые размеры блока с учётом текущих значений min/max
      const newWidth = Math.min(maxWidth, Math.max(minWidth, Math.floor(contentWidth / 50)));
      const newHeight = Math.min(maxHeight, Math.max(minHeight, Math.floor(contentHeight / 50)));

      // Обновляем состояние
      setWidth(newWidth);
      setHeight(newHeight);

      setOverflowX(newWidth >= maxWidth);
      setOverflowY(newHeight >= maxHeight);
    }
  }, [minWidth, maxWidth, minHeight, maxHeight]);

  // Вызываем обновление при изменении дочернего контента
  useEffect(() => {
    updateSizeFromContent();
  }, [p.children, updateSizeFromContent]);

  return (
    <div
      style={{
        gridColumn: `span ${width}`,
        gridRow: `span ${height}`,
        justifyContent: overflowX ? "flex-start" : "center",
        alignItems: overflowY ? "flex-start" : "center",
        overflowX: overflowX ? "auto" : "hidden",
        overflowY: overflowY ? "auto" : "hidden",

        padding: "1vw",
        boxSizing: "border-box",

        backgroundColor: "#F5E9DB",
        border: "0.3vh solid #313131",
        borderRadius: "1rem",

        display: "flex",
      }}
    >
      <div
        ref={contentRef}
        style={{
          width: "fit-content",
          height: "fit-content",
          margin: "auto",
        }}
      >
        {p.children}
      </div>
    </div>
  );
}

export default Blok;
