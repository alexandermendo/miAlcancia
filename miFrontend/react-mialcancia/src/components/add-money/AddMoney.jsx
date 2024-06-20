import { useState } from "react";

export const AddMoney = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const values = [10000, 20000, 50000, 100000, 200000];

  const handleCheckboxChange = (value) => {
    setSelectedValues((prevSelectedValues) =>
      prevSelectedValues.includes(value)
        ? prevSelectedValues.filter((val) => val !== value)
        : [...prevSelectedValues, value]
    );
  };

  const handleSubmit = () => {
    // Aquí puedes manejar el envío de los valores seleccionados, por ejemplo, guardarlos en un estado global o enviarlos a un servidor
    console.log("Valores seleccionados:", selectedValues);
  };

  return (
    <div>
      <h1>Ingresar Dinero</h1>
      <form>
        {values.map((value) => (
          <div key={value}>
            <label>
              <input
                type="checkbox"
                value={value}
                checked={selectedValues.includes(value)}
                onChange={() => handleCheckboxChange(value)}
              />
              {value}
            </label>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>Guardar</button>
      </form>
    </div>
  );
};
