import { connect } from 'react-redux'
import Button from '../components/button'
import { makeTalk } from '../actions/bird-actions'

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(makeTalk()) },
  actionLabel: 'Talk',
})

export default connect(null, mapDispatchToProps)(Button)