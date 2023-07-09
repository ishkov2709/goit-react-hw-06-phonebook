import { useSelector } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  return (
    <List>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, tel }) => (
          <ContactItem key={id} name={name} tel={tel} />
        ))}
    </List>
  );
};

export default ContactList;
