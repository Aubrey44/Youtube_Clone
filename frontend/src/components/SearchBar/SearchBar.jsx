import React, { useState, useEffect } from 'react';
import { KEY } from '../../localKey';
import axios from "axios";


// !TODO: check API call and see if you need all of the search params

const SearchBar = ({setVids}) => {
    
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
        <button className="search-button" onClick={(e) => onSearch(query)}>Search</button>
      </div>
    );
  };
  
  export default SearchBar;
  