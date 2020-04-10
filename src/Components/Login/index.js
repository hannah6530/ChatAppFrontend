import React, {useState} from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Login = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    return(
        <React.Fragment>
            <h1>Ichat</h1>
            <div className="box">
                <h2>Login</h2>
                <form>
                    <div className="inputBox">
                        <input type="text" name="username" value={enteredUsername}  onChange={event => {
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
                    <input type="submit" name="submit" value="submit" />
                    <p>No account? <a><Link to="/sign_up">Sign Up Here</Link></a></p>
                </form>
            </div>
        </React.Fragment>
    );
};
export default Login;