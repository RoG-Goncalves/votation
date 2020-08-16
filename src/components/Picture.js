import React from 'react';
import css from './picture.module.css';

export default function Picture({ imageSource, description }) {
  return (
    <img
      className={css.avatar}
      src={imageSource}
      alt={description}
      title={description}
    />
  );
}
