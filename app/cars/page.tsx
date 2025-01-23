import Link from 'next/link';

export default function Cars() {
  return (
    <div>
      <h1>Cars</h1>
      <ul>
        <li>
          Audi
          <Link href="/cars/edit/audi" className="ml-2 text-blue-500">Edit</Link>
        </li>
        <li>
          BMW
          <Link href="/cars/edit/bmw" className="ml-2 text-blue-500">Edit</Link>
        </li>
        <li>
          Mercedes
          <Link href="/cars/edit/mercedes" className="ml-2 text-blue-500">Edit</Link>
        </li>
      </ul>
    </div>
  );
}

