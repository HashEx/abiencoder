import React from "react";

import * as s from "./Modal.styled";

const Modal = ({
  children,
  show,
  onClose,
}: {
  children: any;
  show: boolean;
  onClose: () => void;
}) => (
  <s.WrapperModal show={show}>
    <s.ModalClose onClick={onClose} />
    <s.Modal>{children}</s.Modal>
  </s.WrapperModal>
);

export default Modal;
