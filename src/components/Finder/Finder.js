import PropTypes from 'prop-types';

export const Finder = ({ finder, onChange }) => {
  return (
    <input type="text" name="finder" value={finder} onChange={onChange}></input>
  );
};

Finder.propTypes = {
  finder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
