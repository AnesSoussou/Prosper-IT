import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Badge,
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
  Button,
  Input,
} from "reactstrap"

const CardProject = ({ projects, mode }) => {
  const [searchTerm, setSearchTerm] = useState("")

  // Gère le changement de la recherche
  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  // Filtrez les projets en fonction de la recherche
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-4 mb-3">
          <Input
            type="text"
            placeholder="Rechercher un dossier..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {/* Fermeture de la ligne de grille */}
      {filteredProjects.map((project, key) => (
        <Col xl={4} sm={6} key={key}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="avatar-md me-4">
                  <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                    <img src={project.img} alt="" height="30" />
                  </span>
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-15">
                    <Link
                      to={`/projects-overview/${project.id}`}
                      className="text-dark"
                    >
                      {project.name}
                    </Link>
                  </h5>
                  <p className="text-muted mb-4">{project.description}</p>
                  <div className="avatar-group">
                    {project.team.map((team, key) =>
                      !team.img || team.img !== "Null" ? (
                        <React.Fragment key={key}>
                          <div className="avatar-group-item">
                            <Link
                              to="#"
                              className="d-inline-block"
                              id={"member" + team.id}
                            >
                              <img
                                src={team.img}
                                className="rounded-circle avatar-xs"
                                alt=""
                              />
                              <UncontrolledTooltip
                                placement="top"
                                target={"member" + team.id}
                              >
                                {team.fullname}
                              </UncontrolledTooltip>
                            </Link>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment key={key}>
                          <div className="avatar-group-item">
                            <Link
                              to="#"
                              className="d-inline-block"
                              id={"member" + team.id}
                            >
                              <div className="avatar-xs">
                                <span
                                  className={`avatar-title rounded-circle bg-${team.color} text-white font-size-16`}
                                >
                                  {team.name}
                                </span>
                                <UncontrolledTooltip
                                  placement="top"
                                  target={"member" + team.id}
                                >
                                  {team.fullname}
                                </UncontrolledTooltip>
                              </div>
                            </Link>
                          </div>
                        </React.Fragment>
                      )
                    )}
                  </div>
                </div>
              </div>
            </CardBody>
            <div className="px-4 py-3 border-top d-flex justify-content-between align-items-center">
              {mode === "projects" && (
                <>
                  <Badge className={"bg-" + project.color}>
                    {project.status}
                  </Badge>
                  <Button
                    color="primary"
                    href={`/projects-overview/${project.id}`}
                  >
                    Consulter
                  </Button>
                </>
              )}
              {mode === "services" && (
                <>
                  <Button color="secondary" href={`/projects-overview/${project.id}`}>Plus d’informations</Button>
                  <div>
                    <Button color="info">Souscrire</Button>
                  </div>
                </>
              )}
            </div>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  )
}

CardProject.propTypes = {
  projects: PropTypes.array,
}

export default CardProject
