import React from "react";

interface CheckOverflowParams {
  contentRef: React.RefObject<HTMLDivElement | null>;
  width: number;
  height: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  maxWidth: number;
  maxHeight: number;
  minWidth?: number;
  minHeight?: number;
  setOverflowX: React.Dispatch<React.SetStateAction<boolean>>;
  setOverflowY: React.Dispatch<React.SetStateAction<boolean>>;
}

export function checkAndResizeBlock({
    contentRef,
    width,
    height,
    setWidth,
    setHeight,
    maxWidth,
    maxHeight,
    minWidth = 2,  // Минимальные значения по умолчанию
    minHeight = 2,
    setOverflowX,
    setOverflowY,
  }: CheckOverflowParams) {
    const element = contentRef.current;
    if (!element) return;
  
    let resizeTimeout: NodeJS.Timeout | null = null;
  
    const resize = () => {
      if (!element) return;
  
      const contentWidth = element.scrollWidth;
      const contentHeight = element.scrollHeight;
  
      const parentWidth = element.clientWidth;
      const parentHeight = element.clientHeight;
  
      let newWidth = width;
      let newHeight = height;
  
      // Увеличиваем блок, если контент выходит за пределы
      if (contentWidth > parentWidth && width < maxWidth) {
        newWidth = Math.min(width + 1, maxWidth);
      } else if (contentHeight > parentHeight && height < maxHeight) {
        newHeight = Math.min(height + 1, maxHeight);
      }
  
      // Уменьшаем блок, если контент меньше размера блока (с учётом минимальных значений)
      if (contentWidth <= parentWidth && contentHeight <= parentHeight) {
        if (width > minWidth) newWidth = Math.max(width - 1, minWidth);
        if (height > minHeight) newHeight = Math.max(height - 1, minHeight);
      }
  
      // Обновляем размеры, только если они изменились
      if (newWidth !== width || newHeight !== height) {
        setWidth(newWidth);
        setHeight(newHeight);
      }
  
      // Обновляем флаги прокрутки
      setOverflowX(contentWidth > element.clientWidth);
      setOverflowY(contentHeight > element.clientHeight);
    };
  
    const debouncedResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 100); // Задержка для предотвращения частых вызовов
    };
  
    // Наблюдатель за изменениями размера
    const observer = new ResizeObserver(debouncedResize);
    observer.observe(element);
  
    return () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      observer.disconnect();
    };
  }
  