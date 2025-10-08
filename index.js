import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Halo, ini halaman utama</h1>
      <Link href="/about">
        <a>Kunjungi halaman About</a>
      </Link>
      <br />
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Kunjungi Google (eksternal)
      </a>
    </div>
  );
}
