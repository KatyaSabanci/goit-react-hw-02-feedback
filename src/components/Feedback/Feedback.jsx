import React from 'react';
import Button from '../Button/Button';

const Feedback = ({ variables, Update }) => {
  return (
    <div>
      {variables.map(item => {
        return (
          <Button>
            key = {item}, Update = {() => Update(item)}, text ={' '}
            {item.replace(item[0], item.toUpperCase())}
          </Button>
        );
      })}
    </div>
  );
};

export default Feedback;
