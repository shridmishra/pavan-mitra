// src/app/layout.js
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Yatra+One&display=swap"
        />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
