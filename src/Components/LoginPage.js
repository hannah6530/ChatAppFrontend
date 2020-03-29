import React from 'react';
import '../App.css';

const LoginPage = (props) => {

    return(
        <React.Fragment>
            <h1>Ichat</h1>

            <div className="box">
                <h2>Login</h2>
                <form>
                    <div className="inputBox">
                        <input type="text" name="username" required="" value="" />
                            <label>Username</label>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="" value="" />
                            <label>Password</label>
                    </div>
                    <input type="submit" name="submit" value="submit" />
                </form>
            </div>
        </React.Fragment>
    );
};
export default LoginPage;