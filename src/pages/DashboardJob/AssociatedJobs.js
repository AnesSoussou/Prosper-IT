import React, { useEffect, useState } from "react"
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"
import { recentAddedJobsData } from "common/data"
import { Link } from "react-router-dom"
import SimpleBar from "simplebar-react"

const AssociatedFiles = () => {
  // Fonction pour simuler la suppression d'un dossier
  const handleDelete = index => {
    console.log("Supprimer le dossier à l'index:", index)
    // Ici, vous ajouterez la logique pour supprimer le dossier
  }

  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"))
    const role = authUser ? authUser.role : null
    setUserRole(role)
  }, [])

  return (
    <React.Fragment>
      <Col className="mb-4">
        <CardBody>
          <h4 className="card-title mb-4">Dossiers</h4>
          <SimpleBar style={{ maxHeight: "376px" }}>
            <div className="vstack gap-4">
              {(recentAddedJobsData || [])?.map((job, index) => (
                <div className="d-flex" key={index}>
                  <img src={job.logo} alt="" height="40" className="rounded" />
                  <div className="ms-2 flex-grow-1">
                    <h6 className="mb-1 font-size-15">
                      <Link to="/job-details" className="text-body">
                        {job.jobTitle}
                      </Link>
                    </h6>
                    <p className="text-muted mb-0">
                      {job.company} - <b>{job.postedTime}</b> {job.postedText}
                    </p>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle className="btn btn-light" type="button">
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem tag={Link} to="/job-details">
                        Consulter
                      </DropdownItem>
                      { userRole === "admin" && (
                      <DropdownItem onClick={() => handleDelete(index)}>
                        Supprimer
                      </DropdownItem>
                      )}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              ))}
            </div>
          </SimpleBar>
        </CardBody>
      </Col>
    </React.Fragment>
  )
}

export default AssociatedFiles
