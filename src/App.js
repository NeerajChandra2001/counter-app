import './App.css';
import Counter from './components/Counter';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> */}
     <h1> Counter Application</h1>
    </a>
  </div>
</nav>
      <Counter/>


      
      </header>
    </div>
  );
}

export default App;
