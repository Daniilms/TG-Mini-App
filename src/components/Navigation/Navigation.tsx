import { Links } from "../../consts/const";
import { LinkT } from "../../consts/types";
import { NavLink } from "../Link/NavLink";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <ul className="navigation-menu">
      {Links.map((link: LinkT) => (
        <NavLink key={link.parameters.id} link={link}></NavLink>
      ))}
    </ul>
  );
};
