import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./screens/Home";
import { NotificationsScreen } from "./screens/NotificationsScreen";
import { AccountScreen } from "./screens/AccountScreen";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/notifications" element={<NotificationsScreen />} />
            <Route path="/notifications" element={<AccountScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
