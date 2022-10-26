import styles from "styles/contact.module.css";
import Social from "components/social";

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px" />
      <address>cube@mail.com</address>
    </div>
  );
}