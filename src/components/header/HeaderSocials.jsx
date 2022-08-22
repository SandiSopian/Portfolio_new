import React from "react";
import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sandi-sopian-007623227/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/SandiSopian" target="_blank">
        <BsGithub />
      </a>
      <a href="https://medium.com/@shunasand53" target="_blank">
        <BsMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
