import './common/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/NavBar';
import Banner from './features/banner/Banner';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner /> 
    </div>
  );
}

export default App;
