import React, { useState } from "react";
import "./AddItemForm.css";

const NewMenuItemForm = ({ addItem, type }) => {
  const INITIAL_STATE = {
    "name": "",
    "description": "",
    "recipe": "",
    "serve": ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send new item info to parent and clear form. */
  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData, type);
    setFormData(INITIAL_STATE);
  };

  /** Update local state with current state of input element */
  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="AddItemForm">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="recipe">Recipe:</label>
      <input
        id="recipe"
        name="recipe"
        value={formData.recipe}
        onChange={handleChange}
      />

      <label htmlFor="serve">Serve:</label>
      <input
        id="serve"
        name="serve"
        value={formData.serve}
        onChange={handleChange}
      />

      <button>Add a new item!</button>
    </form>
  );
};

export default NewMenuItemForm;