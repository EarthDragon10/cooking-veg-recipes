import react from "react";
import "../../style/inputSearch.scss";
import { AiOutlineSearch } from "react-icons/ai";

const InputSearch = () => {
  return (
    <div className="search-box">
      <div className="search-group shadow">
        <input
          type="search"
          placeholder="Search"
          name="recipe"
          id="recipe"
          required
        />
        <button className="icon-search">
          <AiOutlineSearch
            size={45}
            style={{ position: "relative", right: "4px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
