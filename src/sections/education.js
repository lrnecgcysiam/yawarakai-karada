import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";


export default function Education() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
          <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2021 - 2022
                </span>
              </h5>
              <h3>CUNY at Brooklyn College</h3>
              <h4>Master of Arts</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span> <span> Computer Science </span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2010 - 2021
                </span>
              </h5>
              <h3>SUNY at Stony Brook</h3>
              <h4>Bachelor of Science - C.E.A.S.</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span> <span> Technology Systems Management</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2001 - 2005
                </span>
              </h5>
              <h3>Briarcliffe College</h3>
              <h4>Bachelor of Fine Arts</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Visual Communications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
