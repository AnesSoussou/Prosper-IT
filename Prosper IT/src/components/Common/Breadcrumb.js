import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Row, Col, BreadcrumbItem } from "reactstrap"

const Breadcrumb = ({ breadcrumbItem, title, children }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className="page-title-box d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <h4 className="font-size-18 mr-2">{breadcrumbItem}</h4>
            {children}
          </div>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem><Link to="#">{title}</Link></BreadcrumbItem>
              <BreadcrumbItem active>{breadcrumbItem}</BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  )
}


Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Breadcrumb
