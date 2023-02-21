import "./App.css";
import { BrowserRouter,Route, Navigate, Routes  } from "react-router-dom";
import Page from "./routes/Home";
import { Login } from "./routes/Login";
import ProtectedRoute from "./routes/ProtectedRoute";


export default function App() {
  return (
    <BrowserRouter>
      <main className="container content">
        <Routes>
          <Route path="/login" element={<Login />} loading />

          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Page />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
