import React, { useState, useEffect, createContext } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import CreatePass from '../components/SignUp/CreatePassword';
import Home from '../components/Home/Home';
import GuardedRoute from './GuardedRoute';
import './App.css';
//localStorage.clear();

const useStateWithLocalStorage = () => {
  const [userSignedUp, setIfSignUp] = useState(
    JSON.parse(localStorage.getItem('signUpBool'))
  );
  useEffect(() => {
    localStorage.setItem('signUpBool', JSON.stringify(userSignedUp));
    console.log(
      'localStorage.getItem(signUpBool)',
      JSON.parse(localStorage.getItem('signUpBool'))
    );
  }, [userSignedUp]);

  return [userSignedUp, setIfSignUp];
};

export const booleanContext = createContext();

const App = () => {
  //const [userSignedUp, setIfSignUp] = useState(false);
  const [userID, setUserID] = useState('');
  const [userSignedUp, setIfSignUp] = useStateWithLocalStorage();

  return (
    <div className='App-div'>
      <GuardedRoute path='/home' auth={userSignedUp}>
        <Home userIDNumber={userID} setIfSignUp={setIfSignUp} />
      </GuardedRoute>
      <Switch>
        <Route path='/signup'>
          <SignUp setUserNumber={setUserID} setIfSignUp={setIfSignUp} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

{
  /* <booleanContext.Provider value={userID}>
<CreatePass />
</booleanContext.Provider> */
}

{
  /* {userSignedUp ? <Redirect to='/home' /> : <Redirect to='/signup/mobile' />} */
}
{
  /* <GuardedRoute
        exact
        path='/home'
        component={Home}
        auth={userSignedUp}
        userIDNumber={userID}
        setIfSignUp={setIfSignUp}
      /> */
}
{
  /* <Route exact path='/'>
          <Link to='/signup'>login</Link>
        </Route> */
}
