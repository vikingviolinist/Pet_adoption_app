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
          className="p-0 m-0"
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
          }}
        >
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            <Link className="text-6xl text-white hover:text-gray-200" to="/">
              Adopt Me!
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
