import React, { Component } from 'react';
import logo from 'images/djubileet-logo.png';
import css from './App.scss';
import Typekit from 'react-typekit';

class App extends Component {
  render() {
    return (
      <main className={css.app}>
        <header className={css.header}>
          <img src={logo} className={css.logo} alt="logo" />
          <h1 className={css.title}>
            djubileet 2018
          </h1>
        </header>
        <p className={css.intro}>
          Datasektionen fyller 35!
        </p>
        <Typekit kitId="xfh3gcv" />
      </main>
    );
  }
}

export default App;
