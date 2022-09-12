import './App.scss';
import Navbar from "./components/Navbar"; 
import Headerimg from "./components/Headerimg.js";
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';

function App() {
  return (
    <div className="App" id="App">

      <Navbar /> {/*The nav bar and its content are in this component */}

      <Headerimg /> {/* The headerimg and its content is imported from this component */}

      <Section1 /> {/* Section 1 transform your brand section */} 

      <Section2 />  {/* Section 2 Stand out for the right audiance */}
      
      <Section3 /> {/* Section 3 Graphic Design  photography section */}

      <Section4 /> {/* Section 4 testimonial section */}

      <Section5 /> {/* Section 5 image before footer section */}

      <Section6 /> {/* Section 6 footer section */}

    </div>
  );
}

export default App;
