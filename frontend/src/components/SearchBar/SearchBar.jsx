import React, { useState } from "react";
import { KEY } from "../../localKey";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ setVids }) => {
  const [query, setQuery] = useState("");

  const onSearch = (searchTerm) => {
    console.log("search", searchTerm);
    userSearch(query);

  };

  async function userSearch(searchTerm) {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&fields=items(id,snippet(title,description,thumbnails/medium))&part=snippet`
    );
    console.log("User search results");
    console.log(response.data);
    setVids(response.data.items);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Need to update to bring in information to search page */}
      <Link to={`/`}>
        <button className="search-button" onClick={() => onSearch(query)}>
          Search
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
