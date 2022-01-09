import React from "react";
import slugify from "slugify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faOrcid,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

/**
 * Projects
 *
 * Takes a JSON of projects and responsive div with the links.
 */
export const Projects = ({ projectsData, sectionTitle }) => {
  const id = slugify(sectionTitle);

  const iconMap = {
    github: faGithub,
    linkedin: faLinkedin,
    orcid: faOrcid,
    twitter: faTwitter,
    other: faExternalLinkAlt,
  };

  const links = projectsData.map((project) => {
    let icon = iconMap[project.link.name];
    return (
      <div key={project.title}>
        <a href={project.link.url}>
          <FontAwesomeIcon icon={icon} size="lg" />
          {project.title}
        </a>
      </div>
    );
  });

  return <div id={id}>{links}</div>;
};
