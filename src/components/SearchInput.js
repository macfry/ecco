import React from 'react';
import './SearchInput.css';

const SearchInput = ({ value, onChangeText }) => {
    React.useEffect(() => {
    let input = document.querySelector('input');
    input.addEventListener('input', onChangeText);

    return input.removeEventListener('input', onChangeText);
    }, [onChangeText]);

    return (
        <div className="search-container">
            <label>FEN: 
            <input
                type="text"
                value={value}
                onChange={onChangeText}
                placeholder="Show chessboard by FEN"
            />
            </label>
        </div>
    );
};

export default SearchInput;
