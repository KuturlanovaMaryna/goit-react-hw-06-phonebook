import PropTypes from 'prop-types';
import css from './Search.module.css';

const Search = ({ onChange, value }) => {
  return (
    <input
      className={css.searcher}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default Search;

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
