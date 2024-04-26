
export const ContactApi = {
  //making an array to hold Contacts
  contacts: [
    {
      id: 70219577,
      name: 'Albert Einstein',
      image_url: "https://images.squarespace-cdn.com/content/v1/62ec2bc76a27db7b37a2b32f/625c7248-8056-4505-a1da-a1058c830d92/albert-einstein-with-blue-hair-large.jpg",
      email: 'aeinstein@example.com',
      phone_number: '1555555555'

    },
    {
      id:12345678,
      name: 'Snoopy',
      image_url: 'https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png',
      email: 'snoopy@example.com',
      phone_number: '1222222222'
    }
  ],
  //function to access all contacts
  all: function () {
    return this.contacts
  },
  //function to add contacts with required information
  addContact: function ({id, name, image_url, email, phone_number}) {
    this.contacts.push({id, name, image_url, email, phone_number});
  },
  //function to access an individual contact bases upon their assigned id
  get: function (id) {
    const isContact = (contact) => contact.id === id;
    return this.contacts.find(isContact); 
  },
};