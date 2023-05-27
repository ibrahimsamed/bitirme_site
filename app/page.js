import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>
          ISTANBUL TECHNICAL UNIVERSITY ELECTRONICS AND COMMINICATION GRADUATED
          PROJECT
        </h1>
      </div>
      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/ibrahim-samed-yalçın-4b6086185/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            by İBRAHİM SAMED <span>-&gt;</span>
          </h3>
          <p>GO WHO İS</p>
          <img src="ibrahim.png" alt="ibrahim" width={250} height={275} />
        </a>
        <a>
          <img src="itu.png" alt="itu" width={500} height={450} />
        </a>
        <a></a>
        <a
          href="https://www.linkedin.com/in/ibrahim-samed-yalçın-4b6086185/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            by ŞEMS ŞAMİL<span>-&gt;</span>
          </h3>
          <p>GO WHO İS</p>
        </a>
      </div>
      <div className={styles.grid}>
        <a
          href="https://www.memorial.com.tr/tani-ve-testler/elektromiyografi-emg-nedir"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            What is EMG signal <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feature of project <span>-&gt;</span>
          </h2>
          <p>What will we do</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            progress of deployment <span>-&gt;</span>
          </h2>
          <p>we explain what we do </p>
        </a>
        <a
          href="http://13.48.238.142:8501"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            proje denemesi <span>-&gt;</span>
          </h2>
          <p>buradan makine öğrenmesi metodumuzu çalıştırabilirsiniz .</p>
        </a>
      </div>
    </main>
  );
}
