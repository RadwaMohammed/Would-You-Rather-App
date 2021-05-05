import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class QuestionDetails extends Component {
  render() {
    const {isAnswered, question} = this.props;
    return (
      <div>
        <Card.Body>
          <Card.Title>Would you rather</Card.Title>
          <Card.Text>
            ... {question.optionOne.text} ...
          </Card.Text>
          <Button variant="primary">{isAnswered ? 'View Results' : 'Answer'}</Button>
        </Card.Body>
      </div>
    )
  }
}

export default QuestionDetails;