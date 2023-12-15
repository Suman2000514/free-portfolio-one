import Banner from "./components/Banner";
import Contact from "./components/Contact";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
      
          <Projects />
        
          <Contact />
       
        </div>
      </div>
    </main>
  );
}

export default App;
