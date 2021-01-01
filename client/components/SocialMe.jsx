import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faOrcid,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

/**
 * SocialMe
 *
 * Take an array of social media links and return
 * a responsive div with the links.
 */
export const SocialMe = ({ urlArray, children }) => {
  const iconUrlMapping = {
    github: faGithub,
    linkedin: faLinkedin,
    orcid: faOrcid,
    twitter: faTwitter,
  };

  const parsedUrls = urlArray.map((url) => {
    const nodeUrl = new URL(url);
    const parsed = { name: nodeUrl.hostname.slice(0, -4), href: nodeUrl.href };
    return parsed;
  });

  const links = parsedUrls.map((parsedUrl) => {
    let icon = iconUrlMapping[parsedUrl.name];
    return (
      <div key={parsedUrl.name}>
        <a href={parsedUrl.href}>
          <FontAwesomeIcon icon={icon} size="lg" />
          {parsedUrl.name}
        </a>
      </div>
    );
  });

  return <div id="social-media">{links}</div>;
};
