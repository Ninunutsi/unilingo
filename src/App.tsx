import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./UI";
import { Loader } from "./components";

const Analytics = lazy(() => import("./views/Analytics/Analytics"));
const NotFound = lazy(() => import("./views/NotFound/NotFound"));
const Overview = lazy(() => import("./views/Overview/Overview"));

function App() {
  const location = useLocation();

  const [backgroundLocation, setBackgroundLocation] = useState(
    location.state?.background
  );

  useEffect(() => {
    //this was nessesery because user is automatically directed to overview page.
    // to have state.background we should navigate to it using useNavigate() and as navigation was not done
    // i had to add background manually
    if (location.pathname === "/overview" && !location.state?.background) {
      setBackgroundLocation({ pathname: "/analytics" });
    } else {
      setBackgroundLocation(location.state?.background);
    }
  }, [location]);

  return (
    <div className="App">
      <ThemeSwitcher />

      <Suspense fallback={<Loader />}>
        <Routes location={backgroundLocation || location}>
          <Route path="/" element={<Navigate to="/overview" />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {backgroundLocation && (
          <Routes>
            <Route path="/overview" element={<Overview />} />
          </Routes>
        )}
      </Suspense>
    </div>
  );
}

export default App;
