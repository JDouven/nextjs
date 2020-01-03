import { NextPage } from "next";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

interface Props {
  quote: string;
  author: string;
}

const Home: NextPage<Props> = ({ quote, author }) => (
  <>
    <h1>Some inspiration for today</h1>
    <p>{quote}</p>
    <p>{author}</p>

    <Link href="/about">
      <a>About</a>
    </Link>
  </>
);

Home.getInitialProps = async ({ req }) => {
  // const res = await fetch("https://quote-garden.herokuapp.com/quotes/random");
  // const json = await res.json();
  return {
    quote: "The computer is never wrong, only the programmer is.",
    author: "Quote Author"//json.quoteAuthor
  };
};

export default Home;
