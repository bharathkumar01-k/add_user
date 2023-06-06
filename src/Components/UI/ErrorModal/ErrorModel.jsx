import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose} />;
};

const Overlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClose}>{props.buttonName}</Button>
            </footer>
        </Card>
    );
};
const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <BackDrop onClose={props.onClose} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <Overlay
                    title={props.title}
                    message={props.message}
                    onClose={props.onClose}
                    buttonName="close"
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default ErrorModal;
