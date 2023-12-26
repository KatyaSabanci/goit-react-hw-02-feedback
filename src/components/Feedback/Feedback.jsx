import Button from 'components/Button';
import React from 'react';

const Feedback = ({ variables, onUpdate }) => {
  return (
    <div>
      {variables.map(item => {
        return (
          <Button
            key={item}
            onUpdate={() => onUpdate(item)}
            text={item.replace(item[0], item[0].toUpperCase())}
          />
        );
      })}
    </div>
  );
};

export default Feedback;
