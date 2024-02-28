import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = ({ label, className, onButtonClick }) => {
  return (
    <div className="search-bar ">
      <button onClick={onButtonClick} className={`search-button ${className}`}>
        {label}
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default SearchBar;
