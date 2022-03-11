import { useState, useEffect } from "react";

const SearchFilters = (props) => {
  const [filters, set_filters] = useState({});

  const handleFilters = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    set_filters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    props.passFiltersToParent(filters);
  }, [filters]);

  return (
    <section className="section-preview adv">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="clause">
            <div className="label">
              <h3>Title</h3>
            </div>
            <div className="inputs">
              <input
                name="title"
                className="form-control"
                onChange={
                  handleFilters
                } /* TODO: optimisation: to many API requests. Should be onSubmit, not during writing */
              />
              <em>e.g. The Godfather</em>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="clause">
            <h3>Display Options</h3>
            <div className="inputs">
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <select
                    id="search-count"
                    name="count"
                    className="browser-default custom-select"
                    onChange={handleFilters}
                  >
                    <option value={50}>50 per page</option>
                    <option value={100}>100 per page</option>
                    <option value={250}>250 per page</option>
                  </select>
                </div>
                &nbsp;sorted by:&nbsp;
                <div className="col-lg-4 col-sm-12">
                  <select
                    name="sort"
                    className="browser-default custom-select"
                    onChange={handleFilters}
                  >
                    <option value="moviemeter,asc">Popularity Ascending</option>
                    <option value="moviemeter,desc">
                      Popularity Descending
                    </option>
                    <option value="alpha,asc"> A-Z Ascending</option>
                    <option value="alpha,desc"> A-Z Descending</option>
                    <option value="user_rating,asc">
                      User Rating Ascending
                    </option>
                    <option value="user_rating,desc">
                      User Rating Descending
                    </option>
                    <option value="num_votes,asc"> Num Votes Ascending</option>
                    <option value="num_votes,desc">Num Votes Descending</option>
                    <option value="boxoffice_gross_us,asc">
                      US Box Office Ascending
                    </option>
                    <option value="boxoffice_gross_us,desc">
                      US Box Office Descending
                    </option>
                    <option value="runtime,asc"> Runtime Ascending</option>
                    <option value="runtime,desc"> Runtime Descending</option>
                    <option value="year,asc"> Year Ascending</option>
                    <option value="year,desc"> Year Descending</option>
                    <option value="release_date,asc">
                      Release Date Ascending
                    </option>
                    <option value="release_date,desc">
                      Release Date Descending
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
