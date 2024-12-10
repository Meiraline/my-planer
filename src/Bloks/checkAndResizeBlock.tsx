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

export const checkAndResizeBlock = ({
  contentRef,
  width,
  height,
  setWidth,
  setHeight,
  maxWidth,
  maxHeight,
  minWidth = 2,
  minHeight = 2,
  setOverflowX,
  setOverflowY,
}: CheckOverflowParams) => {
  let timeout: number | null = null;

  const resizeBlock = () => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    const contentHeight = content.scrollHeight;
    const contentWidth = content.scrollWidth;
    const blockHeight = content.clientHeight;
    const blockWidth = content.clientWidth;

    let updated = false;

    // Увеличение и уменьшение высоты
    if (contentHeight > blockHeight && height < maxHeight) {
      setHeight((prev) => prev + 1);
      updated = true;
    } else if (contentHeight <= blockHeight - 10 && height > minHeight) {
      setHeight((prev) => prev - 1);
      updated = true;
    }

    // Увеличение и уменьшение ширины
    if (contentWidth > blockWidth && width < maxWidth) {
      setWidth((prev) => prev + 1);
      updated = true;
    } else if (contentWidth <= blockWidth - 10 && width > minWidth) {
      setWidth((prev) => prev - 1);
      updated = true;
    }

    // Включаем прокрутку при достижении максимума
    setOverflowY(height >= maxHeight && contentHeight > blockHeight);
    setOverflowX(width >= maxWidth && contentWidth > blockWidth);

    if (updated && !timeout) {
      timeout = window.setTimeout(() => {
        timeout = null;
        resizeBlock();
      }, 50);
    }
  };

  // ResizeObserver для наблюдения за изменением размеров
  const resizeObserver = new ResizeObserver(resizeBlock);

  // MutationObserver для наблюдения за изменением содержимого
  const mutationObserver = new MutationObserver(resizeBlock);

  if (contentRef.current) {
    resizeObserver.observe(contentRef.current);
    mutationObserver.observe(contentRef.current, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  // Очистка
  return () => {
    resizeObserver.disconnect();
    mutationObserver.disconnect();
    if (timeout) clearTimeout(timeout);
  };
};

