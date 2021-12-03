type DropdownProps = {
  label: string;
  idSelect: string;
  options: OptionProps[];
};

type OptionProps = {
  label: string;
  value: string;
};

function Dropdown({ label, idSelect, options }: DropdownProps) {
  return (
    <>
      <label htmlFor={idSelect}>
        <h1>{label}</h1>
      </label>
      <select id={idSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
