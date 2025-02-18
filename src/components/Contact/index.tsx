'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

type FormType = 'contact' | 'document'

export const Contact = () => {
  const [formType, setFormType] = useState<FormType>('contact')

  // イベントリスナーの設定
  useEffect(() => {
    const handleTabSwitch = (event: CustomEvent) => {
      if (event.detail?.tab) {
        setFormType(event.detail.tab)
      }
    }
  
    window.addEventListener('switchContactTab', handleTabSwitch as EventListener)
    return () => {
      window.removeEventListener('switchContactTab', handleTabSwitch as EventListener)
    }
  }, [])

  return (
    <section id="contact-section" className="py-20 bg-gray-900 text-white">
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

        <div className="max-w-2xl mx-auto">
          {/* フォーム切り替えタブ */}
          <div className="flex mb-8 bg-gray-800 rounded-lg p-2">
            <button
              onClick={() => setFormType('contact')}
              className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                formType === 'contact'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              無料相談
            </button>
            <button
              onClick={() => setFormType('document')}
              className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                formType === 'document'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              資料請求
            </button>
          </div>

          {formType === 'contact' ? (
            // 無料相談フォーム
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">企業名</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="株式会社〇〇"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">担当者名</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="山田 太郎"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">メールアドレス</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">電話番号</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="090-1234-5678"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">予算感</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="〜300万円">300万円未満</option>
                  <option value="300-500万円">300-500万円</option>
                  <option value="500-1000万円">500-1000万円</option>
                  <option value="1000万円〜">1000万円以上</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">課題・要望</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  rows={4}
                  placeholder="具体的な課題や要望をご記入ください"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-all"
              >
                無料相談を申し込む
              </button>
            </form>
          ) : (
            // 資料請求フォーム
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">担当者名</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="山田 太郎"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">電話番号</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="090-1234-5678"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">メールアドレス</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-orange-500/30">
                <h3 className="text-lg font-semibold text-orange-500 mb-4">
                  『AI開発による収益改善ガイド』
                </h3>
                <ul className="space-y-3 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">●</span>
                    AIによる5つの収益向上パターンの詳細解説
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">●</span>
                    8桁売上を達成した具体的な成功事例
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">●</span>
                    開発期間1/6、コスト70%削減の手法
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">●</span>
                    収益改善のための具体的なステップ解説
                  </li>
                </ul>
                <p className="text-sm text-gray-400">
                  ※ AIを活用した収益を引き上げるポイントが盛りだくさん
                </p>
              </div>
              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-all"
              >
                今すぐに資料を読む
              </button>
              <p className="text-sm text-gray-400 text-center">
                ※ フォーム送信後、すぐに資料リンクをお届けします。
                
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact