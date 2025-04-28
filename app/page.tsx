import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";

export default function Portfolio() {
  return (
    <main className="pt-20">
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
    </main>
  );
}
