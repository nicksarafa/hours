/**
 * @export Post
 * @description blog post with cover, date, and background coverPhoto
 * @todo update default with static image instead of placehold.it link
 * @todo fix failed propTypes console log errors
 */
import React, { PropTypes } from 'react'
import moment from 'moment'

const Post = ({ backDrop, date, title }) => {
  const backdrop = { backgroundImage: backDrop }

  return (
    <div style={backdrop}>
      <h3>{title}</h3>
      <h5>{date}</h5>
    </div>
  )
}

Post.propTypes = {
  backDrop: PropTypes.instanceOf(Image).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
}

Post.defaultProps = {
  backDrop: 'url(http://placehold.it/350x150)',
  date: moment().startOf('day').fromNow(),
  title: 'The Gunpowder Treason',
}

export default Post
