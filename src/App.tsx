import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Analytics, NotFound, Overview } from "./views";
import { ThemeSwitcher } from "./UI";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const isOverviewRoute = location.pathname === "/overview";

  return (
    <div className="App">
      <ThemeSwitcher />
      {isOverviewRoute && <Analytics />}
      <Routes location={background || location}>
        <Route path="/" element={<Navigate to="/overview" />} />

        <Route path="/overview" element={<Overview />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/overview" element={<Overview />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
