import React from "react";

interface FormInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

// Reusable form input component
const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
}) => {
  return (
    <div className="form-input-container">
      <label className="form-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="form-input"
      />
    </div>
  );
};

export default FormInput;
