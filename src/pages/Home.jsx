import { useContext } from "react";
import CartContext from "../store/CartContext";
import ErrorComponent from "../layout/ErrorComponent/ErrorComponent";
import ListingHolder from "../components/ListingHolder/ListingHolder";

const Home = () => {
  const { shopItems, status } = useContext(CartContext);
  return (
    <div className="home-holder">
    
        {status === "success" ? (
          <ListingHolder data={shopItems} title="Available Items" />
        ) : (
          <ErrorComponent />
        )}
      
    </div>
  );
};

export default Home;
