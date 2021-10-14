import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
    <div class="frame">
      <section class="header">
        <button class="header-btn main-black-color">Add</button>
        <h1 class="header-title">Todo List</h1>
        <button id="clear-btn" class="header-btn main-red-color">
          Clear
        </button>
      </section>
      <section class="add">
        <form action="" class="add-form">
          <input type="text" class="add-input" />
          <button class="add-btn main-black-color">Add</button>
        </form>
      </section>
      <section class="todos"></section>
    </div>
  </div>

  );
}

export default App;
