import React, { useState } from "react";
import FormControl from "./FormControl";
import Input from "./Input";
import onSignup from "./SignupAPI";

export const useTrackErrors = () => {
  const [errors, setErrors] = useState({});

  const setErrors = (errsArray) => {
    const newErrors = { ...errors };
    errsArray.forEach(({ key, value }) => {
      newErrors[key] = value;
    });

    setErrors(newErrors);
  };

  const clearErrors = () => {
    setErrors({});
  };

  return { errors, setErrors, clearErrors };
};