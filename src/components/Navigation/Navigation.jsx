import React from 'react'
import NavigationItem from 'components/Navigation/NavigationItem'
import css from './Navigation.scss'

function Navigation () {
  return (
    <nav className={css.nav}>
      <ul className={css.ul}>
        <NavigationItem link="/" title="Hem" />
      </ul>
    </nav>
  )
}

export default Navigation
