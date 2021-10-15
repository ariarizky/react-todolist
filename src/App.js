import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div clasName="container">
    <div clasName="frame">
      <section clasName="header">
        <button clasName="header-btn main-black-color">Add</button>
        <h1 clasName="header-title">Todo List</h1>
        <button id="clear-btn" clasName="header-btn main-red-color">
          Clear
        </button>
      </section>
      <section clasName="add">
        <form action="" clasName="add-form">
          <input type="text" clasName="add-input" />
          <button clasName="add-btn main-black-color">Add</button>
        </form>
      </section>
      <section clasName="todos"></section>
    </div>
  </div>

  );
}

export default App;
