import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import React from 'react';

const DisplayContacts = ({ allContacts }) => {
	return (
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
						<td className='col'>
							<img
								style={{
									height: 120,
									width: 120,
									borderRadius: '50%',
								}}
								src={contact.image_url}
							></img>
						</td>
						<td className='col'>
							<Link id='blue' href={`/contacts/${contact.id}`}>
								{contact.name}
							</Link>
						</td>
						<td className='col'>{contact.email}</td>
						<td className='col'>{contact.phone_number}</td>
						<td className='col text-primary'>Edit</td>
						<td className='col text-danger'>Delete</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

DisplayContacts.PropTypes = {
	allContacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			image_url: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			phone_number: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default DisplayContacts;
