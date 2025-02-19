'use client'
import { motion } from 'framer-motion'

export const PainPoints = () => {
  const painPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "デジタル化しないと取り残される不安",
      description: "競合他社がどんどんデジタル化を進める中、このままでは市場から取り残されてしまうのでは..."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "IT人材の採用・育成コストが重すぎる",
      description: "優秀なIT人材の採用には高額な人件費が必要で、育成にも時間がかかりすぎて..."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "システム開発の見積もりが高すぎて手が出ない",
      description: "必要なシステムの見積もりを取ってみたら予想以上の金額で、とても手が出る範囲ではなく..."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "社員のITスキル不足で何から始めればいいか分からない",
      description: "デジタル化の必要性は分かっているものの、どこから手をつければいいのか見当もつかず..."
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            こんな<span className="text-orange-500">悩み</span>はありませんか？
          </h2>
          <p className="text-gray-400 text-lg">
            多くの中小企業経営者様が抱えている課題です
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-orange-500 font-semibold mb-8">
            このような課題を、AIの力ですべて解決できます
          </p>
          <div className="inline-block bg-gray-800/50 rounded-lg p-4 border border-orange-500/30">
            <p className="text-gray-300">
              専門家の採用も、高額な開発費用も必要ありません。
              <br className="hidden md:block" />
              あなたの会社に最適なAIシステムを、すぐに構築できます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PainPoints