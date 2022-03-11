import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage"
import SpotDetailsPage from "./components/SpotDetailsPage"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import NewSpotPage from "./components/NewSpotPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  // Conditional for displaying
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      <div className='whole-page-container'>
        <div className='main-body'>
          <Switch>
            <Route exact path="/" isLoaded={isLoaded} >
              <HomePage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path="/spots/new">
              <NewSpotPage />
            </Route>
            <Route path="/spots/:spotId">
              <SpotDetailsPage />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  ))
}

export default App;