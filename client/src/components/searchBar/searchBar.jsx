import {useState} from "react";
import "./searchBar.scss";

const types = ["Invest","Rent"];
const SearchBar = () => {
  const [query,setQuery] = useState({
    type:"Invest",
    location : "",
    minPrice:0,
    maxPrice:0
  })

  const switchType = (val) => {
    setQuery(prev=>({...prev,type:val}));
  }
  return (
    <div className="searchBar">
        <div className="type">
          {
            types.map((type)=>(
              <button key={type} onClick={()=>switchType(type)} className={query.type===type ? "active" : ""}>{type}</button>
            ))
          }
          
        </div>
        <form action="">
            <div className="input-group">
            <input type="text" name="location" placeholder="City Location"/>
            </div>
            <input type="number" name="minPrice" placeholder="Min Price" min={0} max={10000000}/>
            <input type="number" name="maxPrice" placeholder="Max Price" min={0} max={10000000}/>
            <a>
            <button type="button">
                <img src="/search.png" alt="" />
            </button>
            </a>
        </form>
    </div>
  );
};

export default SearchBar;
