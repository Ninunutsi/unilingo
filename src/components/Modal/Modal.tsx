import React, { useEffect } from "react";
import styles from "./modal.module.css";

const Modal = ({ children }: { children: React.ReactElement }) => {
  useEffect(() => {
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
