import { Links } from "../../consts/const";
import { LinkT } from "../../consts/types";
import { Link } from "../Link/Link";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <ul className="navigation-menu">
      {Links.map((link: LinkT) => (
        <Link key={link.parameters.id} link={link}></Link>
      ))}
    </ul>
  );
};
