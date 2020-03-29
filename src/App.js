import React, { useState } from 'react';
import LoginPage from "./Components/LoginPage";

const App = (props) => {
    const initialState = useState({username: '', password: '', current_user_id: ''});

  return (
      <React.Fragment>
          <LoginPage/>
      </React.Fragment>
  );
};
export default App;
