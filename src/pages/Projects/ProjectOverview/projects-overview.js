import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import withRouter from "components/Common/withRouter"
import { isEmpty } from "lodash"
import { Button, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

import {
  addFileToProject,
  deleteProject,
  getProjectsSuccess,
  getProjectDetail as onGetProjectDetail,
} from "store/projects/actions"
import ProjectDetail from "./projectDetail"
import { options, series } from "common/data/projects"
import AttachedFiles from "./attachedFiles"

//redux
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"
import Notifications from "pages/Dashboard-crypto/notifications"
import AddedJobs from "pages/DashboardJob/AddedJobs"
import ChantBox from "pages/Dashboard-saas/chat-box"

const ProjectsOverview = props => {
  const [userRole, setUserRole] = useState(null)

  const [files, setFiles] = useState([]);

  const handleAddFile = (newFile) => {
    // Assuming params.id is your project ID
    dispatch(addFileToProject(params.id, newFile));
  };

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"))
    const role = authUser ? authUser.role : null
    setUserRole(role)
  }, [])

  //meta title
  document.title = "Détails dossier | Prosper iT"

  const dispatch = useDispatch()

  const ProjectsDetailProperties = createSelector(
    state => state.projects,
    Projects => ({
      projectDetail: Projects.projectDetail,
    })
  )

  const { projectDetail } = useSelector(ProjectsDetailProperties)

  const params = props.router.params

  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetProjectDetail(params.id))
    } else {
      dispatch(onGetProjectDetail(1))
    }
  }, [onGetProjectDetail])

  const handleDeleteProject = projectId => {
    dispatch(deleteProject(projectId))
    dispatch(getProjectsSuccess())
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Prosper iT" breadcrumbItem="Détails dossier">
            {userRole === "admin" && (
              <Button
                onClick={() => handleDeleteProject(params.id)}
                className="btn btn-light waves-effect btn btn-light"
                style={{ marginLeft: "985px" }}
              >
                Supprimer
              </Button>
            )}
          </Breadcrumbs>

          {!isEmpty(projectDetail) && (
            <>
              <Row>
                <Col lg="8">
                  <ProjectDetail project={projectDetail} />
                </Col>

                <Col lg="4">
                  <AttachedFiles files={projectDetail.files}
                 onAddFile={handleAddFile} />
                </Col>
              </Row>

              <Row>
                <Col lg="8">
                  <ChantBox comments={projectDetail.comments} />
                </Col>
                <Col lg="4">
                  <AddedJobs team={projectDetail.team} />
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}

ProjectsOverview.propTypes = {
  match: PropTypes.object,
}

export default withRouter(ProjectsOverview)
