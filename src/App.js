import React from "react";
import MaterialLayout from "./Components/Layout/MaterialLayout";
import PropertyList from "./Components/PropertyList/PropertyList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropertyPage from "./Components/PropertyPage/PropertyPage";

function App() {
  return (
    <Router>
      <MaterialLayout>
        <Switch>
          <Route path="/property_form">
            <PropertyPage />
          </Route>
          <Route path="/">
            <PropertyList />
          </Route>
        </Switch>
      </MaterialLayout>
    </Router>
  );
}

export default App;
