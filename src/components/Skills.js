import colorSharp from "../assets/img/color-sharp.png";
import done from "../assets/img/verify.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="skill-bx">
      <h2>Skills</h2>

      <div className="experience-details-container">
        <div className="row">
          {/* Programming Languages Column */}
          <div className="col-md-6">
            <div className="details-container">
              <h3>Frontend Development</h3>
              <div className="article-container">
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                    <strong>HTML</strong><br/>
                    Experienced
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>CSS</strong><br/>
                  Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>JavaScript</strong><br/>
                  Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>ReactJs</strong><br/>
                  Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>Angular</strong><br/>
                  Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>Bootstrap</strong><br/>
                  Basic
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Backend Development Column */}
          <div className="col-md-6">
            <div className="details-container">
              <h3>Backend Development</h3>
              <div className="article-container">
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>Python</strong><br/>
                  Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>Java</strong><br/>
                  Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>C</strong><br/>
                  Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>NodeJs</strong><br/>
                  Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>ExpressJs</strong><br/>
                  Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                  <strong>SQL</strong><br/>
                  Basic
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />

    </section>
  );
};
