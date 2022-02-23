import Head from "next/head";
import NavBar from "../sections/navBar";
import Banner from "../sections/banner";
import AboutMe from "../sections/aboutMe";
import Education from "../sections/education";
import Experience from "../sections/experience";
import Skills from "../sections/skills";
import Modal from "../components/modal";
import { Contexto } from "../appContext";
import { useContext } from "react";

export default function Home() {
  const { navResOpen, setNavResOpen } = useContext(Contexto);
  const closeNavRes = () => {
    if (navResOpen) {
      setNavResOpen(() => false);
    }
  };
  return (
    <>
      <Head>
        <title>Chris Samuel | Creative Technologist
        </title>
        <link rel="image_src" href="https://chrissamuel.dev/images/amaze.thunderstruck.me.jpg"/>
        <meta
          name="description"
          content="Hey, this is my personal website. You can take a look at my resume, download my CV and see how you can contact me."
        />
        <meta property="og:title" content="Chris Samuel" />
        <meta property="og:site_name" content="Chris Samuel" />
        <meta property="og:url" content="chrissamuel.dev" />
        <meta
          property="og:description"
          content="Hey, this is my personal website. You can take a look at my resume, download my CV and see how you can contact me"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://chrissamuel.dev/images/amaze.thunderstruck.me.jpg"
        />
        <meta property="og:image:width" content="1580"/>
        <meta property="og:image:height" content="790"/>
        <meta name="twitter:image" content="https://chrissamuel.dev/images/amaze.thunderstruck.me.jpg"/>
      </Head>
      <Modal />
      <NavBar />
      <main onClick={closeNavRes}>
        <Banner />
        <AboutMe />
        <section className="container">
          <div className="containerCont rowFlexRes breakExpEduc">
            <Experience />
            <Education />
          </div>
        </section>
        <div id="skills" className="target"></div>

        <Skills />
      </main>
    </>
  );
}
