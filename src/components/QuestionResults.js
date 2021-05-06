// Component display the question results
import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';

export default function QuestionResults(props) {
  const { authedUser, question } = props;
  const {optionOne, optionTwo } = question;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  /**
   * Calculate the percentage of votes for the question's option
   * @param {number} optionVotes - Number of the votes
   * @returns {number} - the percentage rounded to one decimal point
   */
  const voteRate = optionVotes => {
    const rate = (optionVotes / totalVotes) * 100;
    return Number.isInteger(rate) ? rate : +rate.toFixed(1);
  };

  return (
    <Card.Body>
      <Card.Title>Results:</Card.Title>
      <p>Would you rather</p>
      <Card>
        <Card.Body>
          {/* Display a badge if it is the authedUser answer */}
          {optionOne.votes.includes(authedUser) && <Badge variant="secondary" pill>Your Answer</Badge>}
          <Card.Text>
            { optionOne.text }
          </Card.Text>
          <ProgressBar now={voteRate(optionOne.votes.length)} label={`${voteRate(optionOne.votes.length)}%`} />
          <p>{ optionOne.votes.length } out of {totalVotes} votes</p>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          {/* Display a badge if it is the authedUser answer */}
          {optionTwo.votes.includes(authedUser) && <Badge variant="secondary" pill>Your Answer</Badge>}
          <Card.Text>
            { optionTwo.text }
          </Card.Text>
          <ProgressBar now={voteRate(optionTwo.votes.length)} label={`${voteRate(optionTwo.votes.length)}%`} />
          <p>{ optionTwo.votes.length } out of {totalVotes} votes</p>
        </Card.Body>
      </Card>

  </Card.Body>
  )
}
