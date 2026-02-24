import { BrowserRouter, Routes, Route } from "react-router";
import LayoutDash from "./pages/private/Dashboard/LayoutDash";
import Dashboard from "./pages/private/Dashboard/Dashboard";
import Students from "./pages/private/Students/Students";
import Enrollments from "./pages/private/Enrollments/Enrollments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/**Empezamos a desarrollar con dashboard, posteriormente se agrega el login */}
        <Route path="/" element={<LayoutDash />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="enrollments" element={<Enrollments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
