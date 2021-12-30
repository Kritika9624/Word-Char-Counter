// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Word & Char Counter" />
      <div className="container mt-5">
        {/* <TextForm heading = "Analyze text"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
