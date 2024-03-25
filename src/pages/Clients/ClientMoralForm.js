import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import InputMask from "react-input-mask"
import "./Client.css"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addNewClient } from "store/actions"

const ClientMoralForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numeroClient: "",
    sourceContact: "",
    abonne: "Oui",
    formeJuridique: "",
    raisonSociale: "",
    numeroSIRET: "",
    codeNAF: "",
    numeroIDCC: "",
    adresseRue: "",
    adresseComplement: "",
    adresseCodePostal: "",
    adresseVille: "",
    telephoneProfessionnel: "",
    email: "",
    clientsDe: [],
    liensAvecContacts: "",
    liensAvecSociete: "",
    notes: "",
  })

  const [isEmailValid, setIsEmailValid] = useState(true)
  const validateEmail = email => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const handleChange = e => {
    const { name, value } = e.target

    if (name === "emailProfessionnel") {
      setIsEmailValid(validateEmail(value))
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleChangeCheckbox = (id) => {
    const checked = formData.clientsDe.includes(id);
    const newClientsDe = checked
      ? formData.clientsDe.filter(client => client !== id)
      : [...formData.clientsDe, id];
    setFormData(prevState => ({
      ...prevState,
      clientsDe: newClientsDe
    }));
  };
  

  const handleSubmit = e => {
    e.preventDefault();
    const clientToAdd = {
      ...formData,
      id: Math.floor(Math.random() * 10000)
    };
    dispatch(addNewClient(clientToAdd));
    navigate('/tables-datatable'); 
  };
  

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="form-group">
        <Label for="numeroClient" className="label-inline">
          Numéro client
        </Label>
        <Input
          id="numeroClient"
          name="numeroClient"
          type="number"
          className="input-mask"
          value={formData.numeroClient}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="sourceContact" className="label-inline">Source contact</Label>
        <Input
          id="sourceContact"
          name="sourceContact"
          type="text"
          className="input-mask"
          value={formData.sourceContact}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="abonne" className="label-inline">Abonne</Label>
        <Input
          id="abonne"
          name="abonne"
          type="select"
          className="input-mask"
          value={formData.abonne}
          onChange={handleChange}
        >
          <option value="OUI">Oui</option>
          <option value="NON">Non</option>
        </Input>
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="formeJuridique" className="label-inline">Forme juridique</Label>
        <Input
          id="formeJuridique"
          name="formeJuridique"
          type="select"
          className="input-mask"
          value={formData.formeJuridique}
          onChange={handleChange}
        >
          <option value="SARL">SARL</option>
          <option value="SCI">SCI</option>
          <option value="SAS">SAS</option>
          <option value="SELARL">SELARL</option>
          <option value="EURL">EURL</option>
          <option value="SCP">SCP</option>
          <option value="EI">EI</option>
          <option value="SM">SM</option>
        </Input>
      </FormGroup>
      <FormGroup className="form-group full-width">
        <Label for="raisonSociale" className="label-inline">
          Raison sociale
        </Label>
        <Input
          className="input-mask"
          id="raisonSociale"
          name="raisonSociale"
          type="text"
          value={formData.raisonSociale}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="numeroSIRET" className="label-inline">Numéro SIRET</Label>
        <InputMask
          mask="999 999 999 99999"
          value={formData.numeroSIRET}
          onChange={handleChange}
        >
          {inputProps => (
            <Input
              {...inputProps}
              id="numeroSIRET"
              name="numeroSIRET"
              type="text"
              className="input-mask"
            />
          )}
        </InputMask>
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="codeNAF" className="label-inline">Code NAF</Label>
        <InputMask
          mask="9999A"
          value={formData.codeNAF}
          onChange={handleChange}
        >
          {inputProps => (
            <Input
              {...inputProps}
              id="codeNAF"
              name="codeNAF"
              type="text"
              className="input-mask"
            />
          )}
        </InputMask>
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="numeroIDCC" className="label-inline">Numéro IDCC</Label>
        <Input
          id="numeroIDCC"
          name="numeroIDCC"
          type="number"
          className="input-mask"
          value={formData.numeroIDCC}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="adresseRue" className="label-inline">Adresse rue</Label>
        <Input
          id="adresseRue"
          name="adresseRue"
          type="text"
          className="input-mask"
          value={formData.adresseRue}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="form-group" >
        <Label for="adresseComplement" className="label-inline">Adresse complément</Label>
        <Input
          id="adresseComplement"
          name="adresseComplement"
          type="text"
          className="input-mask"
          value={formData.adresseComplement}
          onChange={handleChange}
        />
      </FormGroup>
      <div className="form-group-inline">
        <FormGroup className="form-field">
          <Label for="adresseCodePostal" className="label-inline">
            Adresse code postal
          </Label>
          <InputMask
            mask="99999"
            className="input-mask"
            value={formData.adresseCodePostal}
            onChange={handleChange}
          >
            {inputProps => (
              <Input
                {...inputProps}
                id="adresseCodePostal"
                name="adresseCodePostal"
                type="text"
                className="input-mask"
              />
            )}
          </InputMask>
        </FormGroup>

        <FormGroup className="form-field">
          <Label for="adresseVille" className="label-inline" style={{paddingLeft:40}}>
            Adresse Ville
          </Label>
          <Input
            id="adresseVille"
            name="adresseVille"
            type="text"
            className="input-mask"
            value={formData.adresseVille}
            onChange={handleChange}
          />
        </FormGroup>
      </div>
      <FormGroup className="form-group">
        <Label for="telephoneProfessionnel" className="label-inline">Téléphone professionnel</Label>
        <InputMask
          mask="+33 99 99 99 99 99"
          value={formData.telephoneProfessionnel}
          onChange={handleChange}
        >
          {inputProps => (
            <Input
              {...inputProps}
              id="telephoneProfessionnel"
              name="telephoneProfessionnel"
              type="text"
              className="input-mask"
            />
          )}
        </InputMask>
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="email" className="label-inline">Email professionnel</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`input-mask ${isEmailValid ? "" : "is-invalid"}`}
        />
        {!isEmailValid && (
          <div className="invalid-feedback">L'email n'est pas valide.</div>
        )}
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="clientsDe" className="label-inline">Clients de</Label>
        <div>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="giordanoPatrimoine"
              onChange={() => handleChangeCheckbox("Giordano Patrimoine")}
              checked={formData.clientsDe.includes("Giordano Patrimoine")}
            />
            Giordano Patrimoine
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="giordanoImmobilier"
              onChange={() => handleChangeCheckbox("Giordano Immobilier")}
              checked={formData.clientsDe.includes("Giordano Immobilier")}
            />
            Giordano Immobilier
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="giordanoPatrimoineImmobilier"
              onChange={() => handleChangeCheckbox("Giordano Patrimoine + Giordano Immobilier")}
              checked={formData.clientsDe.includes("Giordano Patrimoine + Giordano Immobilier")}
            />
            Giordano Patrimoine + Giordano Immobilier
          </Label>
        </FormGroup>
      </div>
      </FormGroup>

       {/* Champ de recherche pour Liens avec contacts */}
       <FormGroup className="form-group">
        <Label for="liensAvecContacts" className="label-inline">Liens avec contacts</Label>
        <Input
          id="liensAvecContacts"
          name="liensAvecContacts"
          type="search"
          className="input-mask"
          value={formData.liensAvecContacts}
          onChange={handleChange}
        />
      </FormGroup>

      {/* Champ de recherche pour Liens avec société */}
      <FormGroup className="form-group">
        <Label for="liensAvecSociete" className="label-inline">Liens avec société</Label>
        <Input
          id="liensAvecSociete"
          name="liensAvecSociete"
          type="search"
          className="input-mask"
          value={formData.liensAvecSociete}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group full-width">
        <Label for="notes" className="label-inline">Notes</Label>
        <Input
          id="notes"
          name="notes"
          type="textarea"
          className="input-mask"
          value={formData.notes}
          onChange={handleChange}
        />
      </FormGroup>

      <Button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          borderColor: "#007bff",
          color: "white",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Soumettre
      </Button>
    </Form>
  )
}

export default ClientMoralForm
