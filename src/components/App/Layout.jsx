import React from 'react'
import PropTypes from 'prop-types'
import Navigation from 'components/Navigation/Navigation'
import Typekit from 'react-typekit'
import css from './Layout.scss'

function Layout ({ children }) {
  return (
    <main className={css.main}>
      <Navigation />
      { children }
      <Typekit kitId="xfh3gcv" />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
