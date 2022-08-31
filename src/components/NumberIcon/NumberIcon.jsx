import ClassNames from "./style.module.css";

const NumberIcon = ({ children, size, color, className, ...props }) => {
  return (
    <div
      className={`${ClassNames.numberIcon} ${className}`}
      style={{ height: size, width: size, backgroundColor: color }}
      {...props}
    >
      {children}
    </div>
  );
};

export default NumberIcon;
