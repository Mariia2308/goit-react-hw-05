import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim().toLowerCase());
    setQuery(""); // Очистка поля ввода после отправки запроса
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
