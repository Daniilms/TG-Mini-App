import { useLocation } from "react-router-dom";
import { Links } from "../../consts/const";
import { LinkT } from "../../consts/types";
import { NavLink } from "../Link/NavLink";
import "./Navigation.css";
import { useCallback, useEffect, useState } from "react";

export const Navigation = () => {
  const currentUrl = useLocation();

  const [links, setLinks] = useState<LinkT[]>(Links);

  const changeCurrentLink = useCallback(() => {
    const changedLinks = links.map((link: LinkT) => {
      link.parameters.isActive = false;
      if (currentUrl.pathname === link.parameters.pageUrl) {
        link.parameters.isActive = true;
      }
      return link;
    });

    setLinks(changedLinks);
  }, [links, currentUrl]);

  useEffect(() => {
    changeCurrentLink();
  }, [currentUrl]);

  return (
    <ul className="navigation-menu">
      {links.map((link: LinkT) => (
        <NavLink key={link.parameters.id} link={link}></NavLink>
      ))}
    </ul>
  );
};
