import React, { useState, useEffect } from 'react';
import LoginPage from "./Components/LoginPage";
import MainPage from "./Components/MainPage";

const App = () => {
    const [initialState, setInitialState] = useState({ current_user_id: '', first_name: '', last_name: '', username: '',  password: '',  email_address: ''});

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
    });

  return (
      <React.Fragment>
          <LoginPage
          />
          <MainPage
          />
      </React.Fragment>
  );
};



export default App;
