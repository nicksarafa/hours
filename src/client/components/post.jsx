import React, { PropTypes } from 'react'
import moment from 'moment'

function Post({ date, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{date}</h5>
    </div>
  )
}

Post.propTypes = {
  date: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

Post.defaultProps = {
  date: moment().startOf('day').fromNow(),
  title: 'The Gunpowder Treason',
}

export default Post
