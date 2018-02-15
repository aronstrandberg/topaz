import React from 'react'
import PropTypes from 'prop-types'
import css from './Schedule.scss'

const schedule = [
  {
    id: 1,
    date: '7 apr',
    title: 'Halvårsfesten',
  },
  {
    id: 2,
    date: '30 sep',
    title: 'Banketten',
  },
  {
    id: 3,
    date: '3 okt',
    title: 'Onsdagspub XXL',
    featuring: 'DKM',
  },
  {
    id: 4,
    date: '6 okt',
    title: 'Slutfesten',
  },
]

const Schedule = () => (
  <div className={css.wrapper}>
    <div className={css.schedule}>
      <h1 className={css.headline}>Schema</h1>
      {
        schedule.sort((a, b) => a.id > b.id).map(item => <ScheduleItem key={item.id} {...item} />)
      }
    </div>
  </div>
)

const ScheduleItem = ({ date, title, featuring }) => (
  <div className={css.item}>
    <h2 className={css.date}>{ date }</h2>
    <div className={css.content}>
      <h2 className={css.title}>{ title }</h2>
      { featuring &&
        <h5 className={css.featuring}>
          feat. { featuring }
        </h5>
      }
    </div>
  </div>
)

ScheduleItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuring: PropTypes.string,
}

ScheduleItem.defaultProps = {
  featuring: '',
}

export default Schedule
