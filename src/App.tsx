import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { NewNote } from "./components/newnote";

function App() {
  return (
    <div className="m-4">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
  //this will be a note website with backend etc.
  //It has to been done on the 20.10 this year
  //If i dont hit it, i have so programm through the night from 20 to 21
  // TOMMOOORRRRROOW WILLLL BE THE DAY
  //enten style with my new LOGOOOO
  //I TRY TO GET IT TOMORROW DONE, BRAIN IS DOWN AFTER THE DAY
}

export default App;
