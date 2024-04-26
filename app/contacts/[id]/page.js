'use client'

import { ContactApi } from "@/app/components/contact-API";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Contact() {
  const { id } = useParams();
  const contact = ContactApi.get(parseInt(id, 10));

  //error handling if contact is not found with id
  if (!contact) {
    return <div>Sorry, but the Contact was not found</div>;
  }

  //segment that returns the contact information
  return (
    <main>
      <div className="col-6 offset-3 text-center">
        <h1 className="fw-bold">Contact Info</h1>
        <br />
        <Link href='/contacts'>Back</Link>
        <br />
        <h1>{contact.name}</h1>
        <br />
        <img className='img-fluid 'src={contact.image_url}/>
        <br />
        <br />
        <h5>{contact.email}</h5>
        <br />
        <h5>{contact.phone_number}</h5>
      </div>
    </main>
  )
}
