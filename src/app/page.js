import styles from "./page.module.css";
import LoginBtn from "@/component/LoginBtn/LoginBtn";

export default function Home() {
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
        <div>
          <LoginBtn />
        </div>
      </div>
    </main>
  );
}
