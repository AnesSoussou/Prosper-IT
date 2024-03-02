import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Card, CardBody, CardTitle, Table, Button } from "reactstrap"
import { Link } from "react-router-dom"

const AttachedFiles = ({ files, onAddFile, onDeleteFile }) => {
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"))
    const role = authUser ? authUser.role : null
    setUserRole(role)
  }, [])

  return (
    <Card>
      <CardBody>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <CardTitle>Documents</CardTitle>
            <Button color="primary" onClick={onAddFile}>
              Ajouter
            </Button>
        </div>

        <div className="table-responsive">
          <Table className="table-nowrap align-middle table-hover mb-0">
            <tbody>
              {(files || [])?.map((file, i) => (
                <tr key={"_file_" + i}>
                  <td style={{ width: "45px" }}>
                    <div className="avatar-sm">
                      <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-24">
                        <i className="bx bxs-file-doc" />
                      </span>
                    </div>
                  </td>
                  <td>
                    <h5 className="font-size-14 mb-1">
                      <Link to="#" className="text-dark">
                        {file.name}
                      </Link>
                    </h5>
                    <small>Size : {file.size}</small>
                  </td>
                  <td>
                    <div className="text-center">
                      <Link to={file.link} className="text-dark">
                        <i className="bx bx-download h3 m-0" />
                      </Link>
                    </div>
                  </td>
                    <td>
                      <div className="text-center">
                        <Button color="danger" onClick={() => onDeleteFile(i)}>
                          <i className="bx bx-minus h10" />
                        </Button>
                      </div>
                    </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

AttachedFiles.propTypes = {
  files: PropTypes.array,
  onAddFile: PropTypes.func.isRequired,
  onDeleteFile: PropTypes.func.isRequired,
}

export default AttachedFiles
