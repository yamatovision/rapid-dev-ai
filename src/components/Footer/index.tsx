'use client'
import Link from 'next/link'
import { useState,useEffect } from 'react'  // useStateのインポートを追加

const footerMenus = {
  サービス: [
    { name: 'AI開発サービス', href: '/#services' },
    { name: '無料相談', href: '/#contact' },
    { name: '開発事例', href: '/#case-study' },
    { name: '開発プロセス', href: '/#process' }
  ],
  会社情報: [
    { name: '会社概要', href: '/company' },
    { name: 'プライバシーポリシー', href: '/privacy-policy' },
    { name: '利用規約', href: '/terms' },
    { name: '特定商取引法に基づく表記', href: '/legal' },
    { name: 'お問い合わせ', href: '/#contact' }
  ]
}

const companyInfo = {
  name: '株式会社命',
  address: '山梨県南都留郡富士河口湖町小立2253-1',
  ceo: '代表者名 白石達也',
  capital: '資本金 1000万円',
  tel: '08048768001',
  email: 'shiraishi.tatsuya@mikoto.co.jp',
  business: [
    'AIアシスタントプラットフォーム「ブルーランプ」の運営',
    'AI活用爆速開発者の育成',
    'システム開発コンサルティング',
    'AIシステム受託開発'
  ]
}

export const Footer = () => {
  const [showWidget, setShowWidget] = useState(false)
  const handleConsultationClick = () => {
    setShowWidget(true)
  }
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'WIDGET_TOGGLE') {
        setShowWidget(event.data.payload.visible);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      {showWidget && (
        <iframe
          src="https://aibookingbot-widget.web.app"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            width: '720px',
            height: '540px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            borderRadius: '12px',
            overflow: 'hidden',
            zIndex: 9999
          }}
          allow="microphone"
          title="AI Chat Widget"
        />
      )}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 会社情報 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{companyInfo.name}</h3>
              <div className="text-gray-400 space-y-2">
                <p>{companyInfo.address}</p>
                <p>{companyInfo.ceo}</p>
                <p>{companyInfo.capital}</p>
                <p>TEL: {companyInfo.tel}</p>
                <p>Email: {companyInfo.email}</p>
              </div>
            </div>

            {/* メニュー */}
            {Object.entries(footerMenus).map(([title, items]) => (
              <div key={title}>
                <h3 className="text-lg font-bold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* お問い合わせ */}
            <div>
              <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
              <p className="text-gray-400 mb-4">
                AI開発に関するご相談は、お気軽にお問い合わせください。
              </p>
              <button
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
                onClick={handleConsultationClick}
              >
                無料相談する
              </button>
            </div>
          </div>

          {/* コピーライト */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} {companyInfo.name} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer