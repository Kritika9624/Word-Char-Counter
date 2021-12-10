// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Word & Char Counter" />
      <div className="container mt-5">
        <TextForm heading = "Analyze text"/>
      </div>
    </>
  );
}

export default App;
