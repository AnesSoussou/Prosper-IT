import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

//import images
import adobephotoshop from "../../../assets/images/companies/adobe-photoshop.svg";

const Overview = () => {
    return (
        <React.Fragment>
            <Col xl={3}>
                <Card>
                    <CardBody>
                        <h5 className="mdi-check-decagram fw-semibold"> Souscription</h5>

                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="col">Job Title</th>
                                        <td scope="col">Magento Developer</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Experience:</th>
                                        <td>0-2 Years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Vacancy</th>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Job Type</th>
                                        <td><span className="badge badge-soft-success">Full Time</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Status</th>
                                        <td><span className="badge badge-soft-info">New</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Posted Date</th>
                                        <td>25 June, 2022</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Close Date</th>
                                        <td>13 April, 2022</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="hstack gap-2">
                            <button className="btn btn-info waves-effect waves-light btn btn-info w-100">En ligne</button>
                            <button className="btn btn-light waves-effect btn btn-light w-100">En agence</button>
                        </div>
                    </CardBody>
                </Card>

               
            </Col>
        </React.Fragment>
    );
}

export default Overview;