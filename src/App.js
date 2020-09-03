import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { Route, NavLink, withRouter, Redirect, Switch } from "react-router-dom";
import SignUpForm from "./components/forms/signUp";
import UploadImage from "./components/forms/UploadImage";
import Images from "./components/images/images";
import Login from "./components/forms/Login";
import Headers from "./components/Headers";
import Logout from "./components/Logout";
import Footer from "./components/Footer";

function App() {
  if (localStorage.getItem("token")) {
    return (
      <>
     <Headers />
      <Switch>
        <Route path="/upload" component={UploadImage} />
        <Route exact path="/" component={Images} />
        <Route exact path = "/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
      <Footer />
      </>
    );
  }
  return (
    <div className="App">
     <Switch>
      <Route path="/signup" component={SignUpForm} />
      <Route exact path="/login" component={Login} />
      <Redirect to='/login' />
      </Switch>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
  }
}
export default connect(mapStateToProps)(App);
