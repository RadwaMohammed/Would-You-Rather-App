import React, { Fragment } from 'react';
import QuestionCard from './QuestionCard';

function QuestionsList(props) {
  const { questionsData, isAnswered } = props;
  return (
    <Fragment>
      {
        questionsData.map(question => 
          <QuestionCard 
            key={question.id} 
            question={question} 
            isAnswered={isAnswered} 
          />
        )
      }
    </Fragment>
  )
}
export default QuestionsList;