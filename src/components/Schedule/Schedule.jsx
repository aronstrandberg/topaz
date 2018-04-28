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
    date: '29 sep',
    title: 'Banketten',
    info: { __html: "<b>Biljetter</b><br/>Den första omgången biljetter släpps 2/5 på <a href='http://bankett.djubileet.se'>http://bankett.djubileet.se</a>" },
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
      <h5>
        Fler event tillkommer!
      </h5>
      <p>
        Eventuell information om evenemangen kommer
        vid ett datum som är senare än nu
        men tidigare än samma dag som eventet.
        Så mycket lovar vi!
      </p>
    </div>
  </div>
)

const ScheduleItem = ({
  date, title, featuring, info,
}) => (
  <div className={css.item}>
    <h2 className={css.date}>{ date }</h2>
    <div className={css.content}>
      <h2 className={css.title}>{ title }</h2>
      { featuring &&
        <h5 className={css.featuring}>
          feat. { featuring }
        </h5>
      }
      { info.__html &&
        <p dangerouslySetInnerHTML={info} /> // eslint-disable-line react/no-danger
      }
    </div>
  </div>
)

ScheduleItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuring: PropTypes.string,
  info: PropTypes.shape({
    __html: PropTypes.string,
  }),
}

ScheduleItem.defaultProps = {
  featuring: '',
  info: {
    __html: '',
  },
}

export default Schedule
