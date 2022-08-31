import ClassNames from "./style.module.css";

const SubTitle = ({ children, className, ...props }) => {
  return (
    <p className={`${ClassNames.subTitle} ${className}`} {...props}>
      {children}
    </p>
  );
};

export default SubTitle;
