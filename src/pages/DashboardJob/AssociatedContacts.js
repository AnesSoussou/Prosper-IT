import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { users } from "common/data";

// Composant pour afficher chaque contact
const ContactItem = ({ contact, onSelect }) => (
  <ListGroupItem
    action
    onClick={() => onSelect(contact)}
    className="d-flex align-items-center"
  >
    <div className="avatar-xs me-3">
      <span className="avatar-title rounded-circle bg-primary text-white">
        {contact.name.charAt(0)}
      </span>
    </div>
    <div className="flex-grow-1">
      <h6 className="mb-1">{contact.name}</h6>
      <p className="mb-0 text-muted">{contact.designation}</p>
    </div>
  </ListGroupItem>
);

const AssociatedContacts = () => {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSelectContact = contact => {
    if (!selectedContacts.some(selected => selected.id === contact.id)) {
      setSelectedContacts([contact, ...selectedContacts]);
    }
    toggleModal();
  };

  return (
    <React.Fragment>
      <Col className="mb-4">
        <CardBody>
          <div className="d-flex justify-content-between">
            <h4 className="card-title mb-4">Contacts</h4>
            <Button color="primary" onClick={toggleModal} style={{ marginBottom: 20 }}>
              +
            </Button>
          </div>
          <SimpleBar style={{ maxHeight: "180px", overflowY: "auto" }}>
            <div className="vstack gap-4">
              {/* Afficher les contacts sélectionnés */}
              {selectedContacts.map((contact, index) => (
                <ContactItem contact={contact} key={contact.id} onSelect={handleSelectContact} />
              ))}
              
              {/* Afficher les autres contacts */}
              {users.filter(user => !selectedContacts.some(selected => selected.id === user.id)).map((user, index) => (
                <ContactItem contact={user} key={user.id} onSelect={handleSelectContact} />
              ))}
            </div>
          </SimpleBar>
        </CardBody>
      </Col>

      {/* Modal pour sélectionner un contact */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Sélectionner un Contact</ModalHeader>
        <ModalBody>
          <ListGroup>
            {users.map((contact, index) => (
              <ContactItem contact={contact} key={index} onSelect={handleSelectContact} />
            ))}
          </ListGroup>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default AssociatedContacts;
