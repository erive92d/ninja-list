import { useState } from "react";
import { getAllUsers } from "../api/hello";
import Link from "next/link";
import styles from "../../styles/ninjas.module.css";
//comment
export const getStaticProps = async () => {
  const allUsers = await getAllUsers();

  return {
    props: {
      allUsers: allUsers,
    },
  };
};

const Ninjas = ({ allUsers }) => {
  return (
    <div>
      <h1>All Ninjas</h1>

      {allUsers?.map((ninja) => (
        <div key={ninja.id}>
          <Link className={styles.single} href={`/ninjas/${ninja.id}`}>
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
