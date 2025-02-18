import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
      <body className={inter.className}>
        {children}
        <Script src="https://unpkg.com/react@18/umd/react.production.min.js" />
        <Script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" />
        <Script src="http://localhost:5174/dist/widget.umd.js" />
        <Script id="ai-chat-widget-init">
          {`
            window.addEventListener('load', function() {
              if (window.AIChatWidget) {
                window.AIChatWidget.init({
                  clientId: 'YOUR_CLIENT_ID',
                  theme: 'light'
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}