import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/phonebookSlice';
import { Btn, Item, Name, Number } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ name, tel }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}</Name>
      <Number>{tel}</Number>
      <Btn
        type="button"
        name="delete"
        onClick={() => {
          dispatch(deleteContact(name));
        }}
      >
        Detele
      </Btn>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};
