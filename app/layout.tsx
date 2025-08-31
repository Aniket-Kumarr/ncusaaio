import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'USAAIO - USA Artificial Intelligence Olympiad',
  description: 'USAAIO organizes the USA-North America AI Olympiad (USA-NA-AIO) for K-12 students, enabling the United States to be a founding country of international AI Olympiads.',
  keywords: 'AI Olympiad, artificial intelligence, K-12, competition, USA, IOAI, IAIO, machine learning, students',
  authors: [{ name: 'USAAIO' }],
  metadataBase: new URL('https://www.usaaio.org'),
  openGraph: {
    title: 'USAAIO - USA Artificial Intelligence Olympiad',
    description: 'Organizing AI competitions for K-12 students and representing the USA internationally',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.usaaio.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USAAIO - USA Artificial Intelligence Olympiad',
    description: 'Organizing AI competitions for K-12 students and representing the USA internationally',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
