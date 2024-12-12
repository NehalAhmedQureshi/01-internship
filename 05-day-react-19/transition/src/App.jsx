import logo from './logo.svg';
import './App.css';

function App() {
  const saveUsername=(e)=>{
    e.preventDefault()
    console.log(e.target);

    
  }
  return (
    <div className="App">
      <form onSubmit={saveUsername} className="user">
        <input type="text" className="username" name='username'/>
        <button className="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
