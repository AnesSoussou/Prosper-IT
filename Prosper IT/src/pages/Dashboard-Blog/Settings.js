import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col, UncontrolledDropdown, DropdownMenu, DropdownToggle, Row, DropdownItem } from "reactstrap"

import avatar from "../../assets/images/users/avatar-1.jpg"

const Settings = () => {
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="d-flex">
              <div className="flex-shrink-0 me-3">
                <img src={avatar} alt="" className="avatar-sm rounded-circle img-thumbnail" />
              </div>
              <div className="flex-grow-1">
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <div className="text-muted">
                      <h5 className="mb-1">Henry wells</h5>
                      <p className="mb-0">UI / UX Designer</p>
                    </div>
                  </div>

                  <UncontrolledDropdown className="flex-shrink-0 ms-2">
                    <DropdownToggle className="btn btn-light btn-sm" color="#eff2f7" type="button">
                      <i className="bx bxs-cog align-middle me-1"></i> Setting
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Something else
                      </Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>

                <hr />

                <Row>
                  <Col xs={4}>
                    <div>
                      <p className="text-muted text-truncate mb-2">
                        Total Post
                      </p>
                      <h5 className="mb-0">32</h5>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div>
                      <p className="text-muted text-truncate mb-2">
                        Subscribes
                      </p>
                      <h5 className="mb-0">10k</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="d-flex flex-wrap align-items-start">
              <h5 className="card-title mb-3 me-2">Subscribes</h5>

              <UncontrolledDropdown className="ms-auto">
                <DropdownToggle tag="a" className="text-muted font-size-16" role="button">
                  <i className="mdi mdi-dots-horizontal"></i>
                </DropdownToggle>

                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem className="dropdown-item" href="#">Action</DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">Another action</DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">Something else here</DropdownItem>
                  <div className="dropdown-divider"></div>
                  <DropdownItem className="dropdown-item" href="#">Separated link</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>

            <div className="d-flex flex-wrap">
              <div>
                <p className="text-muted mb-1">Total Subscribe</p>
                <h4 className="mb-3">10,512</h4>
                <p className="text-success mb-0"><span>0.6 % <i className="mdi mdi-arrow-top-right ms-1"></i></span></p>
              </div>
              <div className="ms-auto align-self-end">
                <i className="bx bx-group display-4 text-light"></i>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Settings
