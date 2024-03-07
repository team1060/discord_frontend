import PropTypes from 'prop-types';

const SearchBar = ({ label, className, tagName }) => {
  const Component = tagName === 'button' ? 'button' : 'label';
  return (
    <div className="search-bar ">
      <Component className={`search-button ${className}`}>{label}</Component>
    </div>
  );
};

SearchBar.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
};

export default SearchBar;
