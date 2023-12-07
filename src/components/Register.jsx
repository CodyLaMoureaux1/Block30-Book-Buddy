// RegistrationForm.js
import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = async (userData) => {
    try {
      const response = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response.status === 200) {
        console.log("User registered successfully!");
        alert("Registration Successful!");
      } else {
        alert("Registration Failed.");
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      console.error("Full error response:", error.response);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(formData);
    } catch (error) {
      //
    }
  };

  return (
    <div className="login-container">
      <h1 className="form-heading">User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Email:
          <input
            type="email"
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="form-label">
          Password:
          <input
            type="password"
            className="form-input"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
