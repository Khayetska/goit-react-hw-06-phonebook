import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumder] = useState('');

  const { form, formLabel, submitBtn, formInput } = css;
  const newContact = { name, number };

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumder(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(newContact);

    reset();
  };

  const reset = () => {
    setName('');
    setNumder('');
  };

  return (
    <form onSubmit={handleSubmit} className={form}>
      <label className={formLabel}>
        Name
        <input
          type="text"
          name="name"
          className={formInput}
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={formLabel}>
        Number
        <input
          type="tel"
          name="number"
          className={formInput}
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={submitBtn}>
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
