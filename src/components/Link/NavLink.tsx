import { LinkT } from "../../consts/types";
import { Link } from "react-router-dom";
import "./NavLink.css";

interface LinkProps {
  link: LinkT;
}

export const NavLink = ({ link }: LinkProps) => {
  return (
    <li className="navigation-menu-link">
      <Link to={link.parameters.pageUrl}>{link.parameters.pageName}</Link>
    </li>
  );
};
