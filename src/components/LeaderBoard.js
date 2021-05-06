// Component for Laeder Board page;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

class LeaderBoard extends Component {
  render() {
    const { topUsers, users } = this.props;
    return (
      <div>
        {topUsers.map(user => (
          <Row key={user.id}>
            <Col>
              <img src= {users[user.id].avatarURL} alt={users[user.id].name} />
            </Col>
            <Col>
            <ListGroup variant="flush">
              <h3>{users[user.id].name}</h3>
              <ListGroup.Item>
                Answered questions 
                <span>{user.answeredQuestions}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Created questions
                <span>{user.createdQuestions}</span>
              </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col>
            <Card
              bg="Primary"
              className="mb-2"
            >
              <Card.Header>Score</Card.Header>
              <Card.Body>
                <Card.Text>
                  {user.answeredQuestions + user.createdQuestions}
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        ))}
      </div>
    )
  }
}
/**
 * The mapStateToProps function - get the state parts that LoadingBoard component needs
 * @param {Object} state - The state of the store 
 * @returns {object} An object containing the top users of the highest score {object}
 *                   and users {object} containing all the users
 */

const mapStateToProps = ({users}) => {
  const topUsers = Object.values(users).map(user => ({
    id: user.id,
    answeredQuestions: Object.keys(user.answers).length,
    createdQuestions: user.questions.length,
    score: Object.keys(user.answers).length + user.questions.length
    })).sort((a, b) => b.score - a.score).slice(0, 3);

  return {
    topUsers,
    users
  };
};


/* Using the connect() function to make container component
   to read state from the store
*/
export default connect(mapStateToProps)(LeaderBoard);
