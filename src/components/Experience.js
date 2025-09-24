import colorSharp from "../assets/img/color-sharp.png";
import experience from "../assets/img/experience.png";

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="experience-bx wow zoomIn">
                            <h2>Experience</h2>
                            <div className="row align-items-center">
                                {/* Profile / Experience Image */}
                                <div className="col-md-4 text-center">
                                    <img
                                        src={experience}
                                        alt="experience-img"
                                        className="experience-img"
                                    />
                                </div>

                                {/* Details Section */}
                                <div className="col-md-8">
                                    <h3 style={{ textAlign: "left", marginBottom: "15px", marginTop: "40px" }}>
                                        Software Engineer Intern – Full Stack
                                    </h3>
                                    <h5 style={{ textAlign: "left"}}>
                                        LAUGFS Holdings (Pvt.) Ltd | Feb 2025 – Aug 2025
                                    </h5>
                                    {/*<ul style={{ textAlign: "left", marginTop: "15px" }}>*/}
                                    {/*    <li>*/}
                                    {/*        Developed and maintained web applications using Laravel, Vue.js, and MySQL.*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        Designed and implemented RESTful APIs to streamline business processes, including payment settlement management.*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        Collaborated with cross-functional teams in an Agile environment to deliver scalable software solutions.*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*        Gained hands-on experience in frontend-backend connectivity, database integration, and testing workflows.*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}
                                    <p style={{ textAlign: "justify"}}>
                                        During my internship, I developed and maintained web applications using Laravel,
                                        Vue.js, and MySQL, while designing and implementing RESTful APIs to streamline
                                        business processes such as payment settlement management. I collaborated with
                                        cross-functional teams in an Agile environment to deliver scalable software solutions,
                                        gaining hands-on experience in frontend–backend connectivity, database integration,
                                        and testing workflows.
                                    </p>
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
