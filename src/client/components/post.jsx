/**
 * @export Post
 * @description blog post with cover, date, and background coverPhoto
 * @todo update default with static image instead of placehold.it link
 * @todo fix failed propTypes console log errors
 */
import React, { PropTypes } from 'react'
import timeFromNow from '../helpers/date'

const Post = ({ backDrop, date, title }) => {
  const style = {
    container: {
      alignItems: 'center',
      backgroundImage: backDrop,
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      height: 377,
      justifyContent: 'center',
      width: '100%',
    },
  }

  return (
    <div style={style.container}>
      <h3>{title}</h3>
      <div>{date}</div>
    </div>
  )
}

Post.propTypes = {
  backDrop: PropTypes.instanceOf(Image).isRequired,
  date: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

Post.defaultProps = {
  backDrop: 'url(http://placehold.it/1000x1000)',
  date: timeFromNow,
  title: 'The Gunpowder Treason',
}

export default Post
