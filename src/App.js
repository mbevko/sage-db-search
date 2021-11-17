import './App.css';
import Search from './components/Search';
import initialDetails from './initialDetails';

function App() {
  return (
    <div>
      <Search details={initialDetails} />
    </div>
  );
}

export default App;
