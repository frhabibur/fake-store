import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    const { title, id, image, price, description } = props.product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="border-bottom-0" closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <img className="w-50 h-50 mx-auto" src={image} alt="" />
                <h4 className="text-center mt-3 text-danger">{title}</h4>
                <h4 className="text-center text-warning"><span >$ </span>{price}</h4>
                <Modal.Body>{description}</Modal.Body>
            </Modal>
        </>
    );
};

export default ReactModal;