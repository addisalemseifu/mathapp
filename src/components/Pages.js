import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Pages({ page, direction, className }) {
  return (
    <li className={className}><Link to={direction}>{page}</Link></li>
  );
}
