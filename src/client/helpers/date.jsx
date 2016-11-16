import moment from 'moment'

const timeFromNow = moment().startOf('day').fromNow()

export default timeFromNow