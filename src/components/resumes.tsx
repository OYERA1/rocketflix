import Image from "next/image";
import styles from "./resumes.module.css";

interface FilmTypes {
  posters: string;
  resumeText: string;
  title: string;
}

export default function Resumes({ posters, title, resumeText }: FilmTypes) {
  return (
    <div className={styles.container}>
      <aside>
        <Image
          src={posters}
          alt={title}
          width={171}
          height={243}
          className={styles.image}
        />
      </aside>
      <main className={styles.mainDiv}>
        <span className={styles.title}>{title}</span>
        <span className={styles.overview}>{resumeText}</span>
      </main>
    </div>
  );
}
