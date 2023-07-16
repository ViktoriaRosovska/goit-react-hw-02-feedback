import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import Container from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // This method count total sum of feedbacks
  countTotalFeedback() {
    return Object.values(this.state).reduce(
      (total, stateValue) => total + stateValue,
      0
    );
  }
  // this method percentage of positive feedbacks
  countPositiveFeedbackPercentage() {
    return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
  }

  onLeaveFeedback = option => {
    return this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    return (
      <Container>
        <Section
          title="Please leave a feedback"
          fontWeight="600"
          marginBottom="10px"
        >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics" fontWeight="100">
          {Boolean(this.countTotalFeedback()) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
