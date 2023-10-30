import { Footer, Navbar } from '@/components'
import './globals.css'




export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'/'}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
