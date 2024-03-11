import React from 'react';
import { Container, Row } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import DetailsSection from './DetailsSection';
import Overview from './Overview';

const JobDetails = () => {
    document.title = "Détails service | Prosper iT";
   
    return (
        <React.Fragment>
             <div className="page-content">
                <Container fluid>
                {/* Render Breadcrumbs */}
                <Breadcrumbs title="Jobs" breadcrumbItem="Détails service" />

                <Row>
                    <DetailsSection />
                    <Overview />
                </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default JobDetails;