import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Cookie from "js-cookie";

import Header from "./component/Header";
import Offers from "./containers/offers";
import Offer from "./containers/offer";
import SignUp from "./containers/signUp";
import Login from "./containers/login";

function App() {
  const tokenfromlogin = Cookie.get("userToken");

  let newState;
  if (tokenfromlogin) {
    newState = { token: tokenfromlogin };
  } else {
    newState = null;
  }

  const [user, setUser] = useState(newState);
  return (
    <div>
      {/* Création des Routes : chaque Route a son Composant */}
      <Router>
        {/* {user===null ? <Redirect to="/"/> : null } */}
        <Header user={user} setUser={setUser} />

        <div className="container"> 
          <Switch>
            <Route path="/offer/:id">
              <Offer />
            </Route>

            <Route path="/Sign_up">
              <SignUp setUser={setUser}/>
            </Route>

            <Route path="/Log_in">
              <Login setUser={setUser} />
            </Route>

            <Route path="/">
              <Offers />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
