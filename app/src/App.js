import About from "./components/about";
import Header from "./components/header";
import Poems from "./components/poems";

function App() {
  return (
    <div className="border-2 border-amber-200 mx-40">
      <Header>
        <About />
        <Poems />
      </Header>
    </div>
  );
}

export default App;
