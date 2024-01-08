import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Poems from "./components/poems";

function App() {
  return (
    <div className="border-2">
      <div className="border-2 border-amber-200 mx-auto lg:w-1024">
        <Header>
          <About />
          <Poems />
        </Header>
        <Footer />
      </div>
    </div>
  );
}

export default App;
