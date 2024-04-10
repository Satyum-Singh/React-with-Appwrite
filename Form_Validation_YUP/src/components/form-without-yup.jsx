import { useState } from 'react'

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
        interest: [],
        birthDate: "",
    })

    const handleSubmit = () => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name : </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="Enter your first name"
                    />
                </div>
                <div>
                    <label>Last Name : </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Enter your last name"
                    />
                </div>
                <div>
                    <label>Email : </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email ID"
                    />
                </div>
                <div>
                    <label>Phone Number : </label>
                    <input
                        type="number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div>
                    <label>Password : </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="The password should be unique"
                    />
                </div>
                <div>
                    <label>Confirm Password : </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm your password"
                    />
                </div>
                <div>
                    <label>Age : </label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        placeholder="Enter your Age"
                    />
                </div>
                <div>
                    <label>Gender : </label>
                    <select name="firstName" value={formData.gender}>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div>
                    <label>Interests : </label>
                    <input
                        type="checkbox"
                        name="Coding"
                        checked={formData.interests.includes("Coding")}
                    />
                </div>
            </form>
        </div>
    )
}

export default FormWithoutYUP