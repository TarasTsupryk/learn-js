import { Link } from "react-router-dom";
import ClassNames from "./styles.module.css";

const CustomLink = ({ children, className, ...props }) => {
  return (
    <Link className={`${ClassNames.link} ${className}`} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
