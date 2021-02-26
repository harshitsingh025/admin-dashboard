import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default App;
