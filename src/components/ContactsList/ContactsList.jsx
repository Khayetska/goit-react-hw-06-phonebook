import { useSelector } from 'react-redux';
import ContactsItem from 'components/ContactsItem';
import css from './ContactsList.module.css';
import { getContacts, getFilter } from 'redux/selectors';

const ContactsList = () => {
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
    <>
      <h2 className={css.contactsTitle}>Contacts</h2>
      {contacts?.length > 0 ? (
        <ul className={css.contactList}>
          {visibleContacts.map(contact => {
            return <ContactsItem key={contact.id} contact={contact} />;
          })}
        </ul>
      ) : (
        <p>You don't have any contact yet</p>
      )}
    </>
  );
};

export default ContactsList;