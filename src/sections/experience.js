import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

export default function Experience() {
  return (
    <section className="sectionCont sectionContExperience">
      <div id="experience" className="target"></div>
      <header>
        <h2>Experience</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
          <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2017-Present
                </span>
              </h5>
              <h3> Yamanote  </h3>
              <h4> Principal Software Engineer</h4>
              <ul>
                <li>
                  <span className="colorRed"> - </span>
                  <span>Develop, design and regulate systems for organizations</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Help the client find the 'shortcut' using cleverness instead of muscle.</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2012 - 2013
                </span>
              </h5>
              <h3>Web Developer</h3>
              <h4>National Association for Professional Women</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Web Programmer for a social network for Working Professionals</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Coldfusion Programming, Plugins, SQL</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Full Stack Web Development</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2015-2016
                </span>
              </h5>
              <h3>Consultant | TDAmeritrade</h3>
              {/* <h4>KAR{' & '}MA S.A.C.</h4> */}
              <h4> Software Developer Consultant</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Server-side Web Development (Java)</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Client-side Development (Dojo/jQuery)</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Client Side Web Development (JavaFX)</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2016-2017
                </span>
              </h5>
              <h3> Consultant | Jetblue Airways </h3>
              <h4> Software Developer Consultant</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Front End Web Development (Angular)</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Server-side Development (NodeJS)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
