import About from "./_components/About";
import Experience from "./_components/Experience";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Projects from "./_components/Projects";


export default function Home() {
  return (
    <main>
      <Header />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Footer />
    </main>
  );
}
