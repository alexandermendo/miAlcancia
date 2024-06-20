import { useState } from "react";
import { handleCheckboxChange, values } from "./utils/AddMoneyUtils";

export const AddMoney = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const val = values;

  const handleChange = (value) => { handleCheckboxChange(value, selectedValues, setSelectedValues)};

    // Aquí puedes manejar el envío de los valores seleccionados, por ejemplo, guardarlos en un estado global o enviarlos a un servidor
  const handleSubmit = () => { console.log("Valores seleccionados:", selectedValues)};

  return (
    <div>
      <h1>Ingresar Dinero</h1>
      <form>
        {val.map((value) => (
          <div key={value}>
            <label>
              <input type="checkbox" value={value} checked={selectedValues.includes(value)} onChange={() => handleChange(value)}/>
              {value}
            </label>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>Guardar</button>
      </form>
    </div>
  );
};
