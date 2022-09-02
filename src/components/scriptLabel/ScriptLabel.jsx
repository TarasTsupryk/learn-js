import { useState, useCallback } from "react";
import ClassNames from "./styles.module.css";

const ScriptLabel = ({ label }) => {
  const [wasСopied, setWasCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(label);
    setWasCopied(true);
  }, [label]);

  return (
    <span
      className={`${ClassNames.label} ${wasСopied ? ClassNames.copied : ""}`}
      onClick={handleCopy}
    >
      {label}
      {wasСopied && ' (скопійовано)'}
    </span>
  );
};

export default ScriptLabel;
