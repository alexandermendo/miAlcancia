import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./public/PublicRoute";
import { PrivateRoute } from "./private/PrivateRoute";
import { AddMoneyRouter } from "./AddMoneyRouter";
import { AlcanciaHomeRouter } from "./AlcanciaHomeRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/private" element={<PrivateRoute />}/>

        <Route path="/" element={<PublicRoute />}>
          <Route index element={<AlcanciaHomeRouter />} />
          <Route path="/add-money" element={<AddMoneyRouter />} />
        </Route>
      </Routes>
    </Router>
  );
};
