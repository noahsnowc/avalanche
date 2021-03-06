import React from 'react';
import './App.css';
import QuillEditor from "./textEditor";
import Sidebar from './sideBar';


/*TODO: Create Styling support for collapsing menu
TODO: add document saving 
TODO: Add Plot planner
TODO: add character hub
TODO: add relationship mapper
TODO: add Structure mapper
TODO: add auto documenting of characters or places
TODO: add dark mode
TODO: Programmatic relationship tracker: Idea-> Characters exist as functions that other characters and events are inputs to, with plot/events being the output.
*/

function App() {
  return (
  <div id="App">
    <Sidebar />
    <div id="editor-wrap">
      <QuillEditor />
    </div>
  </div>);
}

export default App;
