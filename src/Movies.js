import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchFilters from "./SearchFilters";
import exampleResponse from "./example-response.json";

function Movies(props) {
  const [filters, set_filters] = useState({});
  const [items, set_items] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const fetchItems = async (url) => {
      const data = await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => set_items(result))
        .then(console.log([filters, urlWithFilters(), items]))
        .catch((error) => console.log("error", error));
    };
    set_items(exampleResponse); //temporary working on example response due to the limitation of free database requests.
    //fetchItems(urlWithFilters()); //real fetch from database (working)
  }, [filters]);

  useEffect(() => {
    console.log([filters, urlWithFilters(), items]);
  }, [items]);

  const urlWithFilters = () => {
    if (filters === {}) {
      return `${props.apiUrl}MostPopularMovies${props.apiKey}`;
      //BUG: this condition is never met, because filters === [object Object] and advanced search (below) without filters, returns an error
    }
    console.log("filters===" + filters);
    let changedAdress = `${props.apiUrl}advancedSearch${props.apiKey}?`;
    for (const [key, value] of Object.entries(filters)) {
      if (value !== undefined && value !== "") {
        changedAdress = changedAdress + key + "=" + value + "&";
      }
    }
    changedAdress = changedAdress.slice(0, -1);
    return changedAdress;
  };

  return (
    <div className="container-lg px-5 py-5">
      <SearchFilters
        apiUrl={props.apiUrl}
        apiKey={props.apiKey}
        passFiltersToParent={(filters) => set_filters(filters)}
      />

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">date of release</th>
            <th scope="col">genre</th>
            <th scope="col">rates</th>
          </tr>
        </thead>
        {
          <tbody>
            {/*             {items["results"].map(
              (
                item //TODO: table
              ) => (
                <tr key={item.id}>
                  <th scope="row">
                    <Link
                      to={`/Movies/${item.title
                        .replace(/ /g, "-")
                        .replace(/\//g, "-")}`}
                      onClick={() => props.GetId(item.id)}
                    >
                      {item.title}
                    </Link>
                  </th>
                  <td>
                    <p>date of release</p>
                  </td>
                  <td>
                    <p>genre</p>
                  </td>
                  <td>
                    <p>rates</p>
                  </td>
                </tr>
              )
            )} */}
          </tbody>
        }
      </table>
    </div>
  );
}

export default Movies;
