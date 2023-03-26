import { ErrorBoundary } from 'react-error-boundary';
import ErrorHandler from './common/ErrorHandler';
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
      <ErrorBoundary fallback={<ErrorHandler />}>
        <NavBar />
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorHandler />}>
        <Banner />
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorHandler />}>
        <TabMenu />
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorHandler />}>
        <Project />
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorHandler />}>
        <Contact />
      </ErrorBoundary>

      <ErrorBoundary fallback={<ErrorHandler />}>
        <Footer />
      </ErrorBoundary>

    </div>
  );
}

export default App;
