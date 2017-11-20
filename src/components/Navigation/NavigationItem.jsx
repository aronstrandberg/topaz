import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import css from './Navigation.scss'

function NavigationItem ({ link, title }) {
  return (
    <li className={css.li}>
      <Link to={link}>
        { title }
      </Link>
    </li>
  )
}

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NavigationItem
