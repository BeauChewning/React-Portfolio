import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/BeauChewning"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/beau-chewning-7a543321a/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/16519307/beau-chewning"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
