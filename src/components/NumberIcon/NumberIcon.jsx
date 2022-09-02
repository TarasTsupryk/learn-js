import ClassNames from "./style.module.css";

const NumberIcon = ({ children, size, color, className, ...props }) => {
  return (
    <div
      className={`${ClassNames.numberIcon} ${className}`}
      style={{ minHeight: size, minWidth: size, backgroundColor: color }}
      {...props}
    >
      {children}
    </div>
  );
};

export default NumberIcon;
