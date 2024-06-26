/* eslint-disable no-unused-vars */
import { useState } from 'react';

function FormWithoutYUP() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthDate: "",
    })

    const [error, setError] = useState();
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return passwordRegex.test(password);
    }

    const isValidAge = (age) => {
        return parseInt(age) >= 18 && parseInt(age) <= 100;
    }

    const ValidateForm = () => {
        let newErrors = {};
        if (!formData.firstName) {
            newErrors.firstName = "First Name is required";
        }
        else if (!formData.lastName) {
            newErrors.lastName = "Last Name is required"
        }
        else if (!formData.email) {
            newErrors.email = "Email is required"
        }
        else if (!isValidEmail(formData.email)) {
            newErrors.email = "Email is invalid"
        }
        else if (!isValidPhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone Number is must be atleast 10 digits";
        }
        else if (!isValidPassword(formData.password)) {
            newErrors.password = "Password is must be at least 8 characters long and contains atleast one uppercase, one lowercase, one number and one special character";
        }
        else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Password and Confirm Password should match";
        }
        else if (!isValidAge(formData.age)) {
            newErrors.confirmPassword = "You must be atleast 18 years old and not older than 100 years";
        }
        else if (formData.interests.length === 0) {
            newErrors.interests = "Atleast one interest should be selected";
        }
        else if (!formData.birthDate) {
            newErrors.birthDate = "Date of Birth is required";
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    console.log(error);

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = ValidateForm();
        if (isValid) console.log("Form Submitted", formData);
        else console.log("Form Validation Failed");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updated = [...formData.interests];
        if (checked) {
            updated.push(name);
        }
        else {
            updated = updated.filter((interest) => interest !== name);
        }

        setFormData({
            ...formData,
            interests: updated,
        });
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label>First Name : </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="Enter your first name"
                        onChange={handleChange}
                        required
                    />
                    {error && error.firstName && <p className='error'>{error.firstName}</p>}
                </div>
                <div>
                    <label>Last Name : </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Enter your last name"
                        onChange={handleChange}
                        required
                    />
                    {error && error.lastName && <p className='error'>{error.lastName}</p>}
                </div>
                <div>
                    <label>Email : </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email ID"
                        onChange={handleChange}
                    />
                    {error && error.email && <p className='error'>{error.email}</p>}
                </div>
                <div>
                    <label>Phone Number : </label>
                    <input
                        type="number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                        required
                    />
                    {error && error.phoneNumber && <p className='error'>{error.phoneNumber}</p>}
                </div>
                <div>
                    <label>Password : </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="The password should be unique"
                        onChange={handleChange}
                        required
                    />
                    {error && error.password && <p className='error'>{error.password}</p>}
                </div>
                <div>
                    <label>Confirm Password : </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm your password"
                        onChange={handleChange}
                        required
                    />
                    {error && error.confirmPassword && <p className='error'>{error.confirmPassword}</p>}
                </div>
                <div>
                    <label>Age : </label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter your Age"
                        required
                    />
                    {error && error.age && <p className='error'>{error.age}</p>}
                </div>
                <div>
                    <label>Gender : </label>
                    <select name="firstName" value={formData.gender} onChange={handleChange} required>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div>
                    <label>Interests : </label>
                    <label>
                        <input
                            type="checkbox"
                            name="Coding"
                            checked={formData.interests.includes("Coding")}
                            onChange={handleCheckboxChange}
                        />
                        Coding
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="Sports"
                            checked={formData.interests.includes("Sports")}
                            onChange={handleCheckboxChange}
                        />
                        Sports
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="Reading"
                            checked={formData.interests.includes("Reading")}
                            onChange={handleCheckboxChange}
                        />
                        Reading
                    </label>
                    {error && error.interests && <p className='error'>{error.interests}</p>}
                </div>
                <div>
                    <label>Date of Birth : </label>
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        placeholder="Enter your DOB"
                        onChange={handleChange}
                        required
                    />
                    {error && error.birthDate && <p className='error'>{error.birthDate}</p>}
                </div>
                <button type="submit">Submit Form</button>
            </form>
        </div>
    )
}

export default FormWithoutYUP