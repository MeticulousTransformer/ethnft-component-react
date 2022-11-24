import styles from "./pictures/author.module.css";

function Author() {
  return (
    <div className={styles.Author}>
      <div className={styles.avatar}></div>
      <p className={styles.text}>Creation of</p>
      <p className={styles.name}>Jules Wyvern</p>
    </div>
  );
}

export default Author;
