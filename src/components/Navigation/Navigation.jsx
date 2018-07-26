import React from 'react'
import NavigationItem from 'components/Navigation/NavigationItem'
import css from './Navigation.scss'

function Navigation () {
  return (
    <nav className={css.nav}>
      <ul className={css.ul}>
        <NavigationItem link="/" title="Hem" />
        <NavigationItem link="/schema" title="Schema" />
        <NavigationItem link="/biljetter" title="Biljetter" />
      </ul>
    </nav>
  )
}

export default Navigation
