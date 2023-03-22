import './common/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/NavBar';
import Banner from './features/banner/Banner';
import './features/Tab/skill.css'
import TabMenu from './features/Tab/Tab';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <TabMenu />
    </div>
  );
}

export default App;
