'use client'
import { useState } from 'react';
import { ContactApi } from '../components/contact-API';
import Link from 'next/link';

export default function Contacts() {
  //gets all the contact information and keeps track of useState
  const [allContacts, _] = useState(ContactApi.all())

  //returns main home page that has a header, new contact button, then a table with all the contacts.
  
  return (
    <div className="text-center">
      <br />
      <br />
      <h1>All Contacts</h1>
      <Link href='/contacts/new'>
        <button type="button" className="btn btn-primary">New Contact</button>
      </Link>
      <br />
      <br />
      <table className='table'>
        <thead className='table-primary'>
          <tr>
            <th scope='col'>Profile Pic</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody className='table'>
          {allContacts.map((contact) => (
            <tr key={contact.id}>
                
                <td className='col'><img style={{height: 120, width: 120, borderRadius: '50%'}} src={contact. image_url}></img></td>
                <td className='col'><Link id='blue' href={`/contacts/${contact.id}`}>{contact.name}</Link></td>
                <td className='col'>{contact.email}</td>
                <td className='col'>{contact.phone_number}</td>
                <td className='col text-primary'>Edit</td>
                <td className='col text-danger'>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}