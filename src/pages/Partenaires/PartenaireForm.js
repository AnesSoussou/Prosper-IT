import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, Container, FormGroup } from "reactstrap"
import "../Clients/Client.css"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addNewUser } from "store/actions"
import Breadcrumb from "components/Common/Breadcrumb"

// Validation schema
const PartenaireFormSchema = Yup.object().shape({
  formeJuridique: Yup.string().required("Ce champ est obligatoire"),
  raisonSociale: Yup.string().required("Ce champ est obligatoire"),
  service: Yup.string(),
  logo: Yup.mixed(), // Pour la gestion de fichiers, des vérifications supplémentaires peuvent être nécessaires
  codePartenaire: Yup.string(),
  categoriePartenaire: Yup.string().required("Ce champ est obligatoire"),
  adresseRue: Yup.string(),
  adresseComplement: Yup.string(),
  adresseCodePostal: Yup.number(),
  adresseVille: Yup.string(),
  telephoneProfessionnel: Yup.number(),
  telephoneProfessionnel2: Yup.number(),
  email: Yup.string().email("Adresse email invalide"),
  emailProfessionnel2: Yup.string().email("Adresse email invalide"),
  lienExtranet: Yup.string().url(),
  identifiantExtranet: Yup.string(),
  motDePasseExtranet: Yup.string(),
  motDePasse2: Yup.string(),
  notes: Yup.string(),
})

const newPartenaireForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="Prosper iT" breadcrumbItem="Ajout Partenaire" />
        <div className="addClientContainer">
          <Formik
            initialValues={{
              formeJuridique: "",
              raisonSociale: "",
              service: "",
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
            validationSchema={PartenaireFormSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(addNewUser(values))
              setSubmitting(false)
              navigate("/partenaires")
            }}
          >
            {({ setFieldValue }) => (
              <Form className="form-custom-style">
                <FormGroup className="form-group">
                  <label className="label-inline">Forme Juridique</label>
                  <Field
                    as="select"
                    name="formeJuridique"
                    className="input-mask"
                  >
                    <option value="SA">SA</option>
                    <option value="SARL">SARL</option>
                    <option value="SAS">SAS</option>
                    <option value="SCI">SCI</option>
                  </Field>
                  <ErrorMessage
                    name="formeJuridique"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Raison sociale */}
                <FormGroup className="form-group">
                  <label className="label-inline">Raison Sociale</label>
                  <Field
                    name="raisonSociale"
                    type="text"
                    className="input-mask"
                  />
                  <ErrorMessage
                    name="raisonSociale"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Service */}
                <FormGroup className="form-group">
                  <label className="label-inline">Service</label>
                  <Field name="service" type="text" className="input-mask" />
                  <ErrorMessage
                    name="service"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Logo (Notez que vous devrez gérer la prévisualisation et le chargement du fichier séparément) */}
                <FormGroup className="form-group">
                  <label className="label-inline">Logo</label>
                  <input
                    id="logo"
                    name="logo"
                    type="file"
                    onChange={event =>
                      setFieldValue("logo", event.currentTarget.files[0])
                    }
                    className="input-mask"
                  />
                  <ErrorMessage name="logo" component="div" className="error" />
                </FormGroup>

                {/* Code Partenaire */}
                <FormGroup className="form-group">
                  <label className="label-inline">Code Partenaire</label>
                  <Field
                    name="codePartenaire"
                    type="text"
                    className="input-mask"
                  />
                  <ErrorMessage
                    name="codePartenaire"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Catégorie de Partenaire */}
                <FormGroup className="form-group">
                  <label className="label-inline">Catégorie de Partenaire</label>
                  <Field
                    as="select"
                    name="categoriePartenaire"
                    className="input-mask"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Compagnie d'assurance">
                      Compagnie d'assurance
                    </option>
                    <option value="Agence immobilière">
                      Agence immobilière
                    </option>
                    {/* Ajoutez d'autres options ici */}
                  </Field>
                  <ErrorMessage
                    name="categoriePartenaire"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Adresse Rue */}
                <FormGroup className="form-group">
                  <label className="label-inline">Adresse Rue</label>
                  <Field
                    name="adresseRue"
                    type="text"
                    className="input-mask"
                  />
                  <ErrorMessage
                    name="adresseRue"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Adresse Complément */}
                <FormGroup className="form-group">
                  <label className="label-inline">Adresse Complément</label>
                  <Field
                    name="adresseComplement"
                    type="text"
                    className="input-mask"
                  />
                  <ErrorMessage
                    name="adresseComplement"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Adresse Code Postal */}
                <FormGroup className="form-group">
                  <label className="label-inline">Adresse Code Postal</label>
                  <Field
                    name="adresseCodePostal"
                    type="number"
                    className="input-mask"
                  />
                  <ErrorMessage
                    name="adresseCodePostal"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Adresse Ville */}
                <FormGroup className="form-group">
                  <label className="label-inline">Adresse Ville</label>
                  <Field
                    name="adresseVille"
                    type="text"
                    className="input-mask"
                  />
                  <ErrorMessage
                    name="adresseVille"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Téléphone Professionnel */}
                <FormGroup className="form-group">
                  <label className="label-inline">Téléphone Professionnel</label>
                  <Field
                    name="telephoneProfessionnel"
                    type="tel"
                    className="input-mask"
                  />
                  <ErrorMessage
                    name="telephoneProfessionnel"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Téléphone Professionnel 2 */}
                <FormGroup className="form-group">
                  <label className="label-inline">Téléphone Professionnel 2</label>
                  <Field
                    name="telephoneProfessionnel2"
                    type="tel"
                    className="input-mask"
                  />
                  <ErrorMessage
                    name="telephoneProfessionnel2"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Email Professionnel */}
                <FormGroup className="form-group">
                  <label className="label-inline">Email Professionnel</label>
                  <Field name="email" type="email" className="input-mask" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Email Professionnel 2 */}
                <FormGroup className="form-group">
                  <label className="label-inline">Email Professionnel 2</label>
                  <Field
                    name="emailProfessionnel2"
                    type="email"
                    className="input-mask"
                  />
                  <ErrorMessage
                    name="emailProfessionnel2"
                    component="div"
                    className="error"
                  />
                </FormGroup>

                {/* Extranet */}
                <FormGroup className="form-group">
                  <label htmlFor="lienExtranet" className="label-inline">
                    Extranet partenaire
                  </label>
                  <Field
                    name="lienExtranet"
                    type="url"
                    className="input-mask"
                  />
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
                  Enregistrer le nouveau partenaire
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  )
}

export default newPartenaireForm
