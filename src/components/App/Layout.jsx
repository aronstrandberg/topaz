import React from 'react'
import PropTypes from 'prop-types'
import Navigation from 'components/Navigation/Navigation'
import Typekit from 'react-typekit'
import css from './Layout.scss'

function Layout ({ children }) {
  return (
    <div className={css.app}>
      <Navigation />
      <main className={css.main}>
        { children }
      </main>
      <Typekit kitId="xfh3gcv" />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
