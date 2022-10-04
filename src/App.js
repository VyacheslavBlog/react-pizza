import './scss/app.scss';
import { Header } from './components/header';
import { Home } from './components/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
    </div>
  );
}

export default App;
