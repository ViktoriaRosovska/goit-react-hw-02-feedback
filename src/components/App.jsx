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
    let total = 0;
    for (let [, value] of Object.entries(this.state)) {
      total += Number(value);
    }
    return total;
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
          {!Boolean(this.countTotalFeedback()) && (
            <Notification message="There is no feedback" />
          )}
          {Boolean(this.countTotalFeedback()) && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}
