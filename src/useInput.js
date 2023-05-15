import { useState } from "react";

export function useInput(initialValue, submitAction) {
  const [inputValue, setInputvalue] = useState(initialValue);

  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleSubmit = () => {
    submitAction(inputValue);
    setInputvalue("");
  };

  return [inputValue, handleChange, handleSubmit];
}
