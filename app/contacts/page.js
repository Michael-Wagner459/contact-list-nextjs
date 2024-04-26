'use client';
import { useState } from 'react';
import { ContactApi } from '../components/contact-API';
import Link from 'next/link';
import NewContact from './new/page';
import DisplayContacts from '../components/displayContact';

export default function Contacts() {
	//gets all the contact information and keeps track of useState
	const [allContacts, _] = useState(ContactApi.all());

	//returns main home page that has a header, new contact button, then a table with all the contacts.

	return (
		<div className='text-center'>
			<br />
			<br />
			<h1>All Contacts</h1>
			<Link href='/contacts/new'>
				<button type='button' className='btn btn-primary'>
					New Contact
				</button>
			</Link>
			<br />
			<br />
			<DisplayContacts allContacts={allContacts} />
		</div>
	);
}
