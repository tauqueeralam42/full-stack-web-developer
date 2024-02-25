import React, { useState } from 'react';

const FormAction = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component (onFormSubmit callback)
    onFormSubmit(formData);

    // Clear form data and set submitted state
    setFormData({
      name: '',
      age: '',
      email: '',
      address: '',
    });
    setSubmitted(true);

    // Reset the submitted state after a delay (to show the message for a short period)
    setTimeout(() => {
      setSubmitted(false);
    }, 2000); // 3000 milliseconds = 3 seconds
  };

  return (
    <div>
      {isSubmitted ? (
        <div>
          <p>Form submitted successfully!</p>
          {/* You can add additional content or redirect the user after submission */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Age:
            <input type="text" name="age" value={formData.age} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default FormAction;
