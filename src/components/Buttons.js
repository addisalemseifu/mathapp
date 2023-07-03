import React from 'react';
import '../index.css';

export default function Buttons({
  // eslint-disable-next-line react/prop-types
  symbol, className,
}) {
  return (
    <button
      type="button"
      className={className}
    >
      {symbol}
    </button>
  );
}
