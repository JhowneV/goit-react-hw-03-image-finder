import React from 'react';
import css from './SearchBar.module.css';
import { TbPhotoSearch } from "react-icons/tb";

export const SearchBar = ({ onSubmit }) => {
    return (
        <header className={css.searchBar}>
            <form className={css.searchForm} onSubmit={onSubmit}>
                <button type="submit" className={css.searchFormButton}>
                    <TbPhotoSearch className={css.tbPhotoSearch} />
                    <span className={css.searchFormButtonLabel}>Search</span>
                </button>
                <input
                    className={css.searchFormInput}
                    type="text"
                    autoComplete='off'
                    autoFocus
                    placeholder="Search images and photos"
                    name="search"
                />
                
            </form>
        </header>
    );
};

