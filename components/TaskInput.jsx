
import React, { useState } from 'react';
import "../CSS/Taskinput.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task, time: parseFloat(time) });
    setTask('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
        required
      />
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Time (hours)"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
