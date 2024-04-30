

import './App.css';
("react-hot-toast");
import Navigation from './components/Navigation/Navigation';
import RoutesComponent from './components/Navigation/RoutesComponent';

function App() {
  return (
    <>
      <div>
        <Navigation />
        <RoutesComponent />
      </div>
    </>
  );
}

export default App;
