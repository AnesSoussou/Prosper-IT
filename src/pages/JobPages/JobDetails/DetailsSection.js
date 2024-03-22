import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

//import images
import wechat from "../../../assets/images/companies/wechat.svg";

const DetailsSection = () => {
    return (
        <React.Fragment>
            <Col xl={9}>
                <Card>
                    <CardBody className="border-bottom">
                        <div className="d-flex">
                            <img src={wechat} alt="" height="50" />
                            <div className="flex-grow-1 ms-3">
                                <h5 className="fw-semibold">AUTOMOBILE</h5>
                                <ul className="list-unstyled hstack gap-2 mb-0">
                                    <li>
                                        <i className="bx bx-building-house"></i> <span className="text-muted"></span>
                                    </li>
                                    <li>
                                        <i className="bx bx-map"></i> <span className="text-muted"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardBody>
                    <CardBody>
                        <h5 className="fw-semibold mb-3">Description</h5>
                        <p className="text-muted">L'assurance automobile offre une protection financière à travers diverses couvertures : responsabilité civile (dommages à autrui, obligatoire), dommages au véhicule (réparations suite à accidents, vol, etc.), protection contre le vol (souvent incluse dans tous risques), assurance des personnes (blessures corporelles, frais médicaux), assistance et dépannage (services en cas de panne ou accident), bonus-malus (ajustement de prime selon l'historique de conduite), et la franchise (participation financière de l'assuré avant intervention de l'assureur).</p>
                        
                        <h5 className="fw-semibold mb-3">Responsibilities:</h5>
                        {/* <ul className="vstack gap-3 job-vstack">
                            <li>
                                Meeting with the design team to discuss the needs of the company.
                            </li>
                            <li>
                                Building and configuring Magento 1x and 2x eCommerce websites.
                            </li>
                            <li>
                                Coding of the Magento templates.
                            </li>
                            <li>
                                Developing Magento modules in PHP using best practices.
                            </li>
                            <li>
                                Designing themes and interfaces.
                            </li>
                            <li>
                                Setting performance tasks and goals.
                            </li>
                            <li>
                                Updating website features and security patches.
                            </li>
                        </ul> */}

                        <div className="mt-4">
                            <span className="badge badge-soft-warning me-1">ASSV</span>
                            <span className="badge badge-soft-warning me-1">FAM</span>
                            <span className="badge badge-soft-warning me-1">CDT</span>
                            <span className="badge badge-soft-warning me-1">ASS</span>
                        </div>

                      
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default DetailsSection;