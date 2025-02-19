'use client'
import { motion } from 'framer-motion'
import { useWidgetLoader } from '@/hooks/useWidgetLoader'

export const Vision = () => {
  const { isWidgetLoading, loadWidget } = useWidgetLoader()

  const handleConsultationClick = async () => {
    await loadWidget()
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            日本のディジタル競争力を
            <span className="text-orange-500">世界No.1</span>に
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            AIによる爆発的生産性を活かして日本人の職人気質特有のサービス精神を形にすることで
            日本の生産性を引き上げてディジタル競争力を世界No.1にし
            日本を豊かにすることが私たちの使命です
          </p>

          <div className="bg-gray-800/50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">
              大和ViSiON
            </h3>
            <p className="text-gray-300">
              明治維新のように日本古来からの伝統と最新の知見を組み合わせることで
              世界に対して競争力の強い日本を取り戻すことがビジョンです
            </p>
          </div>

          {/* 新規追加：CTAセクション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              あなたの企業のデジタル競争力を高めませんか？
            </h3>
            <p className="text-lg mb-8">
              まずは無料相談で、あなたの企業に最適なAI導入プランをご提案します
            </p>
            <button
              className={`bg-white text-orange-500 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all ${
                isWidgetLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleConsultationClick}
              disabled={isWidgetLoading}
            >
              {isWidgetLoading ? '読み込み中...' : '無料相談を予約する'}
            </button>
            <p className="text-sm mt-4 text-orange-100">
              ※ 相談は何回でも無料です
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision