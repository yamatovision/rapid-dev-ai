import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Development Express - 30日で企業のDXを実現',
  description: '従来3ヶ月の開発を、たった30日で実現。AI技術とベトナムオフショア開発のハイブリッドで、スピーディーな開発を実現します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
