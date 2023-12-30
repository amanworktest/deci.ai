
export const metadata = {
  title: 'Deci.ai',
  description: 'Powered by AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
