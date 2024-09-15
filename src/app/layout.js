// src/app/layout.js
import './globals.css';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Yatra+One&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap"
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
