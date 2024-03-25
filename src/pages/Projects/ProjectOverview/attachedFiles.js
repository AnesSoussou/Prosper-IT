import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap"
import { Link } from "react-router-dom"
import FileSelectorModal from "./FileSelectorModal"

const AttachedFiles = ({ files, onAddFile }) => {
  const [selectedFiles, setSelectedFiles] = useState(files || [])
  const [userRole, setUserRole] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAddFileModalOpen, setIsAddFileModalOpen] = useState(false)
  const fileInputRef = useRef(null)
  const handleAddFile = () => {
    setIsAddFileModalOpen(false)
    fileInputRef.current.click()
  }

  const handleFileChange = event => {
    const file = event.target.files[0]
    if (file) {
      const newFile = {
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        link: URL.createObjectURL(file), // Crée un URL pour le fichier
      }

      onAddFile(newFile)
    }
  }

  const handleChooseFileModal = () => {
    setIsAddFileModalOpen(false)
    setIsModalOpen(true)
  }

  const toggleModal = () => setIsModalOpen(!isModalOpen)
  const toggleAddFileModal = () => setIsAddFileModalOpen(!isAddFileModalOpen)

  const handleChooseFile = file => {
    console.log("File selected:", file)
    setSelectedFiles(prevFiles => [...prevFiles, file])
  }

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
          <Button
            color="primary"
            className="btn-rounded"
            onClick={toggleAddFileModal}
          >
            +
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        {/* Modal for choosing the file addition method */}
        <Modal isOpen={isAddFileModalOpen} toggle={toggleAddFileModal}>
          <ModalHeader toggle={toggleAddFileModal}>
            Ajouter un fichier
          </ModalHeader>
          <ModalBody>
            Sélectionnez comment vous souhaitez ajouter un fichier.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleAddFile}>
              Depuis l'ordinateur
            </Button>
            <Button color="secondary" onClick={handleChooseFileModal}>
              Depuis la liste existante
            </Button>
          </ModalFooter>
        </Modal>

        <FileSelectorModal
          isOpen={isModalOpen}
          toggle={toggleModal}
          files={files}
          onSelect={handleChooseFile}
        />

        <div className="table-responsive">
          <Table className="table-nowrap align-middle table-hover mb-0">
            <tbody>
              {(selectedFiles || []).map((file, i) => (
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
                    <small>Size: {file.size}</small>
                  </td>
                  <td>
                    <div className="text-center">
                      <Link to={file.link} className="w-sm btn btn-light">
                        <i className="mdi mdi-download d-block font-size-16" />
                      </Link>
                    </div>
                  </td>
                  <td>
                    {/* Button or icon to delete file goes here */}
                    <div className="text-center">
                      <Button
                        color="primary"
                        btn
                        className="btn-soft-danger waves-effect waves-light btn btn-secondary"
                        onClick={onAddFile}
                      >
                        -
                      </Button>
                    </div>{" "}
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
  onDeleteFile: PropTypes.func.isRequired,
}

export default AttachedFiles
