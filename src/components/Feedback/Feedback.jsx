import React from 'react';
import Button from '../Button/Button';

const Feedback = ({ variables, onUpdate }) => {
  return (
    <div>
      {variables.map(item => {
        return (
          <Button>
            key = {item}, onUpdate = {() => onUpdate(item)}, text =
            {item.replace(item[0], item.toUpperCase())}
          </Button>
        );
      })}
    </div>
  );
};

export default Feedback;
