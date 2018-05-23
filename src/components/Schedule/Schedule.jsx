import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classnames from 'classnames'
import css from './Schedule.scss'

const parse = (date) => moment(date, 'YYYY-MM-DD')
const format = (date) => moment(date).format('DD MMM')

const schedule = [
  {
    id: 1,
    date: parse('2018-04-7'),
    title: 'Halvårsfesten',
  },
  {
    id: 2,
    date: parse('2018-09-29'),
    title: 'Banketten',
    info: { __html: "<b>Biljetter</b><br/>Den andra omgången biljetter släpps inom kort på <a href='http://bankett.djubileet.se'>http://bankett.djubileet.se</a>" },
  },
  {
    id: 3,
    date: parse('2018-10-03'),
    title: 'Onsdagspub XXL',
    featuring: 'DKM',
  },
  {
    id: 4,
    date: parse('2018-10-06'),
    title: 'Slutfesten',
    info: { __html: "<b>Biljetter</b><br/>Den första omgången biljetter släpps 4/6 på <a href='http://slutfesten.djubileet.se'>http://slutfesten.djubileet.se</a>" },
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

const ScheduleItem = ({ date, title, featuring, info }) => {
  const past = moment().isAfter(moment(date))
  const classes = classnames({
    [css.item]: true,
    [css.past]: past,
  })
  return (
    <div className={classes}>
      <h2 className={css.date}>{ format(date) }</h2>
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
}

ScheduleItem.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
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
