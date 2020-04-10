import React, {useState} from 'react';


const SignUp = (props) => {

    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');

    return(
        <React.Fragment>
            <h1>Ichat</h1>
            <div className="box">
                <h2>Sign Up</h2>
                <form>
                    <div className="inputBox">
                        <input type="text" name="firstName" value={enteredFirstName}  onChange={event => {
                            setEnteredFirstName(event.target.value);
                        }}
                        />
                        <label>First Name</label>
                    </div>
                    <div className="inputBox">
                        <input type="text"  name="lastName" value={enteredLastName} onChange={event => {
                            setEnteredLastName(event.target.value);
                        }}
                        />
                        <label>Last Name</label>
                    </div>
                    <div className="inputBox">
                        <input type="text"  name="password" value={enteredUsername} onChange={event => {
                            setEnteredUsername(event.target.value);
                        }}
                        />
                        <label>Username</label>
                    </div>
                    <div className="inputBox">
                        <input type="text"  name="password" value={enteredPassword} onChange={event => {
                            setEnteredPassword(event.target.value);
                        }}
                        />
                        <label>Password</label>
                    </div>
                    <div className="inputBox">
                        <input type="text"  name="password" value={enteredEmail} onChange={event => {
                            setEnteredEmail(event.target.value);
                        }}
                        />
                        <label>Email Address</label>
                    </div>
                    <input type="submit" name="submit" value="submit" />
                </form>
            </div>
        </React.Fragment>
    );
};
export default SignUp;