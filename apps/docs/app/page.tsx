import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className="text-lg">this is the docs homepage</p>
      </div>
    </main>
  );
}
