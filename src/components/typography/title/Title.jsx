import ClassNames from "./style.module.css";

const Title = ({ children, className, ...props }) => {
  return (
    <p className={`${ClassNames.title} ${className}`} {...props}>
      {children}
    </p>
  );
};

export default Title;
