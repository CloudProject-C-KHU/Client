import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  const chatURL = "/home";
  return (
    <main className={styles.main}>
      <div>
        <div>
          <h1 className={styles.h1}>🗒️공유 메모</h1>
        </div>
        <div>
          <h2 className={styles.h2}>
            <div className={styles.test}>노트를 간편하게</div>
            <div>공유해 보세요</div>
          </h2>
        </div>
        <Link href={chatURL}>
          <button className={styles.login}>
            <div>kakao Login</div>
          </button>
        </Link>
      </div>
    </main>
  );
}
