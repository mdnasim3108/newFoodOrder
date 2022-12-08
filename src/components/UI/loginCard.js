import React from 'react';

import classes from './loginCard.module.css';

const loginCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default loginCard;