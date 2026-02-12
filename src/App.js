import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  const [activeTab, setActiveTab] = useState('counter');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React App</h1>
        <p>Sample React Application with Components</p>
      </header>

      <nav className="nav-tabs">
        <button 
          className={activeTab === 'counter' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('counter')}
        >
          Counter
        </button>
        <button 
          className={activeTab === 'todos' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('todos')}
        >
          Todo List
        </button>
      </nav>

      <main className="content">
        {activeTab === 'counter' && <Counter />}
        {activeTab === 'todos' && <TodoList />}
      </main>

      <footer className="App-footer">
        <p>© 2026 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
