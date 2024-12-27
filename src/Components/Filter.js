import React from 'react';

function Filter({ filter, setFilter }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: name === 'rating' ? parseFloat(value) : value });
  };

  return (
    <div>
      <h3>Filter Movies</h3>
      <input
        type="text"
        name="title"
        placeholder="Search by title"
        value={filter.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="note"
        placeholder="Minimum note"
        value={filter.note}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
