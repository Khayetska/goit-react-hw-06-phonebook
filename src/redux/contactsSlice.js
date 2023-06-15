import Swal from 'sweetalert2';
const { createSlice } = require('@reduxjs/toolkit');
const { nanoid } = require('nanoid');

//contacts: JSON.parse(window.localStorage.getItem('contacts')) ??
const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        for (const contact of state) {
          if (contact.name === action.payload.name) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `'${action.payload.name}' is already in contacts.`,
            });
            return;
          }
        }
        state.unshift(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
