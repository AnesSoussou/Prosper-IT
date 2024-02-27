import React, { useEffect, useState, useMemo } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import withRouter from "components/Common/withRouter"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap"

// TableContainer


//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import mini card widgets
import MiniCards from "./mini-card"

// import charts
import { getUserProfile } from "store/actions"
import AssociatedFiles from "pages/DashboardJob/AssociatedJobs"

const ContactsProfile = props => {
  //meta title
  document.title = "Profile | Prosper iT"

  const { userProfile, onGetUserProfile } = props

  // eslint-disable-next-line no-unused-vars
  const [miniCards, setMiniCards] = useState([
    { title: "Dossiers en cours", iconClass: "bx bx-revision", text: "12" },
    {
      title: "Nombre de dossiers",
      iconClass: "bx bxs-check-circle",
      text: "25",
    },
  ])

  useEffect(() => {
    onGetUserProfile()
  }, [onGetUserProfile])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Prosper iT" breadcrumbItem="Profile" />

          <Row>
            <Col xl="4">
              <Card className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <Row>
                    <Col xs="7">
                      <div className="text-primary p-3">
                        <h5 className="text-primary">Bonjour !</h5>
                        <h5 className="font-size-15 text-primary">
                          {userProfile.name}
                        </h5>{" "}
                        <p className="text-muted mb-0">
                          {userProfile.designation}
                        </p>
                      </div>
                    </Col>
                    <Col xs="5" className="align-self-center">
                      <img
                        src={userProfile.img}
                        alt="profile"
                        className="img-fluid rounded-circle"
                      />
                    </Col>
                  </Row>
                </div>
              </Card>

              <Card>
                <AssociatedFiles />
              </Card>
            </Col>

            <Col xl="8">
              <Row>
                {(miniCards || [])?.map((card, key) => (
                  <MiniCards
                    title={card.title}
                    text={card.text}
                    iconClass={card.iconClass}
                    key={"_card_" + key}
                  />
                ))}
              </Row>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">
                    Informations personnelles
                  </CardTitle>
                  <p className="text-muted mb-4">
                    {userProfile.personalDetail}
                  </p>
                  <div className="table-responsive">
                    <Table className="table-nowrap mb-0">
                      <tbody>
                        <tr>
                          <th scope="row">Full Name :</th>
                          <td>{userProfile.name}</td>
                        </tr>
                        <tr>
                          <th scope="row">Mobile :</th>
                          <td>{userProfile.phone}</td>
                        </tr>
                        <tr>
                          <th scope="row">E-mail :</th>
                          <td>{userProfile.email}</td>
                        </tr>
                        <tr>
                          <th scope="row">Location :</th>
                          <td>{userProfile.location}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      Informations professionnelles
                    </CardTitle>
                    <p className="text-muted mb-4">
                      {userProfile.personalDetail}
                    </p>
                    <div className="table-responsive">
                      <Table className="table-nowrap mb-0">
                        <tbody>
                          <tr>
                            <th scope="row">Full Name :</th>
                            <td>{userProfile.name}</td>
                          </tr>
                          <tr>
                            <th scope="row">Mobile :</th>
                            <td>{userProfile.phone}</td>
                          </tr>
                          <tr>
                            <th scope="row">E-mail :</th>
                            <td>{userProfile.email}</td>
                          </tr>
                          <tr>
                            <th scope="row">Location :</th>
                            <td>{userProfile.location}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ContactsProfile.propTypes = {
  userProfile: PropTypes.any,
  onGetUserProfile: PropTypes.func,
}

const mapStateToProps = ({ contacts }) => ({
  userProfile: contacts.userProfile,
})

const mapDispatchToProps = dispatch => ({
  onGetUserProfile: () => dispatch(getUserProfile()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactsProfile))
