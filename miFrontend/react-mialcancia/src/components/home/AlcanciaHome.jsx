import { useNavigate } from "react-router-dom";
import { goToAddMoney } from "./utils/AlcanciaHomeUtils";

export const Alcancia = () => {
  const navigate = useNavigate();
  const addMoney = () => { goToAddMoney(navigate) }

  return (
    <div>
      <h1>Bienvenidos a la Alcancía Digital</h1>
      <p>Por favor selecciona la opción a elegir</p>
      <div><button onClick={addMoney}>Ingresar Dinero</button></div>
    </div>
  );
};
