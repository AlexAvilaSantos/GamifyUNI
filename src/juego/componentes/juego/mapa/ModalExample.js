/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const ModalExample = (props) => {
  const {
    buttonLabel = "Enviar",
    className = "goooo"
  } = props;

  const [modal, setModal] = useState(false);

  function validar(){
      {toggle()}
    //   const { history } = props;
    //   const { from } = { from: { pathname: "/index" } };
    //     history.push(from);

  }
  const toggle = () => setModal(!modal);
  
  
  return (
    <div>
        {console.log(props.type)}
      <Button type={props.type} color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Felicitaciones</ModalHeader>
        <ModalBody>
          Pokemon capturado, puede revisar su perfil.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={validar}>Ir a perfil</Button>{' '}
          <Button color="secondary" onClick={toggle}>Seguir</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
