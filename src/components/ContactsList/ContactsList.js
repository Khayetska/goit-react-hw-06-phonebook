// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import css from './ContactsList.module.css';
import { getContacts, getFilter } from 'redux/selectors';

//export const ContactsList = ({ contacts, onDelete }) => {
export const ContactsList = () => {
  // const contacts = useSelector(state => state.contacts);
  const contacts = useSelector(getContacts);
  const finder = useSelector(getFilter);

  const getVisibleContacts = () => {
    if (finder.length > 0) {
      const normalizedFilter = finder.toLowerCase().trim();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => {
        return <ContactsItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape().isRequired),
//   onDelete: PropTypes.func.isRequired,
// };
