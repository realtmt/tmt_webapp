import "./globals.css";

export const metadata = {
  title: "Take me To",
  description: "Take me to store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
