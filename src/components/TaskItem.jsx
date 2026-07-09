import React from 'react';

function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-item-content">
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    <span className="checkmark"></span>
                </label>
                <span className="task-text">{task.text}</span>
            </div>
            <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
                aria-label={`Delete task ${task.text}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
            </button>
        </li>
    );
}

export default TaskItem;
