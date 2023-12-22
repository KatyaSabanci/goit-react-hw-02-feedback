import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notifaction';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onUpdate = review => {
    this.setState(prevState => {
      return {
        [review]: prevState[review] + 1,
      };
    });
  };

  getPercent = () => {
    const { good } = this.state;
    const { total } = this.getTotal();
    return (good / total) * 100;
  };
  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  render = () => {
    const { good, neutral, bad } = this.state;
    const total = this.getTotal;
    const percentage = this.getPercent;
    const options = Object.key(this.state);

    return (
      <>
        <h2>PLease Leave Feadback</h2>
        <Feedback variables={options} Update={this.onUpdate} />
        <h2>Statistics</h2>
        {total > 0 ? (
          <Statistics>
            good={good}, neutral={neutral}, bad={bad}, total={total}, percent=
            {percentage}
          </Statistics>
        ) : (
          <Notification />
        )}
      </>
    );
  };
}
