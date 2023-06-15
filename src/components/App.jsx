import { useSelector } from 'react-redux';
import { IoListCircleOutline } from 'react-icons/io5';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Finder } from './Finder/Finder';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className="conteiner">
      <h1 className="mainTitle">
        Ph
        <IoListCircleOutline className="titleIcon" />
        nebook
      </h1>
      <Form />
      <Finder />

      {contacts?.length > 0 ? (
        <ContactsList />
      ) : (
        <p>You don't have any contact yet</p>
      )}
    </div>
  );
};
