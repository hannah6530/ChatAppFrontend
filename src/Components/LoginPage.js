import React, {useState} from 'react';
import '../App.css';

const LoginPage = (props) => {

    const loginState = useState({username: '', password: '', current_user_id: ''});



    return(
        <React.Fragment>
            <h1>Ichat</h1>
            <div className="box">
                <h2>Login</h2>
                <form>
                    <div className="inputBox">
                        <input type="text" name="username" value={loginState[0].username}  onChange={event => loginState[1]({username: event.target.value})}/>
                            <label>Username</label>
                    </div>
                    <div className="inputBox">
                        <input type="text"  name="password" value={loginState[0].password} onChange={event => loginState[1]({password: event.target.value})}/>
                            <label>Password</label>
                    </div>
                    <input type="submit" name="submit" value="submit" />
                </form>
            </div>
        </React.Fragment>
    );
};
export default LoginPage;