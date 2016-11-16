import React, { PropTypes } from 'react'

function Post({ date, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <span>{date}</span>
    </div>
  )
}

Post.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Post.defaultProps = {
  date: 'November 5, 2016',
  title: 'The Gunpowder Treason',
}

export default Post
