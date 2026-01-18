import './globals.css';

export const metadata = {
  title: 'Harshit Patel - Full Stack Software Engineer',
  description: 'Portfolio of Harshit Patel, a Full Stack Software Engineer specializing in building scalable web applications with React, Node.js, and modern technologies.',
  keywords: 'Full Stack Developer, Software Engineer, React, Node.js, Web Development, Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
