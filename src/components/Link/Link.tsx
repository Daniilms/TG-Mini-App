import { LinkT } from "../../consts/types";
import "./Link.css";

interface LinkProps {
  link: LinkT;
}

export const Link = ({ link }: LinkProps) => {
  return <li className="navigation-menu-link">{link.parameters.pageName}</li>;
};
