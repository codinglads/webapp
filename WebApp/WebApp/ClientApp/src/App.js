import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SignInSide } from "./pages/SignInSide";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import ForgotPassword from "./pages/ForgotPassword";   

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ViewDetails from './components/Syracuse/ViewDetails';
import  Home  from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Syracuse from './components/Syracuse/Syracuse';
import Settings from './pages/SettingsPage';
import CreatePopSpot from './components/Syracuse/createpopspot'

import './custom.css'


// This sets up the basic routing and pages for our react app
export default class App extends Component {
    static displayName = App.name;

  render () {
      return (
          <Router>
              <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/syracuse' element={<Syracuse />} />
                  <Route exact path='/createpopspot' element={<CreatePopSpot />} />
                  <Route path='/counter' element={<Counter />} />
                  <Route exact path='/fetch-data' element={<FetchData />} />
                  <Route exact path="/signin" element={<SignInSide />} />
                  <Route exact path="/signup" element={<SignUp />} />
                  <Route exact path="/forgotpassword" element={<ForgotPassword />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="viewdetails/:idVal" element={<ViewDetails />} />
                  <Route path="*" element={<ErrorPage />} />

              </Routes>
          </Router>
    );
  }
}
