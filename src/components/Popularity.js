import React from 'react';

const STARS = {
  empty: '☆',
  full: '★',
};
export default function Popularity({ value }) {
  const fullStars = STARS.full.repeat(value);
  const emptyStars = STARS.empty.repeat(10 - value);
  return (
    <div style={{ color: 'orange' }}>
      {fullStars}
      {emptyStars}
    </div>
  );
}
