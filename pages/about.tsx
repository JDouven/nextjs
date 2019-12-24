import { NextPage } from "next";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const About: NextPage = () => (
  <>
    <h1>About page!</h1>
    <p>Version: {publicRuntimeConfig.version}</p>
  </>
);

export default About;
