import { useState } from "react";

function SignUp () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nationality, setNationality] = useState("");

    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const passwordCheck = () => {
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!regex.test(password)) {
            setPasswordError(true)
        }
    }

    const emailCheck = () => {
        const emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        if(!emailRegex.test(email)) {
            setEmailError(true)
        }
    }

    const greeting = () => {
        if (nationality === "de"){
            return (
                <p>Hallo! Your email is {email}</p>
            )
        } 
        else if (nationality === "en") {
            return (
                <p>Hello! Your email is {email}</p>
            )
        }
        else if (nationality === "fr") {
            return (
                <p>Bonjour! Your email is {email}</p>
            )
        }
        else {
            return (
                <p></p>
            )
        }
    }

    function formSubmission(event) {
        event.preventDefault();
        passwordCheck();
        emailCheck();
        greeting();
    }

    return (
        <div>
         <form>
            <label>Email</label>
            <input
            type="email"
            name="email"
            placeholder="email@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{color:"red"}} >{ emailError ? "Please enter a valid email" : "" }</p>
            <br></br>
            <label>Password</label>
            <input
            type="password"
            name="password"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{color:"red"}}>{ passwordError ? "Wrong credentials" : "" }</p>
            <br></br>
            <label>Nationality</label>
            <select
            name="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            >
                <option disabled={true} value="">Select an option</option>
                <option value="de">German</option>
                <option value="fr">French</option>
                <option value="en">English</option>
            </select>
            <button onClick={formSubmission()} type="submit">Sign up</button>
         </form>
        </div>
    )

}

export default SignUp;