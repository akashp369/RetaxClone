import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button }
from "@chakra-ui/react";

const CustomerModal = ({ isOpen, onClose, customer }) => {
    console.log(customer);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Customer Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Render Customer details here */}
          {/* Access the Customer data using the "Customer" prop */}
          { customer!=null ?
          <>
            <p>Name: {customer.name} </p> 
            <p>ID: {customer.id}</p>
          </>
          :
          ""}       
          {/* Add other Customer details */}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomerModal;
