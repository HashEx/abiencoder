import colors from "../../helpers/colors";
import styled from "styled-components";

export const WrapperModal = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show === true ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  top: 0;
  left: 0;
  background-color: ${colors.MODAL_BG};
  z-index: 101;

  @media (max-height: 600px) {
    align-items: flex-start;
  }
`;

export const ModalClose = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 102;
  margin: 0 10px;
`;
