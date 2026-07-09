import React from 'react';

function TaskFilter({ currentFilter, setFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="task-filter-container">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
