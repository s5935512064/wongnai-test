import React from "react";
import "./App.css";
import { BrowserRouter as Switch, useLocation, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const location = useLocation();
  return (
    <div>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
