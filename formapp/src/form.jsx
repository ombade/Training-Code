import React, { useState } from "react";
// import "./FormComponent.css"; // Importing the CSS file

const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        skills: "",
        email: "",
        phoneNumber: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <div className="form-container">
            <h2 className="form-title">User Form</h2>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="input-field" required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="input-field" required />
                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="input-field" required />
                
                <div className="gender-container">
                    <label className="gender-label">Gender:</label>
                    <label className="gender-option"><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
                    <label className="gender-option"><input type="radio" name="gender" value="Female" onChange={handleChange} required /> Female</label>
                </div>
                
                <select name="skills" value={formData.skills} onChange={handleChange} className="input-field" required>
                    <option value="">Select a Skill</option>
                    <option value="React">React</option>
                    <option value="Node.js">Node.js</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                </select>
                
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-field" required />
                <input type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="input-field" required />
                <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="input-field textarea" required></textarea>
                
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;
