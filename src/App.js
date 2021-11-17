import './App.css';
import Search from './components/Search';
import initialDetails from './initialDetails';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div>
      <Search details={initialDetails} />
    </div>
  );
}

export default App;
