import { useFormik } from 'formik';
import { Btn, InputField, Label, TextWrapper, Title } from './BookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/phonebookSlice';
import PropTypes from 'prop-types';

const BookForm = ({ title }) => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
    },
    onSubmit: values => {
      if (!values.name ?? !values.tel) return;

      !contacts.find(
        ({ name }) => name.toLowerCase() === values.name.toLowerCase()
      ) && dispatch(addContact(values));
      formik.resetForm();
    },
  });

  return (
    <div>
      <Title>{title}</Title>
      <form onSubmit={formik.handleSubmit}>
        <Label>
          <TextWrapper>Name</TextWrapper>
          <InputField
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Label>
        <Label>
          <TextWrapper>Number</TextWrapper>
          <InputField
            type="tel"
            name="tel"
            onChange={formik.handleChange}
            value={formik.values.tel}
          />
        </Label>
        <Btn type="submit" name="submit">
          Add contact
        </Btn>
      </form>
    </div>
  );
};

export default BookForm;

BookForm.propTypes = {
  title: PropTypes.string.isRequired,
};
