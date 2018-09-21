import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classnames from 'classnames'
import schedule from './data'
import css from './Schedule.scss'

const format = (date) => moment(date, 'YYYY-MM-DD').format('DD MMM')

const Schedule = () => (
  <div className={css.wrapper}>
    <div className={css.schedule}>
      <h1 className={css.headline}>Schema</h1>
      {
        schedule.map(item => <ScheduleItem key={item.id} {...item} />)
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

const ScheduleItem = ({ date, title, featuring, facebook, link, info }) => {
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
            med { featuring }
          </h5>
        }
        { facebook &&
          <h5 className={css.featuring}>
            <a href={facebook}>@facebook</a>
          </h5>
        }
        { link &&
          <h5 className={css.featuring}>
            <a href={link.url}>{link.text}</a>
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
  facebook: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  info: PropTypes.shape({
    __html: PropTypes.string,
  }),
}

ScheduleItem.defaultProps = {
  facebook: '',
  link: {},
  featuring: '',
  info: {
    __html: '',
  },
}

export default Schedule
