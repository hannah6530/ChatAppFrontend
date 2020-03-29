import React, { useState, useEffect } from 'react';
import LoginPage from "./Components/LoginPage";

const App = () => {
    const initialState = useState({first_name: '', last_name: '', email_address: '', username: '', password: '', current_user_id: ''});

    useEffect(() => {

        fetch('http://localhost:8080/users', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(userData => {
                console.log(userData)
            })
    });

  return (
      <React.Fragment>
          <LoginPage
          />
      </React.Fragment>
  );
};



export default App;
