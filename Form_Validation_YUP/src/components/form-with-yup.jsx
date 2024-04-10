/* eslint-disable no-unused-vars */
import { useState } from 'react';
import * as Yup from 'yup';

function FormWithYUP() {

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

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        phoneNumber: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone Number is must be atleast 10 digits")
            .required("Phone Number is required"),
        password: Yup.string()
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password is must be at least 8 characters long and contains atleast one uppercase, one lowercase, one number and one special character")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Password and Confirm Password should match')
            .required("Confirm Password is required"),
        age: Yup.number()
            .min(18, "Age should be greater than 18")
            .max(100, "Age should be less than 100")
            .required("Age is required"),
        gender: Yup.string()
            .required("Gender is required"),
        interests: Yup.array()
            .min(1, "Atleast one interest is required")
            .required("Atleast one interest is required"),
        birthDate: Yup.date().required("Date of Birth is required"),
    })

    // let parsedData = validationSchema.cast(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log("Form Submitted Successfully");
        }
        catch (error) {
            const newErrors = {};
            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            })
            setError(newErrors);
        }
    }

    // Handle Change function of the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    // Handle Checkbox Change function of the form
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

                {/* First Name */}
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

                {/* Last Name */}
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

                {/* Email */}
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

                {/* Phone Number */}
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

                {/* Password */}
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

                {/* Confirm Password */}
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

                {/* Age */}
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

                {/* Gender */}
                <div>
                    <label>Gender : </label>
                    <select name="gender" value={formData.gender} onChange={handleChange} >
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                    {error && error.gender && <p className='error'>{error.gender}</p>}
                </div>

                {/* Interests */}
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

                {/* DOB */}
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

export default FormWithYUP