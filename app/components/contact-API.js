
export const ContactApi = {
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
  all: function () {
    return this.contacts
  },
  addContact: function ({id, name, image_url, email, phone_number}) {
    this.contacts.push({id, name, image_url, email, phone_number});
  },
  get: function (id) {
    const isContact = (contact) => contact.id === id;
    return this.contacts.find(isContact); 
  },
};