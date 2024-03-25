import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Row, Col} from "reactstrap"

const Breadcrumb = ({
  breadcrumbItem,
  children,
}) => {
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"))
    const role = authUser ? authUser.role : null
    setUserRole(role)
  }, [])
  return (
<Row>
  <Col xs={12}>
    <div className="page-title-box d-flex align-items-center" style={{ gap: '20px' }}>
      {/* Titre */}
      <h4 className="font-size-18 mr-2" style={{ marginBottom: 0 }}>{breadcrumbItem}</h4>
      {/* Barre de recherche, affichée à côté du titre et du bouton */}
      <div style={{ flex: 1, maxWidth: '600px' }}>
        {children}
      </div>
    </div>
  </Col>
</Row>


  )
}

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  onAddFolderClick: PropTypes.func, // Gestion du clic
  showAddFolderButton: PropTypes.bool, // Contrôle de l'affichage du bouton
}

// Assurez-vous de définir des defaultProps pour les nouvelles props
Breadcrumb.defaultProps = {
  showAddFolderButton: false, // Par défaut, le bouton ne s'affiche pas
  onAddFolderClick: () => {}, // Fonction vide par défaut pour éviter les erreurs si non fournie
}

export default Breadcrumb
