import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import { storageData } from "common/data"

const Storage = (props) => {
  const { options, series } = props
  return (
    <React.Fragment>
    
    </React.Fragment>
  )
}


Storage.propTypes = {
  options: PropTypes.any,
  series: PropTypes.any
}

export default Storage
