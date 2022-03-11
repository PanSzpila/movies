import { useState } from "react";
import Nav from "./Nav1";
import Home from "./Home";
import Movies from "./Movies";
//import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [itemId, set_itemId] = useState([]);
  const apiUrl = "https://imdb-api.com/en/API/";
  const apiKey = "/k_77xk7x3r/";

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/movies"
            exact
            element={
              <Movies
                apiUrl={apiUrl}
                apiKey={apiKey}
                GetId={(itemId) => set_itemId(itemId)}
              />
            }
          />
          {/*           <Route
            path="/movies/:name"
            element={
              <ItemDetail apiUrl={apiUrl} apiKey={apiKey} itemId={itemId} />
            }
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
