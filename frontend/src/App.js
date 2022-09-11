import './App.scss';
import Navbar from "./components/Navbar"; 
import Headerimg from "./components/Headerimg.js";

function App() {
  return (
    <div className="App" id="App">
      <Navbar /> {/*The nav bar and its content are in this component */}

      <Headerimg /> {/* The headerimg and its content is imported from this component */}

      
    </div>
  );
}

export default App;
