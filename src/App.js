import './common/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/NavBar';
import Banner from './features/banner/Banner';
import './features/Tab/skill.css'
import TabMenu from './features/Tab/Tab';
import Project from './features/projects/Project';
import Contact from './features/Contact/Contact';
import { Footer } from './features/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <TabMenu />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
