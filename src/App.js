import { useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import { siteRoutes } from "./routes/routes";
import { CartContextProvider } from "./store/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global-styles.scss";

const App = () => {
  const routing = useRoutes(siteRoutes);
  return (
    <CartContextProvider>
      <Header />
      <div className="App">{routing}</div>
    </CartContextProvider>
  );
};

export default App;
