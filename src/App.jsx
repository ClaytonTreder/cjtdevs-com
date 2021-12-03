import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";

import Profile from "./components/Profiles/Profile";
import Home from "./components/Home";
import Admin from "./components/Admin/Admin";

import "./content/animations.css";
import EventCalendar from "components/Calendar/Calendar";

function App() {
  return (
    <Router>
      <div className="body-content">
        <NavBar />
        <Header />
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path={["/", "/about", "/contact"]}>
          <Home />
        </Route>
        <Route exact path="/calendar">
          <EventCalendar />
        </Route>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
