import ClassNames from "./styles.module.css";

const Paper = ({ children, className, ...props }) => {
  return (
    <div className={`${ClassNames.paper} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Paper;
