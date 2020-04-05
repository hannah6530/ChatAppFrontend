import React, { useState, useEffect } from 'react';
import Login from "./Components/Login";
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
    },
        []
    );
    // console.log(initialState[0]);

  return (
      <React.Fragment>
          <Login
          />
          <MainPage
              userData={initialState}
          />
      </React.Fragment>
  );
};



export default App;
