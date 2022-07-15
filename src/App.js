import { StrictMode } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <div
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
            minHeight: "100vh",
          }}
        >
          <header className="w-full p-3 sm:p-7">
            <Link className="brightness-150 flex justify-center" to="/">
              <img
                src="http://static.frontendmasters.com/resources/2019-05-02-complete-intro-react-v5/image-logo.png"
                alt="Adopt Me!"
              />
            </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>
      </Provider>
    </StrictMode>
  );
};

export default App;
