import React from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
        
                     
                 
          <a title="Project Showcase" href="https://sgii-portfolio.netlify.app/projects.html">
                 <h1 className="bold">Click Here Check Out My Projects</h1>
                 
                 
              </a>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >

          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
