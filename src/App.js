import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./Pages/home/Home";
import FilteredItemList from "./eg";
import IntHome from "./Pages/intHome/IntHome";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <IntHome/>
      <Footer />
    </div>
  );
}

export default App;
