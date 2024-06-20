import AuthContextProvider from "../src/contexts/AuthContext";
import { AppRouter } from './components/routers/AppRouter';
import './App.css'


function App() {
  return (
    <div className="wrapper">
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  )
}

export default App
