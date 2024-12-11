
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
  const [overflowX, setOverflowX] = useState(false);
  const [overflowY, setOverflowY] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  // Функция для проверки, нужна ли прокрутка и изменяется ли размер блока
  const updateOverflowAndResize = () => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const contentHeight = contentRef.current.scrollHeight;

      // Проверяем, нужна ли прокрутка по горизонтали
      setOverflowX(contentWidth > contentRef.current.clientWidth);
      // Проверяем, нужна ли прокрутка по вертикали
      setOverflowY(contentHeight > contentRef.current.clientHeight);

      // Проверяем и изменяем ширину блока, если необходимо
      if (contentWidth > contentRef.current.clientWidth && width < maxWidth) {
        setWidth(Math.min(width + 1, maxWidth)); // увеличиваем ширину, если нужно и если не достигнут максимум
      } else if (contentWidth < contentRef.current.clientWidth && width > minWidth) {
        setWidth(Math.max(width - 1, minWidth)); // уменьшаем ширину, если контент меньше и если не достигнут минимум
      }

      // Проверяем и изменяем высоту блока, если необходимо
      if (contentHeight > contentRef.current.clientHeight && height < maxHeight) {
        setHeight(Math.min(height + 1, maxHeight)); // увеличиваем высоту, если нужно и если не достигнут максимум
      } else if (contentHeight < contentRef.current.clientHeight && height > minHeight) {
        setHeight(Math.max(height - 1, minHeight)); // уменьшаем высоту, если контент меньше и если не достигнут минимум
      }
    }
  };

  // Используем ResizeObserver для отслеживания изменений размеров контента
  useEffect(() => {
    const resizeObserver = new ResizeObserver(updateOverflowAndResize);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    // Очистка observer при размонтировании
    return () => resizeObserver.disconnect();
  }, [width, height]); // Обновляем каждый раз при изменении размеров

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
