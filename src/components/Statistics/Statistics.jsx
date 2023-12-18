import React from 'react';

const Statistics ({ good, neutral, bad, total, percent }) => {
    return (
        <List>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {percent}</li>
        </List>
    )
    
}; 

export default Statistics; 