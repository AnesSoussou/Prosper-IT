import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormFeedback,
  Input,
  Form,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import DeleteModal from "components/Common/DeleteModal";

import {
  getPartenaires as onGetPartenaires,
  addNewPartenaire as onAddNewPartenaire,
  updatePartenaire as onUpdatePartenaire,
  deletePartenaire as onDeletePartenaire,
} from "store/partenaires/actions";
import { isEmpty } from "lodash";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import Spinners from "components/Common/Spinner";
import { ToastContainer } from "react-toastify";
import TableContainer from "components/Common/TableContainer";

const PartenairesList = () => {

  const navigate = useNavigate();

const handlePartenaireClicks = () => {
  navigate('/new-partenaire');
};

  //meta title
  document.title = "Partenaire List | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();
  const [partenaire, setPartenaire] = useState();
  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: (partenaire && partenaire.name) || "",
      designation: (partenaire && partenaire.designation) || "",
      tags: (partenaire && partenaire.tags) || "",
      email: (partenaire && partenaire.email) || "",
      projects: (partenaire && partenaire.projects) || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Name"),
      designation: Yup.string().required("Please Enter Your Designation"),
      tags: Yup.array().required("Please Enter Tag"),
      email: Yup.string().matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please Enter Valid Email"
      ).required("Please Enter Your Email"),
      projects: Yup.string().required("Please Enter Your Project"),
    }),
    onSubmit: values => {
      if (isEdit) {
        const updatePartenaire = {
          id: partenaire.id,
          name: values.name,
          designation: values.designation,
          tags: values.tags,
          email: values.email,
          projects: values.projects,
        };
        // update Partenaire
        dispatch(onUpdatePartenaire(updatePartenaire));
        setIsEdit(false);
        validation.resetForm();
      } else {
        const newPartenaire = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          name: values["name"],
          designation: values["designation"],
          email: values["email"],
          tags: values["tags"],
          projects: values["projects"],
        };
        // save new Partenaire
        dispatch(onAddNewPartenaire(newPartenaire));
        validation.resetForm();
      }
      toggle();
    },
  });

  const ContactsProperties = createSelector(
    (state) => state.contacts,
    (Contacts) => ({
      partenaires: Contacts.partenaires,
      loading: Contacts.loading
    })
  );

  const {
    partenaires, loading
  } = useSelector(ContactsProperties);

  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setLoading] = useState(loading)

  useEffect(() => {
    if (partenaires && !partenaires.length) {
      dispatch(onGetPartenaires());
      setIsEdit(false);
    }
  }, [dispatch, partenaires]);

  useEffect(() => {
    setPartenaire(partenaires);
    setIsEdit(false);
  }, [partenaires]);

  useEffect(() => {
    if (!isEmpty(partenaires) && !!isEdit) {
      setPartenaire(partenaires);
      setIsEdit(false);
    }
  }, [partenaires]);

  const toggle = () => {
    setModal(!modal);
  };

  const handlePartenaireClick = arg => {
    const partenaire = arg;

    setPartenaire({
      id: partenaire.id,
      name: partenaire.name,
      designation: partenaire.designation,
      email: partenaire.email,
      tags: partenaire.tags,
      projects: partenaire.projects,
    });
    setIsEdit(true);

    toggle();
  };

  //delete customer
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (partenaires) => {
    setPartenaire(partenaires.id);
    setDeleteModal(true);
  };

  const handleDeletePartenaire = () => {
    if (partenaire && partenaire.id) {
      dispatch(onDeletePartenaire(partenaire.id));
    }
    setDeleteModal(false);
  };

  const columns = useMemo(
    () => [
      {
        header: "#",
        accessorKey: "img",
        cell: (cell) => (
          <>
            {!cell.getValue() ? (
              <div className="avatar-xs">
                <span className="avatar-title rounded-circle">{cell.row.original.name.charAt(0)} </span>
              </div>
            ) : (
              <div>
                <img className="rounded-circle avatar-xs" src={cell.getValue()} alt="" />
              </div>
            )}
          </>
        ),
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Name',
        accessorKey: 'name',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell) => {
          return (
            <>
              <h5 className='font-size-14 mb-1'>
                <Link to='#' className='text-dark'>{cell.getValue()}</Link>
              </h5>
              <p className="text-muted mb-0">{cell.row.original.designation}</p>
            </>
          )
        }
      },
      {
        header: 'Email',
        accessorKey: 'email',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Tags',
        accessorKey: 'tags',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell) => {
          return (
            <div>
              {
                cell.getValue()?.map((item, index) => (
                  <Link to="#1" className="badge badge-soft-primary font-size-11 m-1" key={index}>{item}</Link>
                ))
              }
            </div>
          );
        },
      },
      {
        header: 'Projects',
        accessorKey: 'projects',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: 'Action',
        cell: (cellProps) => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="#"
                className="text-success"
                onClick={() => {
                  const partenaireData = cellProps.row.original;
                  handlePartenaireClick(partenaireData);
                }}
              >
                <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
              </Link>
              <Link
                to="#"
                className="text-danger"
                onClick={() => {
                  const partenaireData = cellProps.row.original; onClickDelete(partenaireData);
                }}>
                <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
              </Link>
            </div>
          );
        }
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeletePartenaire}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Prosper iT" breadcrumbItem="Partenaires" />
          <Row>
            {
              isLoading ? <Spinners setLoading={setLoading} />
                :
                <Col lg="12">
                  <Card>
                    <CardBody>
                      <TableContainer
                        columns={columns}
                        data={partenaires || []}
                        isGlobalFilter={true}
                        isPagination={true}
                        SearchPlaceholder="Search..."
                        isCustomPageSize={true}
                        isAddButton={true}
                        handleUserClick={handlePartenaireClicks}
                        buttonClass="btn btn-success btn-rounded waves-effect waves-light addContact-modal mb-2"
                        buttonName="Nouveau Partenaire"
                        tableClass="align-middle table-nowrap table-hover dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                        theadClass="table-light"
                        paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded"
                        pagination="pagination"
                      />
                    </CardBody>
                  </Card>
                </Col>
            }

            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle} tag="h4">
                {!!isEdit ? "Edit partenaire" : "Add partenaire"}
              </ModalHeader>
              <ModalBody>
                <Form
                  onSubmit={e => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                >
                  <Row>
                    <Col xs={12}>
                      <div className="mb-3">
                        <Label className="form-label">Name</Label>
                        <Input
                          name="name"
                          type="text"
                          placeholder="Insert Name"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.name || ""}
                          invalid={
                            validation.touched.name &&
                              validation.errors.name
                              ? true
                              : false
                          }
                        />
                        {validation.touched.name &&
                          validation.errors.name ? (
                          <FormFeedback type="invalid">
                            {validation.errors.name}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Designation</Label>
                        <Input
                          name="designation"
                          label="Designation"
                          placeholder="Insert Designation"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.designation || ""}
                          invalid={
                            validation.touched.designation &&
                              validation.errors.designation
                              ? true
                              : false
                          }
                        />
                        {validation.touched.designation &&
                          validation.errors.designation ? (
                          <FormFeedback type="invalid">
                            {validation.errors.designation}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          label="Email"
                          type="email"
                          placeholder="Insert Email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email &&
                              validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email &&
                          validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Option</Label>
                        <Input
                          type="select"
                          name="tags"
                          className="form-select"
                          multiple={true}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.tags || []}
                          invalid={
                            validation.touched.tags &&
                              validation.errors.tags
                              ? true
                              : false
                          }
                        >
                          <option>Photoshop</option>
                          <option>illustrator</option>
                          <option>Html</option>
                          <option>Php</option>
                          <option>Java</option>
                          <option>Python</option>
                          <option>UI/UX Designer</option>
                          <option>Ruby</option>
                          <option>Css</option>
                        </Input>
                        {validation.touched.tags &&
                          validation.errors.tags ? (
                          <FormFeedback type="invalid">
                            {validation.errors.tags}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Projects</Label>
                        <Input
                          name="projects"
                          label="Projects"
                          type="text"
                          placeholder="Insert Projects"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.projects || ""}
                          invalid={
                            validation.touched.projects &&
                              validation.errors.projects
                              ? true
                              : false
                          }
                        />
                        {validation.touched.projects &&
                          validation.errors.projects ? (
                          <FormFeedback type="invalid">
                            {validation.errors.projects}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="text-end">
                        <button
                          type="submit"
                          className="btn btn-success save-user"
                        >
                          Save
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </ModalBody>
            </Modal>
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default withRouter(PartenairesList);
