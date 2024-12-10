import React from 'react';
//import React, { useRef, useState, useEffect } from "react";
import s from "./Blok.module.css"

interface BoxProps {

  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;

  children?: React.ReactNode;
}


export function Blok(p: BoxProps) {

  const defaultWidth = 4;
  const defaultHeight = 4;
  // const defaultMaxWidth = 12;
  // const defaultMaxHeight = 10;

  const width = p.width || defaultWidth;
  const height = p.height || defaultHeight;
  // const maxWidth = p.maxWidth || defaultMaxWidth;
  // const maxHeight = p.maxHeight || defaultMaxHeight;

  


  return (
    <div className={s.Blok}

      style={{
        gridColumn: `span ${width}`,
        gridRow: `span ${height} `,
        overflow: "auto",
      }}>

      {p.children}
    </div>
  );

}


export default Blok;

