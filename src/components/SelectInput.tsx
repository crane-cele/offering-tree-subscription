import React from "react";

interface SelectInputProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Reusable select input component
const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="select-input-container">
      <label className="form-label">{label}</label>
      <select value={value} onChange={onChange} className="form-select">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
