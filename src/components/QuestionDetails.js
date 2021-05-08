// Component of the question's details of the QuestionCard 
// in the home page - path '/'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class QuestionDetails extends Component {
  
  /**
   * Redirect to the question page
   * @param {object} e - event object 
   */
  toQuestionPage = (e) => {
    const {history, question} = this.props;
    e.preventDefault();
    // QuestionDetails component is not being rendered by react router so
    // we import withRouter component which will pass 
    //  all of the router props to the component
    history.push(`/questions/${question.id}`);
  };

  render() {
    const {isAnswered, question} = this.props;
    return (
      <Card.Body>
        <Card.Title>Would you rather</Card.Title>
        <Card.Text>
          ... {question.optionOne.text} ...
        </Card.Text>
        <Button variant="primary" onClick={this.toQuestionPage}>
          {isAnswered ? 'Results' : 'Answer'}
        </Button>
      </Card.Body>

    )
  }
}

export default withRouter(QuestionDetails);