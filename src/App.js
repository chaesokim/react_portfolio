import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'


function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Project contentid="drunkenmonkey"></Project>
      <Project contentid="Ahndo"></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
