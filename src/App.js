import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="component-wrap">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
      
    </div>
  );
}

export default App;
