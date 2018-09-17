import React from 'react'
import PropTypes from 'prop-types'

const Spinner = ({ className }) => (<div className={`Spinner ${className}`} />)

Spinner.propTypes = {
  className: PropTypes.string
}
export default Spinner
