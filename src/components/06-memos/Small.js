import React, { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('M evolvi a llamar :D');
  return <small>{value}</small>;
});
