import { useState, useRef } from "react";

export const Otp = ({ otpLength = 6 }) => {
  const [otpField, seOtpField] = useState(new Array(otpLength).fill(""));
  console.log(otpField);
  const ref = useRef([]);
  const handleKeyDown = (e, index) => {
    const key = e.key;
    if (isNaN(key)) {
      return;
    }
    const copyField = [...otpField];
    copyField[index] = key;
    if (index + 1 < otpField.length) ref.current[index + 1].focus();
    seOtpField(copyField);
  };

  return (
    <div
      className="optField"
      style={{ display: "flex", margin: "5px", width: "5px", height: "5px" }}
    >
      {otpField?.map((item, index) => (
        <div>
          <input
            ref={(currentref) => (ref.current[index] = currentref)}
            value={item}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        </div>
      ))}
    </div>
  );
};
