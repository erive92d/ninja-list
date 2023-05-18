import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ut sunt a
          dolor vel minus eligendi, inventore blanditiis recusandae incidunt aut
          excepturi aliquam hic officiis rerum. Dolorem dolore quisquam
          assumenda.
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ut sunt a
          dolor vel minus eligendi, inventore blanditiis recusandae incidunt aut
          excepturi aliquam hic officiis rerum. Dolorem dolore quisquam
          assumenda.
        </p>
        <Link className={styles.btn} href="/ninjas">
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
