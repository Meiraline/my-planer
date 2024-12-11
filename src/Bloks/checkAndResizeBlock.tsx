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
  let timeoutId: number | null = null;

  const resizeBlock = () => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    const { scrollHeight, scrollWidth, clientHeight, clientWidth } = content;

    let updated = false;

    // Проверка уменьшения высоты
    if (scrollHeight <= clientHeight - 10 && height > minHeight) {
      setHeight((prev) => prev - 1);
      updated = true;
    }

    // Проверка уменьшения ширины
    if (scrollWidth <= clientWidth - 10 && width > minWidth) {
      setWidth((prev) => prev - 1);
      updated = true;
    }

    // Проверка увеличения высоты
    if (scrollHeight > clientHeight && height < maxHeight) {
      setHeight((prev) => prev + 1);
      updated = true;
    }

    // Проверка увеличения ширины
    if (scrollWidth > clientWidth && width < maxWidth) {
      setWidth((prev) => prev + 1);
      updated = true;
    }

    // Включаем прокрутку при достижении максимума
    setOverflowY(height >= maxHeight && scrollHeight > clientHeight);
    setOverflowX(width >= maxWidth && scrollWidth > clientWidth);

    // Повторный вызов при изменении
    if (updated && !timeoutId) {
      timeoutId = window.setTimeout(() => {
        timeoutId = null;
        resizeBlock();
      }, 50);
    }
  };

  const observer = new MutationObserver(resizeBlock);

  if (contentRef.current) {
    observer.observe(contentRef.current, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  resizeBlock();

  return () => {
    observer.disconnect();
    if (timeoutId) clearTimeout(timeoutId);
  };
};
