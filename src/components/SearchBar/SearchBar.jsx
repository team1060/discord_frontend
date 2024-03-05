import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = ({ label, className, onButtonClick, tagName }) => {
  const Component = tagName === 'button' ? 'button' : 'label';
  return (
    <div className="search-bar ">
      <Component onClick={onButtonClick} className={`search-button ${className}`}>
        {label}
      </Component>
    </div>
  );
};

SearchBar.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  tagName: PropTypes.string.isRequired,
};

export default SearchBar;
