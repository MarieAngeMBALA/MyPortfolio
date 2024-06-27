import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import Hobbies from './components/Hobbies';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-br-[150px]">
          <div>
            <Experience />
          </div>
        </div>
        
        <Projects />

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <Hobbies />
        </div>
   
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
