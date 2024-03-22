// Dans AddClient.js
import React, { useState } from "react"
import { FormGroup, Label, Input, Form } from "reactstrap"
import ClientPhysiqueForm from "./ClientPhysiqueForm"
import ClientMoralForm from "./ClientMoralForm"
import "./Client.css"

const AddClient = ({ onAjouterClient, onShowClientList  }) => {

  const handleSubmitSuccess = () => {
    onShowClientList();
  };
  
  // Assurez-vous d'ajouter la prop ici
  const [clientType, setClientType] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "80px",
        marginInline: "50px",
      }}
    >
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
      {clientType === "physique" && (
        <ClientPhysiqueForm onAjouterClient={onAjouterClient} onSubmitSuccess={handleSubmitSuccess} />
      )}
      {clientType === "moral" && (
        <ClientMoralForm onAjouterClient={onAjouterClient} onSubmitSuccess={handleSubmitSuccess} />
      )}
    </div>
  )
}

export default AddClient
