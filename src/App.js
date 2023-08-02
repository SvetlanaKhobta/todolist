import image from './todolist.jpg'
import './App.css';
import { ToDoList } from './todolist';

function App() {
  return (
    <div className='container'>
    
    <h1>TO DO LIST</h1>
    <img src={image}  alt='list' width='200px'/>
    <ToDoList />
    
    </div>
  );
}

export default App;
