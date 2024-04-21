import './globals.css'
import Header from '@/components/Header'
export const metadata = {
  title: 'iGoCar',
  description: 'rental car',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

      </body>
    </html>
  )
}
