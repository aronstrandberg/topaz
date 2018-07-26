import React from 'react'
import css from './Tickets.scss'
import slutfesten from 'images/slutfesten.png'
import banketten from 'images/banketten.png'

const Tickets = () => (
  <div className={css.tickets}>
    <h1 className={css.headline}>Biljetter</h1>
    <div className={css.section}>
      <h2>Slutfesten</h2>

      <a href="http://slutfesten.djubileet.se">
        <h4>Köp biljett här</h4>
      </a>
      <div className={css.ticket}>
        <a href="http://slutfesten.djubileet.se">
          <img
            className={css.img}
            src={slutfesten}
            alt=""
            title="slutfesten"
          />
        </a>
      </div>
    </div>
    <div className={css.section}>
      <h2>Banketten</h2>
      <a href="http://bankett.djubileet.se">
        <h4>Köp biljett här</h4>
      </a>
      <div className={css.ticket}>
        <a href="http://bankett.djubileet.se">
          <img
            className={css.img}
            src={banketten}
            alt=""
            title="banketten"
          />
        </a>
      </div>
    </div>
  </div>
)

export default Tickets
