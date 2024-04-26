'use client';

import { ContactApi } from '@/app/components/contact-API';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function NewContact() {
	//the use state for contact information
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [image_url, setImage_Url] = useState(null);
	const [phone_number, setPhone_Number] = useState(null);
	const router = useRouter();

	//button function to add contact information and then reroute page back to main contacts page
	const handleSubmitContactClick = () => {
		if (!name || !email || !image_url || !phone_number) {
			alert('Please fill in all fields of data');
		} else {
			ContactApi.addContact({
				name,
				email,
				image_url,
				phone_number,
				//sets id number by default
				id: Math.round(Math.random() * 100000000),
			});
			router.push('/contacts');
		}
	};
	//returns input areas for contact information that is inputted. Changes the useState of each parameter on event changes for each input. Has submit button at the bottom
	return (
		<div>
			<div>
				<h1 className='text-center'>Add New Contact</h1>
			</div>
			<div className='container'>
				<form>
					<div className='mb-3'>
						<label className='form-label text-center'>Name</label>
						<input
							type='text'
							required
							className='form-control'
							onChange={(event) => setName(event.target.value)}
						/>
					</div>

					<br />

					<div className='mb-3'>
						<label className='form-label text-center'>Email</label>
						<input
							type='email'
							required
							className='form-control'
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>

					<br />

					<div className='mb-3'>
						<label className='form-label text-center'>
							Profile Picture URL
						</label>
						<input
							type='url'
							required
							className='form-control'
							onChange={(event) =>
								setImage_Url(event.target.value)
							}
						/>
					</div>

					<br />

					<div className='mb-3'>
						<label className='form-label text-center'>
							Phone Number
						</label>
						<input
							required
							type='number'
							className='form-control'
							onChange={(event) =>
								setPhone_Number(event.target.value)
							}
						/>
					</div>
				</form>
				<button
					type='button'
					className='btn btn-primary'
					onClick={handleSubmitContactClick}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default NewContact;
