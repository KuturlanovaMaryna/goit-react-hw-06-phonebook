import DeleteButton from 'components/DeleteButton/DeleteButton';

import css from './ContactItem.module.css';
import { deleteUser } from 'redux/phone.reduser';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem} id={contact.id}>
      <p>{`${contact.name}: ${contact.number}`}</p>
      <DeleteButton handleDeleteUser={() => dispatch(deleteUser(contact.id))} />
    </li>
  );
};

export default ContactItem;
