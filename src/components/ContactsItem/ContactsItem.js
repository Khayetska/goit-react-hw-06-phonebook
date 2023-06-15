import PropTypes from 'prop-types';
import { FaPhoneAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import css from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const { contactsIcon, contactsItem, deleteBtn } = css;

export const ContactsItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete it!`,
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', `Contact '${name}' has been deleted.`, 'success');
        dispatch(deleteContact(id));
      }
    });
  };

  return (
    <li className={contactsItem}>
      <FaPhoneAlt className={contactsIcon} />
      {name}: {number}
      {/*       <button className={deleteBtn} onClick={() => onDelete(id)}> */}
      <button className={deleteBtn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  // onDelete: PropTypes.func.isRequired,
};
