import React, { useState, useEffect } from 'react';
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Chat from "./Components/Chat";
import Main from "./Components/Main";
import Reset from "./Components/Reset";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from "./Components/SignUp";

const App = () => {
    const [initialState, setInitialState] = useState({ current_user_id: '', first_name: '', last_name: '', username: '',  email_address: ''});

    useEffect(() => {

        fetch('http://localhost:3002/users', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(userData => {
                setInitialState(userData);

            })
    },
        []
    );
    // console.log(initialState[0]);

  return (
      <Router>
          <React.Fragment>
              <Switch>
                  <Route path="/" exact component={Login}/>
                  <Route path="/profile" render={(routerProps) => <Profile
                      {...routerProps} />} />
                  <Route path="/main" exact component={Main}/>
                  <Route path="/reset" exact component={Reset}/>
                  <Route path="/chat" exact component={Chat}/>
                  <Route path="/sign_up" exact component={SignUp}/>
              </Switch>
          </React.Fragment>
      </Router>

  );
};

export default App;
