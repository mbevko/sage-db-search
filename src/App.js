import './App.css';
import Search from './components/Search';
import AccountsPayable from './modules/AccountsPayable';
import AccountsReceivable from './modules/AccountsReceivable';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div>
      <Search apMod={AccountsPayable} arMod={AccountsReceivable} />
      
    </div>
  );
}

export default App;
