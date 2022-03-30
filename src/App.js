import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { NavLink, Routes, useHistory } from "react-router-dom";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";


function App() {
  // const navigate = useNavigate()
  return (
    <Router>
      <div className="App">
        <h2>HOWDY</h2>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>
        <Route exact path="/friends">
          <FriendList />
        </Route>
        <Route exact path="/friends/add">
          <AddFriend />
        </Route>
      </div>
    </Router>
  );
}

export default App;
