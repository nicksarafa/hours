/**
 * @export Post
 * @description blog post with cover, date, and background coverPhoto
 * @todo update default with static image instead of placehold.it link
 * @todo fix failed propTypes console log errors
 */
import React, { PropTypes } from 'react'
import moment from 'moment'

const Post = ({ backDrop, date, title }) => {
  const style = {
    container: {
      backgroundImage: backDrop,
      backgroundRepeat: 'no-repeat',
      height: 377,
      width: '100%',
    },
  }

  return (
    <div style={style.container}>
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
  backDrop: 'url(http://placehold.it/1000x1000)',
  date: moment().startOf('day').fromNow(),
  title: 'The Gunpowder Treason',
}

export default Post
