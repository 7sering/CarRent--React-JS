import React from "react";
import styles from "./Driver.module.css";
import Drive from "../../images/drive.png";

function Driver() {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="driver_image" />
      </div>

      <div className={styles.right}>
        <h2>
          {" "}
          Find Your Perfect <span> Cars for Travel</span>
        </h2>
        <p>We make you sure you will travel will remember for life</p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
}

export default Driver;
