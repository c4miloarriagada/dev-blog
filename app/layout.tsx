import { font } from './fonts/font'
import { Navigation } from './components/Navigation/Navigation'
import { Container } from './components/Container/Contaniner'
import { SideBar } from './components/SideBar/SideBar'
import { Footer } from './components/Footer/Footer'
import './globals.css'

export const metadata = {
  title: 'Blog Dev',
  description: 'Simple Blog Dev'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        <Container>
          <SideBar />
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}
