// Logo oficial G2 Living (extraído del manual de marca)
import React from 'react';
import logo from '../assets/g2-logo.png';

export default function Logo({ style = {}, ...props }) {
  return (
    <img
      src={logo}
      alt="G2 Living logo"
      style={{ height: 44, ...style }}
      {...props}
    />
  );
}
