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
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>Vue.js</strong><br/>
                    Advanced
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>ReactJs</strong><br/>
                    Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>Angular</strong><br/>
                    Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>JavaScript</strong><br/>
                    Advanced
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>HTML</strong><br/>
                    Experienced
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>CSS</strong><br/>
                    Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
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
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>PHP</strong><br/>
                    Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>C#</strong><br/>
                    Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>C</strong><br/>
                    Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>Java</strong><br/>
                    Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>NodeJs</strong><br/>
                    Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>ExpressJs</strong><br/>
                    Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon"/>
                  <div>
                    <strong>Python</strong><br/>
                    Intermediate
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Database Column */}
          <div className="col-md-6">
            <div className="details-container">
              <h3>Database Management</h3>
              <div className="article-container">
              <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                    <strong>MySQL</strong><br/>
                    Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                    <strong>SQLite</strong><br/>
                    Basic
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                    <strong>MongoDB</strong><br/>
                    Basic
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Tools Column */}
          <div className="col-md-6">
            <div className="details-container">
              <h3>Tools</h3>
              <div className="article-container">
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                    <strong>Git</strong><br/>
                    Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                    <strong>GitHub</strong><br/>
                    Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                    <strong>Postman</strong><br/>
                    Intermediate
                  </div>
                </article>
                <article className="skill-item">
                  <img src={done} alt="experience icon" className="icon" />
                  <div>
                    <strong>Azure Devops</strong><br/>
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
