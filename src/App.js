import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './App.css';
import TodoInputs from './components/TodoInputs';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App ">
      <Card style={{ margin: '0rem auto' }} className='card'>
        <TodoInputs />
        <TodoList />
      </Card>
    </div>
  );

}

export default App;
