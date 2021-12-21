import { useState } from "react";

const Button = ({ label }) => {
  const [getLabel, setLabel] = useState("");
  return (
    <>
      <button
        data-testId="btn1"
        onClick={() => setLabel("Changed")}
        type="button"
      >
        {getLabel || label}
      </button>
      <button data-testId="btn2" type="button">
        {label}
      </button>
    </>
  );
};

export default Button;
