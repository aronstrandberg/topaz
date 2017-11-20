import React from 'react'
import css from './Home.scss'
import logo from 'images/djubileet-logo.png'

function Home () {
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
    </main>
  )
}

export default Home