import React, { useState } from "react";
import "./App.css";
import Drawer from "../Drawer/Drawer";
import Home from "../../pages/Home/Home";
import Navigation from "../Navigation/Navigation";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import Project from "../../pages/Project/Project";
import Team from "../../pages/Team/Team";
import MyTasks from "../../pages/MyTasks/MyTasks";
import ContentHeader from "../ContentHeader/ContentHeader";
import { connect } from "react-redux";
import MenuBar from "../MenuBar/MenuBar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? (
          <Switch>
            <Drawer nav={<Navigation />}>
              <Route exact path={"/"}>
                <Redirect to={"/home"} />
              </Route>

              <Route path={"/home"}>
                <ContentHeader />
                <Home />
              </Route>

              <Route path={"/tasks"}>{/*<MyTasks tasks={tasks} />*/}</Route>

              <Route path={"/project/:id"}>
                <MenuBar />
                <Project />
              </Route>

              <Route path={"/team"}>
                <Team />
              </Route>
            </Drawer>
          </Switch>
        ) : (
          <>
            <Route exact path={"/"}>
              <LoginForm handleLogin={setIsLoggedIn} />
            </Route>
          </>
        )}
      </Router>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(App);
