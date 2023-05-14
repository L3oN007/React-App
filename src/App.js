import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css';
import Navigation from './components/Navigation/Navigation';
import './components/Navigation/Navigation.css';
import './components/Players/Players.css';
import Main from './components/PlayersPresentation/Main';


function App() {
  return (
    <div className="App">
        <Navigation />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
