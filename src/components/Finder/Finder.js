// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Finder = () => {
  const dispatch = useDispatch();

  const handleFinderChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <input
      type="text"
      name="finder"
      // value={filter}
      onChange={handleFinderChange}
    ></input>
  );
};

// Finder.propTypes = {
//   finder: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
