import { connect } from 'react-redux'
import Hamburger from '../components/hamburger'
import { closeMenu, openMenu } from '../actions/menu-actions'

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(closeMenu(), openMenu()) },
  actionLabel: 'Menu button pressed',
})

export default connect(null, mapDispatchToProps)(Hamburger)