// Component to dispalay a card for question contain 
// name of the user ask the question and user's image
import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CardWrapper(props) {
  const { author } = props;
  return (
    <Card  className="q-card">
      <h4>{author.name} asks:</h4>
      <div className="q-details">
        <Card.Img variant="top" src={author.avatarURL} alt={author.name} className="author-img" />
        { props.children }
      </div>
    </Card>
  )
}
