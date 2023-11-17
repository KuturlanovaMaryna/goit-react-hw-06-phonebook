const phoneBookContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
    contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? phoneBookContacts,
    
};

export const phoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'contacts/createUser': {
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        }
        case 'contacts/deleteUser': {
            return {
                ...state,
                contacts: state.contacts.filter(user => user.id !== action.payload)
            }
        }
        // case 'contacts/searchUser': {
        //     return {
        //         ...state,
        //         filter: action.payload
        //     };
        //     }
            
          
        default:
  
    }
    return state;
}