import BookForm from './BookForm/BookForm';
import ContactList from './Contacts/ContactList/ContactList';
import Contacts from './Contacts/Contacts';
import FilterForm from './Contacts/FilterForm/FilterForm';

export const App = () => {
  return (
    <div style={{ width: '400px', margin: '0 auto', padding: '40px 0' }}>
      <BookForm title="Phonebook" />
      <Contacts title="Contacts">
        <FilterForm />
        <ContactList />
      </Contacts>
    </div>
  );
};
