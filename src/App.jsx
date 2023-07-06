
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import List from './sh/List'
import Result from './sh/Result'
// import Task

function App() {
  

  return (
    <>
      <h1>Minebrat assignment</h1>
      {/* <Task/> */}
      {/* <List/> */}

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<List/>}/>
        <Route exact path="/result" element={<Result/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

















// import Dropdown from "./med/Dropdown";

// export default function App() {
//   return (
//     <div className="App">
//       <Dropdown placeHolder="Select..." />
//     </div>
//   );
// }
