import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import data from "./config";

function App() {
  const poleDate = data.poleDate;
  return (
    <div className="w-full">
      <div className="flex items-center justify-center ">
        <Header poleDate={poleDate} />
      </div>
      <Footer/>

    </div>
  );
}

export default App;
