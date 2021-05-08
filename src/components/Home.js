import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import QuestionsList from './QuestionsList';



class Home extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <Container className="polls-tab">
        <Tabs defaultActiveKey="unanswered-questions" id="question-tab" >
          <Tab eventKey="unanswered-questions" title="Unanswered">
            <QuestionsList questionsData={unansweredQuestions} />
          </Tab>
          <Tab eventKey="answered-questions" title="Answered">
            <QuestionsList questionsData={answeredQuestions} isAnswered />
          </Tab> 
        </Tabs>
      </Container>
    )
  }
}
/**
 * The mapStateToProps function - get the state parts that Home component needs
 * @param {Object} state - The state of the store 
 * @param {string} state.authedUser - The authedUser 
 * @param {object} state.users - The users object
 * @param {object} state.questions - The questions objct
 * @returns {object} An object containing the answeredQuestions {array}
 *                   and unansweredQuestions {array} 
 */

const mapStateToProps = ({ authedUser, users, questions }) => {
  // Get the questions's Ids that the authedUser answered
  const answeredQuestionsIdArr =  Object.keys(users[authedUser].answers);
  // Get All the questions and its data
  const questionsArr = Object.values(questions);
  // Get the questions data that the authedUser has answered
  const answeredQuestionsData = questionsArr
    .filter(question => answeredQuestionsIdArr.includes(question.id));
  // Get the questions data that the authedUser hasn't answered
  const unansweredQuestionsData = questionsArr
    .filter(question => !answeredQuestionsIdArr.includes(question.id));
  // return the questions sorted from newest to oldest
  return {
    answeredQuestions: answeredQuestionsData.sort((a, b) => b.timestamp - a.timestamp),
    unansweredQuestions: unansweredQuestionsData.sort((a, b) => b.timestamp - a.timestamp)
  };
};

/* Using the connect() function to make container component
   to read state from the store
*/
export default connect(mapStateToProps)(Home);