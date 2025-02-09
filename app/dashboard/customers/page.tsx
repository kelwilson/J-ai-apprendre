import { Metadata } from 'next';

//Adding a special title to the invoice page
export const metadata: Metadata = {
    title: 'Customers',
  };


export default function Page() {
    return <p>Customers Page</p>;
  }