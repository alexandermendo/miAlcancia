export const handleCheckboxChange = (value, selectedValues, setSelectedValues) => {
  setSelectedValues((prevSelectedValues) =>
    prevSelectedValues.includes(value)
      ? prevSelectedValues.filter((val) => val !== value)
      : [...prevSelectedValues, value]
  );
};

export const values = [10000, 20000, 50000, 100000, 200000];