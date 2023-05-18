import Link from "next/link";
import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ut sunt a
          dolor vel minus eligendi, inventore blanditiis recusandae incidunt aut
          excepturi aliquam hic officiis rerum. Dolorem dolore quisquam
          assumenda.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ut sunt a
          dolor vel minus eligendi, inventore blanditiis recusandae incidunt aut
          excepturi aliquam hic officiis rerum. Dolorem dolore quisquam
          assumenda.
        </p>
        <Link href="/">Home</Link>
      </div>
    </>
  );
};

export default About;
