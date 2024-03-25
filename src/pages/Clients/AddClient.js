// Dans AddClient.js
import React, { useState } from "react"
import { FormGroup, Label, Input, Form, Container } from "reactstrap"
import ClientPhysiqueForm from "./ClientPhysiqueForm"
import ClientMoralForm from "./ClientMoralForm"
import Breadcrumb from "components/Common/Breadcrumb"
import "./Client.css"

const AddClient = () => {
  // Assurez-vous d'ajouter la prop ici
  const [clientType, setClientType] = useState("physique")

  return (
    <div className="page-content">
      <Container fluid>
      <Breadcrumb title="Prosper iT" breadcrumbItem="Ajout Client" />
    
    <div className="addClientContainer">

      <Form>
        <FormGroup className="form-group">
          <Label for="clientTypeSelect" className="label-inline">
            Type de client
          </Label>
          <Input
            id="clientTypeSelect"
            name="select"
            type="select"
            className="input-mask"
            value={clientType}
            onChange={e => setClientType(e.target.value)}
          >
            <option value="">Sélectionnez le type de client</option>
            <option value="physique">Client Physique</option>
            <option value="moral">Client Moral</option>
          </Input>
        </FormGroup>
      </Form>
      {clientType === "physique" && <ClientPhysiqueForm />}
      {clientType === "moral" && <ClientMoralForm />}
    </div>
    </Container>
    </div>
  )
}

export default AddClient
