import './components/Container/Player.css';
import Players from './components/Container/Players';
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css';
import Navigation from './components/Navigation/Navigation';
import './components/Navigation/Navigation.css';


function App() {
  return (
    <div className="App">
        <Navigation />
        <Players />
        <Footer />
    </div>
  );
}

export default App;
