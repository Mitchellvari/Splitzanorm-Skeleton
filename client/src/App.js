import "./App.css";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <h1 className="title">Splitzanorm</h1>
      <h2 onClick={() => window.location.reload()} className="subHeading">
        Products
      </h2>

      <Products />
    </>
  );
}

export default App;
