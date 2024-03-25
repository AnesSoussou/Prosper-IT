import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem } from 'reactstrap';

const FileSelectorModal = ({ isOpen, toggle, files, onSelect }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Choisir un fichier</ModalHeader>
      <ModalBody>
        <ListGroup>
          {files.map((file, index) => (
            <ListGroupItem 
              key={index} 
              action 
              onClick={() => onSelect(file)}>
              {file.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </ModalBody>
    </Modal>
  );
};

export default FileSelectorModal;
