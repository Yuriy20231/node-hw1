
const {listContacts,
    getContactById,
    removeContact,
    addContact} = require("./contacts")

  const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const allContacts = await listContacts();
        console.log('All contacts:', allContacts);
      break;

    case 'get':
        const contactById = await getContactById(id);
        console.log('Contact by ID:', contactById);
      break;

    case 'add':
        const newContact = await addContact(name, email, phone);
        console.log('New contact:', newContact);
      break;

    case 'remove':
        const removedContact = await removeContact(id);
        console.log('Removed contact:', removedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);