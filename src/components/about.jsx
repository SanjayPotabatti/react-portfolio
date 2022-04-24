import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          content: "Emotionall Balance",
          porcentage: "80%",
          value: "80",
        },
        { id: "CSS3_skill", content: "Caring", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "Priority to Friends",
          porcentage: "95%",
          value: "95",
        },
        {
          id: "PHP_skill",
          content: "Self Respect",
          porcentage: "50%",
          value: "50",
        },
        {
          id: "ReactJS_skill",
          content: "Cooking",
          porcentage: "20%",
          value: "20",
        },
        {
          id: "Python_skill",
          content: "Sweeping (झाडू मारणे)",
          porcentage: "99%",
          value: "99",
        },
        {
          id: "VanillaJS_skill",
          content: "Benevolent",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Wordpress_skill",
          content: "कपड़े धोने",
          porcentage: "99%",
          value: "99",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "If I had to introduce Rupali, 4.9ft, 125kg fatty idiot, brainless girl on the earth. One whom everyone wants have a best friend in their life. Kind of a girl whoes always ready for the crazy things(If you know you know)     --Namrata",
        },
        {
          id: "second-p-about",
          content:
            "So here we go with countless memories, infinite concalls, parties, trips, from being shy to drinking with all the boyz, we have grown up together as a family. The one who has emotionally attached to all of us. One who cares for all leaving yourself behind. Even our babies are going to be best friends. Here,s to another year of friendship, laughter, and getting up to no good together! Hapiest Birthday Ruuuuuuuuuuupppppululululululululululu      -- dipak",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Rupali</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
