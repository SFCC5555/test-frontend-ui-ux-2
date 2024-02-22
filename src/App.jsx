import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NewTaskPage } from "./pages/NewTaskPage";
import { ProfilePage } from "./pages/ProfilePage";
import { useEffect, useState } from "react";

function App() {
  const user = { name: "Fernando", lastName: "Carrasco" };
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={<HomePage user={user} tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/profile" element={<ProfilePage user={user} />} />
        <Route path="/new-task" element={<NewTaskPage setTasks={setTasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
