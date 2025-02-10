'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

type TabType = 'form' | 'diagnosis' | 'download'

export const Contact = () => {
  const [activeTab, setActiveTab] = useState<TabType>('form')

  const contactOptions = [
    {
      id: 'form' as TabType,
      title: '無料相談フォーム',
      description: '具体的なご相談をお受けします',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      id: 'diagnosis' as TabType,
      title: 'AI活用診断',
      description: '可能性を簡単診断',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      id: 'download' as TabType,
      title: '資料ダウンロード',
      description: '詳細資料をご確認',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'form':
        return (
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">企業名</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="株式会社〇〇"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">担当者名</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">連絡先</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">予算感</label>
              <select className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                <option>300万円未満</option>
                <option>300-500万円</option>
                <option>500-1000万円</option>
                <option>1000万円以上</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">課題・要望</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                rows={4}
                placeholder="具体的な課題や要望をご記入ください"
              />
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-all">
              無料相談を申し込む
            </button>
          </form>
        )

      case 'diagnosis':
        return (
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AI活用診断ツール</h3>
              <p className="text-gray-400 mb-4">
                以下の質問に答えるだけで、あなたの業務におけるAI活用の可能性を診断します。
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-all">
                診断を開始する
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">3分</div>
                <div className="text-sm text-gray-400">診断時間</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">5問</div>
                <div className="text-sm text-gray-400">質問数</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">即時</div>
                <div className="text-sm text-gray-400">結果表示</div>
              </div>
            </div>
          </div>
        )

      case 'download':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">詳細な事例集</h3>
                <p className="text-gray-400 mb-4">実際の開発事例と成果を詳しくご紹介</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-all">
                  ダウンロード
                </button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">AI活用ガイド</h3>
                <p className="text-gray-400 mb-4">AI技術の活用方法と効果を解説</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-all">
                  ダウンロード
                </button>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">料金シミュレーション</h3>
                <p className="text-gray-400 mb-4">開発規模に応じた概算費用を計算</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-all">
                  ダウンロード
                </button>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-gray-400">ご要望に応じて最適な方法でご案内いたします</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-4 mb-8">
            {contactOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id as TabType)}

                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  activeTab === option.id
                    ? 'border-orange-500 bg-gray-800'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-center mb-2 text-orange-500">
                  {option.icon}
                </div>
                <div className="font-bold mb-1">{option.title}</div>
                <div className="text-sm text-gray-400">{option.description}</div>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact