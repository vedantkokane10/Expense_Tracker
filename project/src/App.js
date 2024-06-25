import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {Auth} from './pages/auth/index'
import {ExpenseTracker} from './pages/expense-tracker/expense-tracker'
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/' exact element={<Auth />}/>
          <Route path='/expenses' exact element={<ExpenseTracker />}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
