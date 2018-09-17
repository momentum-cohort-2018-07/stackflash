import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({ className }) => (<div className={`Spinner ${className}`} />)

Spinner.PropTypes = {
  Spinner: PropTypes.symbol
}
export default Spinner
