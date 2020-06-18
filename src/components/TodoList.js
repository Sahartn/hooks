import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TodoList = ({ List, deletTask,  completeTask }) => {
  return (
    <ListGroup>
      {List.map((item, i) => (
        <ListGroup.Item key={i}>
          <p className={''}>{item.description}</p>
          <Button  onClick={() => deletTask(item.id)}>
            Delete
            </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;