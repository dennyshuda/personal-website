import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
