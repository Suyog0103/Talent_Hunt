import React, { Component } from 'react';
import '../css/ContactUs.css';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Harshla',
          contact: 'harshla@gmail.com',
        },
        {
          id: 2,
          name: 'Tanmay',
          contact: 'tanmay@example.com',
        },
        {
          id: 3,
          name: 'Suyog',
          contact: 'suyog@gmail.com',
        },
        {
          id: 4,
          name: 'Tarun',
          contact: 'tarun@gmail.com',
        },
      ],
    };
  }

  render() {
    return (
      <div className="container mt-4">
        <h2>Contact Us</h2>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactUs;
