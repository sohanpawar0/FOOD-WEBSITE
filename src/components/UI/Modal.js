import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom"; //why import this library
const Backdrop = (props) => {
  <div className={classes.backdrop} onClick={props.onClose}/>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const poratElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop oClose={props.onClose}/>, poratElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, 
      poratElement)}
    </Fragment>
  );
};
export default Modal;
