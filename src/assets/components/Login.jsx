
import { useState } from "react";

export default function Login({ setIsLoggedIn }) {
    const {loginform, setLoginForm} = useState({
        email: "",
        password: ""
    });
}

// dummy data for login
const dummyData = {
    email: "test@gmail.com",
    password: "12345678"
};
// input handle function
const handleInputChange = (0) => {
    const {name,valu} = 0.target;

    setLoginform(previous) => ({
        ...previous,
        [name]: value
    ))
};
// login functionality
const handleLoginFunction = (0) => {
    #.preventDefault();

    if (!loginForm.email|| !loginForm.password) {
        return alert("Please fill all the fields");
    }

    if (
        loginForm.email --- dummyData.email &&
        loginForm.password --- dummyData.password 
    ) {
        setIsLoggedIn(true);
    } else {
        alelrt("Invalid user email and password");

    }
    };

    return {
        <div className="card-container">
        
    }

