import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Button } from "reactstrap";
import "./datatables.scss";

const AddClient = () => {
  const handleValidate = () => {
    // Logique pour valider la création du nouveau client
    console.log("Validation du nouveau client");
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Breadcrumbs title="Prosper iT" breadcrumbItem="Nouveau Client" />
          <Button color="success" onClick={handleValidate}>
            Valider
          </Button>
        </div>
        {/* Le reste de votre formulaire ou contenu ici */}
      </div>
    </div>
  );
};

export default AddClient;
