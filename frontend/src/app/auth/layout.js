import styles from "./styles.module.css";

export default function AuthLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
