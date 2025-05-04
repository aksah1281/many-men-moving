import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: 'Many Men Moving - Furniture Moving, Junk Removal & Packing Services',
  description: 'Professional moving services including furniture moving, junk removal, and packing services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}