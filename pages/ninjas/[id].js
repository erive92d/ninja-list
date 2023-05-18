import Link from "next/link";
import { getAllUsers, getOneUser } from "../api/hello";

export const getStaticProps = async ({ params }) => {
  //   const id = context.params.id;
  const userDetail = await getOneUser(params.id);
  return {
    props: {
      userDetail,
    },
  };
};

export const getStaticPaths = async () => {
  const allUsers = await getAllUsers();
  const paths = allUsers.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default function Details({ userDetail }) {
  return (
    <div>
      <h1>Details</h1>
      <h2>{userDetail.name}</h2>
      <p>{userDetail.email}</p>
      <p>{userDetail.website}</p>

      <Link href="/ninjas">Go Back</Link>
    </div>
  );
}
