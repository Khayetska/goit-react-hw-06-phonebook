// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IoListCircleOutline } from 'react-icons/io5';
// import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Finder } from './Finder/Finder';
import { getContacts } from 'redux/selectors';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  // );
  // const [finder, setFinder] = useState('');

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addNewContact = ({ name, number }) => {
  //   const contactItem = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   for (const contact of contacts) {
  //     if (contact.name === contactItem.name) {
  //       window.alert(`${contactItem.name} is already in contacts.`);
  //       return;
  //     }
  //   }

  //   setContacts([contactItem, ...contacts]);
  // };

  // const handleFinderChange = evt => {
  //   const { name, value } = evt.target;

  //   if (name === 'finder') setFinder(value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = finder.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContact = itemId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== itemId)
  //   );
  // };

  const contacts = useSelector(getContacts);

  return (
    <div className="conteiner">
      <h1 className="mainTitle">
        Ph
        <IoListCircleOutline className="titleIcon" />
        nebook
      </h1>
      <Form />

      <h3 className="finderTitle">Find contacts by name</h3>
      <Finder />

      <h2 className="contactsTitle">Contacts</h2>
      {contacts?.length > 0 ? (
        <ContactsList />
      ) : (
        <p>You don't have any contact yet</p>
      )}
    </div>
  );
};
