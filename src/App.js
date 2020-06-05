import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Inquiry from './components/Inquiry';
import SocialList from './components/SocialList';
import Carusal from './components/Carusal';

export default class App extends Component {
  render() {
    return (
      <div>

        <NavBar  />
        <Inquiry />
        <Carusal />
        <SocialList />
      </div>
    )
  }
}
