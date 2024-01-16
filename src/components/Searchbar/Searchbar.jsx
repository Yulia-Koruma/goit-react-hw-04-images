import { useState } from "react";
import { ImSearch } from "react-icons/im";
import '../../styles.css';

export const Searchbar = ({onSubmit}) => {

    const [query, setQuery] = useState("");
    
    const handleChange = e => setQuery(e.currentTarget.value.toLowerCase());

    const handleSubmit = e => {
        e.preventDefault();

        if (query.trim() === '') {
            alert('Please fill out the search field!');
            return;
        }

        onSubmit(query);
        setQuery("");
    }

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <ImSearch />
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                />
            </form>
        </header>
    )
}
