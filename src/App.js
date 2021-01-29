import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Tech from "./containers/Tech/Tech";
import Navbar from "./containers/Navbar/Navbar";
import Footer from "@bit/zubi-io.core.footer";
import styles from "./App.module.css";
import ScrollToTop from "./utils/ScrollToTop"
import EmergingTechForm from "./containers/Emerge-Tech/EmergingTechForm";

function App() {
  return (
    <Router>
      <Switch>
        <ScrollToTop>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/emergetech" component={EmergingTechForm} />
          <Route exact path="/tech" component={Tech} />
        </ScrollToTop>
      </Switch>
    </Router>
  );
}

export default App;
