import colorSharp from "../assets/img/color-sharp.png";
import profile from "../assets/img/profile.jpg";

export const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>About Me</h2>
              <p>
                I’m Dilmi Ishara, a final-year undergraduate at the University of Colombo, Faculty of Technology.
                Aspiring to become a Full Stack Developer, I am passionate about building innovative and
                scalable web solutions. Explore my portfolio to see my skills, projects, and experiences.
              </p>
              <div className="row align-items-center">
                {/* Profile Picture */}
                <div className="col-md-4 text-center">
                  <img
                    src={profile}
                    alt="profileimg"
                    style={{ width: "18vw", maxWidth: "100%"}}
                  />
                </div>

                {/* Details Section */}
                <div className="col-md-8">
                  <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
                    Undergraduate student
                  </h3>
                  <div className="row">
                    {/* Details Column 1 */}
                    <div className="col-md-6">
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Birthday:</strong> 31. 01. 2002
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Website:</strong> Not available
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Phone:</strong> +94 702060802
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>City:</strong> Ella, Sri Lanka
                      </p>
                    </div>

                    {/* Details Column 2 */}
                    <div className="col-md-6">
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Age:</strong> 23
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Degree:</strong> Bachelor of Information & Communication Technology (Honours)
                      </p>
                      <p style={{ marginBottom: "5px" }}>
                        <strong>Email:</strong> dilmiishara2000@gmail.com
                      </p>
                    </div>
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
