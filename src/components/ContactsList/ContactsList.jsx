import { useSelector } from 'react-redux';
import { TbMoodSad } from 'react-icons/tb';
import ContactsItem from 'components/ContactsItem';
import css from './ContactsList.module.css';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';

const { contactsTitle, contactList, message, messageIcon, messageText } = css;

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <h2 className={contactsTitle}>Contacts</h2>
      {contacts?.length > 0 ? (
        <ul className={contactList}>
          {visibleContacts.map(contact => {
            return <ContactsItem key={contact.id} contact={contact} />;
          })}
        </ul>
      ) : (
        <div className={message}>
          <TbMoodSad size={80} className={messageIcon} />
          <p className={messageText}>You don't have any contact yet</p>
        </div>
      )}
    </>
  );
};

export default ContactsList;
