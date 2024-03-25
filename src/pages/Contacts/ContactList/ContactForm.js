import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, Container, FormGroup } from "reactstrap"
import "../../Clients/Client.css"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addNewUser } from "store/actions"
import Breadcrumb from "components/Common/Breadcrumb"

// Validation schema
const ContactFormSchema = Yup.object().shape({
  // Ajoutez vos règles de validation ici
  raisonSociale: Yup.string(),
  service: Yup.string(),
  logo: Yup.mixed(),
  codePartenaire: Yup.string(),
  categoriePartenaire: Yup.string(),
  adresseRue: Yup.string(),
  adresseComplement: Yup.string(),
  adresseCodePostal: Yup.number(),
  adresseVille: Yup.string(),
  telephoneProfessionnel: Yup.number(),
  telephoneProfessionnel2: Yup.number(),
  email: Yup.string().email("Invalid email"),
  emailProfessionnel2: Yup.string().email("Invalid email"),
  lienExtranet: Yup.string().url(),
  identifiantExtranet: Yup.string(),
  motDePasseExtranet: Yup.string(),
  motDePasse2: Yup.string(),
  notes: Yup.string(),
})

const NewContactForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="page-content">
    <Container fluid>
    <Breadcrumb title="Prosper iT" breadcrumbItem="Ajout Contact" />
    <div className="addClientContainer">
      <Formik
        initialValues={{
          formeJuridique: "",
          raisonSociale: "",
          name: "",
          logo: null,
          codePartenaire: "",
          categoriePartenaire: "",
          adresseRue: "",
          adresseComplement: "",
          adresseCodePostal: "",
          adresseVille: "",
          telephoneProfessionnel: "",
          telephoneProfessionnel2: "",
          email: "",
          emailProfessionnel2: "",
          lienExtranet: "",
          identifiantExtranet: "",
          motDePasseExtranet: "",
          motDePasse2: "",
          notes: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addNewUser(values))
          setSubmitting(false)
          navigate("/contacts-list")
        }}
      >
        {({ setFieldValue }) => (
          <Form className="form-custom-style">
            <FormGroup className="form-group">
              <label htmlFor="formeJuridique" className="label-inline">
                Forme Juridique
              </label>
              <Field name="formeJuridique" as="select" className="input-mask">
                <option value="SA">SA</option>
                <option value="SARL">SARL</option>
                <option value="SAS">SAS</option>
                <option value="SCI">SCI</option>
              </Field>
              <ErrorMessage name="formeJuridique" component="div" />
            </FormGroup>

            {/* Raison sociale */}
            <FormGroup className="form-group">
              <label htmlFor="raisonSociale" className="label-inline">
                Raison sociale
              </label>
              <Field name="raisonSociale" type="text" className="input-mask" />
              <ErrorMessage name="raisonSociale" component="div" />
            </FormGroup>

            {/* Service */}
            <FormGroup className="form-group">
              <label htmlFor="name" className="label-inline">
                Service
              </label>
              <Field name="name" type="text" className="input-mask" />
              <ErrorMessage name="name" component="div" />
            </FormGroup>

            {/* Logo */}
            <FormGroup className="form-group">
              <label htmlFor="logo" className="label-inline">
                Logo
              </label>
              <input
                id="logo"
                name="logo"
                type="file"
                className="input-mask"
                onChange={event => {
                  setFieldValue("logo", event.currentTarget.files[0])
                }}
              />
              <ErrorMessage name="logo" component="div" />
            </FormGroup>

            {/* Code partenaire */}
            <FormGroup className="form-group">
              <label htmlFor="codePartenaire" className="label-inline">
                Code partenaire
              </label>
              <Field name="codePartenaire" type="text" className="input-mask" />
              <ErrorMessage name="codePartenaire" component="div" />
            </FormGroup>

            {/* Catégorie de partenaire */}
            <FormGroup className="form-group">
              <label htmlFor="categoriePartenaire" className="label-inline">
                Catégorie de partenaire
              </label>
              <Field
                name="categoriePartenaire"
                as="select"
                className="input-mask"
              >
                {/* Insérez ici vos options */}
                <option value="Compagnie d'assurance">
                  Compagnie d'assurance
                </option>
                <option value="Agence immobilière">Agence immobilière</option>
                {/* Continuez avec les autres options */}
              </Field>
              <ErrorMessage name="categoriePartenaire" component="div" />
            </FormGroup>

            {/* Adresse */}
            <FormGroup className="form-group">
              <label htmlFor="adresseRue" className="label-inline">
                Adresse rue
              </label>
              <Field name="adresseRue" type="text" className="input-mask" />
              <ErrorMessage name="adresseRue" component="div" />
            </FormGroup>

            <FormGroup className="form-group">
              <label htmlFor="adresseComplement" className="label-inline">
                Adresse complément
              </label>
              <Field
                name="adresseComplement"
                type="text"
                className="input-mask"
              />
              <ErrorMessage name="adresseComplement" component="div" />
            </FormGroup>

            <FormGroup className="form-group">
              <label htmlFor="adresseCodePostal" className="label-inline">
                Adresse code postal
              </label>
              <Field
                name="adresseCodePostal"
                type="number"
                className="input-mask"
              />
              <ErrorMessage name="adresseCodePostal" component="div" />
            </FormGroup>

            <FormGroup className="form-group">
              <label htmlFor="adresseVille" className="label-inline">
                Adresse Ville
              </label>
              <Field name="adresseVille" type="text" className="input-mask" />
              <ErrorMessage name="adresseVille" component="div" />
            </FormGroup>

            {/* Téléphones professionnels */}
            <FormGroup className="form-group">
              <label htmlFor="telephoneProfessionnel" className="label-inline">
                Téléphone professionnel
              </label>
              <Field
                name="telephoneProfessionnel"
                type="tel"
                className="input-mask"
              />
              <ErrorMessage name="telephoneProfessionnel" component="div" />
            </FormGroup>

            <FormGroup className="form-group">
              <label htmlFor="telephoneProfessionnel2" className="label-inline">
                Téléphone professionnel 2
              </label>
              <Field
                name="telephoneProfessionnel2"
                type="tel"
                className="input-mask"
              />
              <ErrorMessage name="telephoneProfessionnel2" component="div" />
            </FormGroup>

            {/* Emails professionnels */}
            <FormGroup className="form-group">
              <label htmlFor="email" className="label-inline">
                Email professionnel
              </label>
              <Field
                name="email"
                type="email"
                className="input-mask"
              />
              <ErrorMessage name="email" component="div" />
            </FormGroup>

            <FormGroup className="form-group">
              <label htmlFor="emailProfessionnel2" className="label-inline">
                Email professionnel 2
              </label>
              <Field
                name="emailProfessionnel2"
                type="email"
                className="input-mask"
              />
              <ErrorMessage name="emailProfessionnel2" component="div" />
            </FormGroup>

            {/* Extranet */}
            <FormGroup className="form-group">
              <label htmlFor="lienExtranet" className="label-inline">
                Extranet partenaire
              </label>
              <Field name="lienExtranet" type="url" className="input-mask" />
              <ErrorMessage name="lienExtranet" component="div" />
            </FormGroup>

            <FormGroup className="form-group">
              <label htmlFor="identifiantExtranet" className="label-inline">
                Identifiant extranet
              </label>
              <Field
                name="identifiantExtranet"
                type="text"
                className="input-mask"
              />
              <ErrorMessage name="identifiantExtranet" component="div" />
            </FormGroup>

            <FormGroup className="form-group">
              <label htmlFor="motDePasseExtranet" className="label-inline">
                Mot de passe extranet
              </label>
              <Field
                name="motDePasseExtranet"
                type="password"
                className="input-mask"
              />
              <ErrorMessage name="motDePasseExtranet" component="div" />
            </FormGroup>

            <FormGroup className="form-group">
              <label htmlFor="motDePasse2" className="label-inline">
                Mot de passe n°2
              </label>
              <Field
                name="motDePasse2"
                type="password"
                className="input-mask"
              />
              <ErrorMessage name="motDePasse2" component="div" />
            </FormGroup>

            {/* Notes */}
            <FormGroup className="form-group">
              <label htmlFor="notes" className="label-inline">
                Notes
              </label>
              <Field name="notes" as="textarea" className="input-mask" />
              <ErrorMessage name="notes" component="div" />
            </FormGroup>

            <Button
              type="submit"
              style={{
                marginBottom: "50px",
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                color: "white",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Enregistrer le contact
            </Button>
          </Form>
        )}
      </Formik>
    </div>
    </Container>
    </div>
  )
}

export default NewContactForm
