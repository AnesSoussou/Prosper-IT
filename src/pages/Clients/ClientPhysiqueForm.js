import React, { useEffect, useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import "./Client.css"

const ClientPhysiqueForm = ({ onAjouterClient, onSubmitSuccess }) => {
  const [userRole, setUserRole] = useState(null)
  const [formData, setFormData] = useState({
    numeroClient: "",
    sourceContact: "",
    abonne: "",
    titre: "",
    nom: "",
    prenom: "",
    nomJeuneFille: "",
    dateNaissance: "",
    age: "",
    codePostalNaissance: "",
    fumeur: "",
    adresseNumero: "",
    adresseRue: "",
    adresseComplement: "",
    adresseCodePostal: "",
    adresseVille: "",
    telephonePersonnel: "",
    telephoneProfessionnel: "",
    emailPersonnel: "",
    emailProfessionnel: "",
    decede: "",
    clientsDe: [],
    liensAvecContacts: "",
    liensAvecSociete: "",
    dateUnion: "",
    situationFamiliale: "",
    regimeMatrimonial: "",
    situationParticuliere: "",
    profession: "",
    statut: "",
    typeContratTravail: "",
    dateEntreeEmployeur: "",
    sportRisque: "",
    nombrePersonnesCharge: "",
  })

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"))
    const role = authUser ? authUser.role : null
    setUserRole(role)
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleChangeCheckbox = id => {
    const checked = formData.clientsDe.includes(id)
    const newClientsDe = checked
      ? formData.clientsDe.filter(client => client !== id)
      : [...formData.clientsDe, id]
    setFormData(prevState => ({
      ...prevState,
      clientsDe: newClientsDe,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    onAjouterClient(formData)
    onSubmitSuccess()
  }

  return (
    <Form onSubmit={handleSubmit} className="form-custom-style">
      {userRole === "admin" && (
        <>
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
            <Label for="sourceContact" className="label-inline">
              Source contact
            </Label>
            <Input
              id="sourceContact"
              name="sourceContact"
              type="text"
              className="input-mask"
              value={formData.sourceContact}
              onChange={handleChange}
            />
          </FormGroup>
        </>
      )}
      <FormGroup className="form-group">
        <Label for="abonne" className="label-inline">
          Abonné
        </Label>
        <Input
          id="abonne"
          name="abonne"
          type="select"
          className="input-mask"
          value={formData.abonne}
          onChange={handleChange}
        >
          <option value="">Sélectionner</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </Input>
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="titre" className="label-inline">
          Titre
        </Label>
        <Input
          id="titre"
          name="titre"
          type="select"
          className="input-mask"
          value={formData.titre}
          onChange={handleChange}
        >
          <option value="">Sélectionner</option>
          <option value="Monsieur">Monsieur</option>
          <option value="Madame">Madame</option>
          <option value="Mademoiselle">Mademoiselle</option>
          <option value="Autre">Autre</option>
        </Input>
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="nom" className="label-inline">
          Nom
        </Label>
        <Input
          id="nom"
          name="nom"
          type="text"
          className="input-mask"
          value={formData.nom}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="prenom" className="label-inline">
          Prénom
        </Label>
        <Input
          id="prenom"
          name="prenom"
          type="text"
          className="input-mask"
          value={formData.prenom}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="nomJeuneFille" className="label-inline">
          Nom de jeune fille
        </Label>
        <Input
          id="nomJeuneFille"
          name="nomJeuneFille"
          type="text"
          className="input-mask"
          value={formData.nomJeuneFille}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="dateNaissance" className="label-inline">
          Date de naissance
        </Label>
        <Input
          id="dateNaissance"
          name="dateNaissance"
          type="date"
          className="input-mask"
          value={formData.dateNaissance}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="codePostalNaissance" className="label-inline">
          Code postal de naissance
        </Label>
        <Input
          id="codePostalNaissance"
          name="codePostalNaissance"
          type="number"
          className="input-mask"
          value={formData.codePostalNaissance}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="fumeur" className="label-inline">
          Fumeur/se
        </Label>
        <Input
          id="fumeur"
          name="fumeur"
          type="select"
          className="input-mask"
          value={formData.fumeur}
          onChange={handleChange}
        >
          <option value="">Sélectionner</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </Input>
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="adresseNumero" className="label-inline">
          Adresse numéro
        </Label>
        <Input
          id="adresseNumero"
          name="adresseNumero"
          type="number"
          className="input-mask"
          value={formData.adresseNumero}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="adresseRue" className="label-inline">
          Adresse rue
        </Label>
        <Input
          id="adresseRue"
          name="adresseRue"
          type="text"
          className="input-mask"
          value={formData.adresseRue}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="adresseComplement" className="label-inline">
          Adresse complément
        </Label>
        <Input
          id="adresseComplement"
          name="adresseComplement"
          type="text"
          className="input-mask"
          value={formData.adresseComplement}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="adresseCodePostal" className="label-inline">
          Adresse code postal
        </Label>
        <Input
          id="adresseCodePostal"
          name="adresseCodePostal"
          type="number"
          className="input-mask"
          value={formData.adresseCodePostal}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="adresseVille" className="label-inline">
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

      <FormGroup className="form-group">
        <Label for="telephonePersonnel" className="label-inline">
          Téléphone personnel
        </Label>
        <Input
          id="telephonePersonnel"
          name="telephonePersonnel"
          type="number"
          className="input-mask"
          value={formData.telephonePersonnel}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="telephoneProfessionnel" className="label-inline">
          Téléphone professionnel
        </Label>
        <Input
          id="telephoneProfessionnel"
          name="telephoneProfessionnel"
          type="number"
          className="input-mask"
          value={formData.telephoneProfessionnel}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="emailPersonnel" className="label-inline">
          Email personnel
        </Label>
        <Input
          id="emailPersonnel"
          name="emailPersonnel"
          type="email"
          className="input-mask"
          value={formData.emailPersonnel}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="emailProfessionnel" className="label-inline">
          Email professionnel
        </Label>
        <Input
          id="emailProfessionnel"
          name="emailProfessionnel"
          type="email"
          className="input-mask"
          value={formData.emailProfessionnel}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="dateUnion" className="label-inline">
          Date de l'union
        </Label>
        <Input
          id="dateUnion"
          name="dateUnion"
          type="date"
          className="input-mask"
          value={formData.dateUnion}
          onChange={handleChange}
        />
      </FormGroup>

      {userRole === "client" && (
        <>
          <FormGroup className="form-group">
            <Label for="situationFamiliale" className="label-inline">
              Situation familiale
            </Label>
            <Input
              id="situationFamiliale"
              name="situationFamiliale"
              type="select"
              className="input-mask"
              value={formData.situationFamiliale}
              onChange={handleChange}
            >
              <option value="">Sélectionner</option>
              <option value="Marié(e)">Marié(e)</option>
              <option value="Célibataire">Célibataire</option>
              <option value="Union libre">Union libre</option>
              <option value="Divorcé(e)">Divorcé(e)</option>
              <option value="Veuf(ve)">Veuf(ve)</option>
              <option value="Pacsé(e) indivision">Pacsé(e) indivision</option>
              <option value="Pacsé(e) séparatiste">Pacsé(e) séparatiste</option>
            </Input>
          </FormGroup>

          <FormGroup className="form-group">
            <Label for="regimeMatrimonial" className="label-inline">
              Régime matrimonial
            </Label>
            <Input
              id="regimeMatrimonial"
              name="regimeMatrimonial"
              type="select"
              className="input-mask"
              value={formData.regimeMatrimonial}
              onChange={handleChange}
            >
              <option value="">Sélectionner</option>
              <option value="Communauté réduite aux acquêts">
                Communauté réduite aux acquêts
              </option>
              <option value="Communauté universelle">
                Communauté universelle
              </option>
              <option value="Séparation de biens">Séparation de biens</option>
              <option value="Communauté de meubles et d'acquêts">
                Communauté de meubles et d'acquêts
              </option>
              <option value="Participation aux acquêts">
                Participation aux acquêts
              </option>
            </Input>
          </FormGroup>
        </>
      )}

      {userRole === "admin" && (
        <>
          <FormGroup className="form-group">
            <Label for="decede" className="label-inline">
              Décédé
            </Label>
            <Input
              id="decede"
              name="decede"
              type="select"
              className="input-mask"
              value={formData.decede}
              onChange={handleChange}
            >
              <option value="">Sélectionner</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </Input>
          </FormGroup>
        </>
      )}
      <FormGroup className="form-group">
        <Label className="label-inline">Clients de</Label>
        <div>
          <FormGroup check className="form-group">
            <Label check className="label-inline">
              <Input
                type="checkbox"
                id="giordanoPatrimoine"
                onChange={() => handleChangeCheckbox("Giordano Patrimoine")}
                checked={formData.clientsDe.includes("Giordano Patrimoine")}
              />
              Giordano Patrimoine
            </Label>
          </FormGroup>
          <FormGroup check className="form-group">
            <Label check className="label-inline">
              <Input
                type="checkbox"
                id="giordanoImmobilier"
                onChange={() => handleChangeCheckbox("Giordano Immobilier")}
                checked={formData.clientsDe.includes("Giordano Immobilier")}
              />
              Giordano Immobilier
            </Label>
          </FormGroup>
          <FormGroup check className="form-group">
            <Label check className="label-inline">
              <Input
                type="checkbox"
                id="giordanoPatrimoineImmobilier"
                onChange={() =>
                  handleChangeCheckbox(
                    "Giordano Patrimoine + Giordano Immobilier"
                  )
                }
                checked={formData.clientsDe.includes(
                  "Giordano Patrimoine + Giordano Immobilier"
                )}
              />
              Giordano Patrimoine + Giordano Immobilier
            </Label>
          </FormGroup>
        </div>
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="situationParticuliere" className="label-inline">
          Situation particulière / Majeur(e) protégé(e)
        </Label>
        <Input
          id="situationParticuliere"
          name="situationParticuliere"
          type="select"
          className="input-mask"
          value={formData.situationParticuliere}
          onChange={handleChange}
        >
          <option value="">Sélectionner</option>
          <option value="Invalide 1ère catégorie">
            Invalide 1ère catégorie
          </option>
          <option value="Invalide 2ème catégorie">
            Invalide 2ème catégorie
          </option>
          <option value="Invalide 3ème catégorie">
            Invalide 3ème catégorie
          </option>
          <option value="Sous curatelle">Sous curatelle</option>
          <option value="Sous tutelle">Sous tutelle</option>
          <option value="Sous habilitation familiale">
            Sous habilitation familiale
          </option>
          <option value="Handicapé(e) Autonome">Handicapé(e) Autonome</option>
        </Input>
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="profession" className="label-inline">
          Profession
        </Label>
        <Input
          id="profession"
          name="profession"
          type="text"
          className="input-mask"
          value={formData.profession}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="statut" className="label-inline">
          Statut
        </Label>
        <Input
          id="statut"
          name="statut"
          type="select"
          className="input-mask"
          value={formData.statut}
          onChange={handleChange}
        >
          <option value="">Sélectionner</option>
          <option value="Cadre">Cadre</option>
          <option value="Non-cadre">Non-cadre</option>
          <option value="Agent commercial">Agent commercial</option>
          <option value="Profession libérale">Profession libérale</option>
          <option value="Intérimaire">Intérimaire</option>
          <option value="Fonctionnaire">Fonctionnaire</option>
          <option value="Gérant(e) salarié(e)">Gérant(e) salarié(e)</option>
          <option value="Gérant(e) non-salarié(e)">
            Gérant(e) non-salarié(e)
          </option>
          <option value="Entreprise individuelle">
            Entreprise individuelle
          </option>
          <option value="Retraité(e)">Retraité(e)</option>
          <option value="Auto-entreprise">Auto-entreprise</option>
          <option value="Intermittent(e)">Intermittent(e)</option>
        </Input>
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="typeContratTravail" className="label-inline">
          Type de contrat de travail
        </Label>
        <Input
          id="typeContratTravail"
          name="typeContratTravail"
          type="select"
          className="input-mask"
          value={formData.typeContratTravail}
          onChange={handleChange}
        >
          <option value="">Sélectionner</option>
          <option value="CDI">CDI</option>
          <option value="CDD">CDD</option>
          <option value="Intérimaire">Intérimaire</option>
          <option value="Apprenti(e)">Apprenti(e)</option>
          <option value="Contrat de professionalisation">
            Contrat de professionalisation
          </option>
        </Input>
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="dateEntreeEmployeur" className="label-inline">
          Date d'entrée chez l'employeur
        </Label>
        <Input
          id="dateEntreeEmployeur"
          name="dateEntreeEmployeur"
          type="date"
          className="input-mask"
          value={formData.dateEntreeEmployeur}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="sportRisque" className="label-inline">
          Pratique d'un sport à risque?
        </Label>
        <Input
          id="sportRisque"
          name="sportRisque"
          type="select"
          className="input-mask"
          value={formData.sportRisque}
          onChange={handleChange}
        >
          <option value="">Sélectionner</option>
          <option value="Sport de montagne">Sport de montagne</option>
          <option value="Équitation">Équitation</option>
          <option value="Sport de combat">Sport de combat</option>
          <option value="Sport aquatique">Sport aquatique</option>
          <option value="Sport automobile">Sport automobile</option>
          <option value="Sport aérien">Sport aérien</option>
        </Input>
      </FormGroup>

      <FormGroup className="form-group">
        <Label for="nombrePersonnesCharge" className="label-inline">
          Nombre de personne à charge fiscale
        </Label>
        <Input
          id="nombrePersonnesCharge"
          name="nombrePersonnesCharge"
          type="number"
          className="input-mask"
          value={formData.nombrePersonnesCharge}
          onChange={handleChange}
        />
      </FormGroup>

      <Button
        type="submit"
        style={{
          marginBottom: "100px",
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

export default ClientPhysiqueForm
