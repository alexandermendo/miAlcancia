import { useNavigate } from "react-router-dom";

export const Alcancia = () => {
  const navigate = useNavigate();

  const goToAddMoney = () => {
    navigate("/add-money");
  }

  return (
    <div>
      <h1>Bienvenidos a la Alcancía Digital</h1>
      <p>Por favor selecciona la opción a elegir</p>
      <div>
        <button onClick={goToAddMoney}>Ingresar Dinero</button>
      </div>
    </div>
  );
};
