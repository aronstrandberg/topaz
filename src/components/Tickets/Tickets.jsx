import React from 'react'
import css from './Tickets.scss'

const Tickets = () => (
  <div className={css.tickets}>
    <h1 className={css.headline}>Biljetter</h1>
    <div className={css.section}>
      <h2>Slutfesten</h2>
      <div className={css.ticket}>
        <iframe
          className={css.iframe}
          src="http://slutfesten.djubileet.se/"
          title="slutfesten"
        />
      </div>
    </div>
    <div className={css.section}>
      <h2>Banketten</h2>
      <div className={css.ticket}>
        <iframe
          className={css.iframe}
          src="http://bankett.djubileet.se/"
          title="slutfesten"
        />
      </div>
    </div>
  </div>
)

export default Tickets
