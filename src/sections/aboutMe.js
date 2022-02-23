import { useContext } from 'react';
import { Contexto } from '../appContext';

export default function AboutMe() {
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  const email = 'chris.k.samuel@protonmail.com';
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>about me</h2>
          <h3>
            Salutations! My name is Chris Samuel,{' '}
            <span className="colorRed">Creative Technologist</span>
          </h3>
        </header>

        <p>
          I am a American Creative Technologist based in New York City.{' '}
          I love working on all things tech. I spent the last 20 years making sure 
          that I would definitely want to do this for the rest of my life. 
        </p>
        <p>
          I am very passionate and dedicated to my work, i have plenty of
          problem solving, communication and leadership skills; and I'm very
          good at teamwork. You can get in touch with me by filling this{' '}
          <strong>
            <a onClick={openModal}>📄form</a>
          </strong>
          , or you can send me an email to
          <br />
          <strong>
            <a href={`mailto:${email}`}>📧{email}</a>
          </strong>
          ; also you are more than welcome to follow my work on my{' '}
          <strong>
            <a target="_blank" href="https://github.com/lrnecgysiam.com">
              github
            </a>
          </strong>{' '}
          and visit my{' '}
          <strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/cksamuel/"
            >
              linkedin
            </a>
          </strong>{' '}
          profile.
        </p>
      </div>
    </section>
  );
}
