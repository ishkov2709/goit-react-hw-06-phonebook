import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { filterContact } from 'store/phonebookSlice';
import { InputField } from './FilterForm.styled';

const FilterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      filter: '',
    },
  });

  return (
    <form>
      <label>
        <InputField
          type="text"
          name="filter"
          onChange={e => {
            formik.handleChange(e);
            dispatch(filterContact(e.target.value));
          }}
          value={formik.values.filter}
        />
      </label>
    </form>
  );
};

export default FilterForm;
