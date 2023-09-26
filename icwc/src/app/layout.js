import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<title>IronCityWatchCompany</title>

<meta property="og:image" content="https://res.cloudinary.com/dypxraoci/image/upload/v1695758973/OpenGraph1_d6ozqc.png"/>
<meta property="og:title" content="IronCityWatchCo. | Restorations | Repairs | Sourcing"/>
<meta property="og:url" content="https://icwc.vercel.app"/>
<meta property="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
</head>
      <body className={inter.className}>{children}</body>
      
    </html>
  )
}
