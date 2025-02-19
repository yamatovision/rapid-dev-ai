'use client'
import { motion } from 'framer-motion'
import { useWidgetLoader } from '@/hooks/useWidgetLoader'

// 比較表のデータ
const comparisonData = [
  {
    feature: "要件定義",
    competitor: "50-100万円",
    us: "無料",
    merit: "初期コストを抑えられます"
  },
  {
    feature: "プロトタイプ作成",
    competitor: "100-200万円",
    us: "無料",
    merit: "実際の画面確認から開発判断可能"
  },
  {
    feature: "開発期間",
    competitor: "3-6ヶ月",
    us: "30日",
    merit: "大幅な時間短縮で早期収益化が可能"
  },
  {
    feature: "開発コスト",
    competitor: "700万円-5000万円",
    us: "100万円~",
    merit: "大幅なコスト削減で投資リスクを最小化"
  },
  {
    feature: "AI機能実装",
    competitor: "別途費用",
    us: "標準搭載",
    merit: "追加コスト不要で最新技術を活用"
  }
]

// よくある質問のデータ
const faqs = [
  {
    question: "無料の要件定義には制限がありますか？",
    answer: "いいえ、プロジェクトの規模に関わらず、しっかりとしたヒアリングと要件定義を無料で実施いたします。"
  },
  {
    question: "プロトタイプはどこまで作成できますか？",
    answer: "主要な画面のモックアップと基本的な画面遷移、想定されるAI機能の動作イメージまで作成可能です。"
  },
  {
    question: "無料期間中に開発を取りやめることはできますか？",
    answer: "はい、プロトタイプ確認後に開発を進めるかどうかを判断いただけます。その時点での費用は一切発生しません。"
  },
  {
    question: "開発費用は後からかかりますか？",
    answer: "開発フェーズ以降の費用は事前にお見積もりを提示し、ご承認いただいた金額以外は発生しません。"
  }
]
export const DevelopmentProcess = () => {
  const { isWidgetLoading, loadWidget } = useWidgetLoader()
  
  const handleConsultationClick = async () => {
    await loadWidget()
  }

  const processes = [
    {
      step: "Step 1",
      title: "要件定義・AI活用提案",
      period: "無料対応",
      items: [
        "ヒアリング",
        "AI活用可能性の診断",
        "概算見積もり提示"
      ],
      highlight: "他社では有料の要件定義を無料で提供"
    },
    {
      step: "Step 2",
      title: "設計・プロトタイプ",
      period: "無料対応",
      items: [
        "システム設計",
        "AI機能設計",
        "プロトタイプ作成"
      ],
      highlight: "実際の画面イメージを無料で確認可能"
    },
    {
      step: "Step 3",
      title: "開発・テスト",
      period: "15日",
      items: [
        "AI自動コード生成",
        "単体テスト",
        "結合テスト"
      ]
    },
    {
      step: "Step 4",
      title: "リリース・運用",
      period: "5日",
      items: [
        "デプロイ",
        "運用テスト",
        "監視体制構築"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* 開発プロセスセクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">開発プロセス</h2>
          <p className="text-gray-400">
            要件定義からプロトタイプまで<span className="text-orange-500 font-bold">無料で対応</span>
            <br />確実な開発のための独自のプロセスをご用意
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* 連結線 - 最後以外の要素に表示 */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-500" />
              )}
              
              <div className="bg-gray-800 rounded-lg p-6 h-full border-2 border-transparent hover:border-orange-500 transition-all">
                <div className="text-orange-500 font-bold mb-2">{process.step}</div>
                <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    process.period === '無料対応' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {process.period}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  {process.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {process.highlight && (
                  <div className="mt-4 text-sm text-orange-500 font-bold">
                    {process.highlight}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 p-6 bg-gray-800 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4">
            無料での要件定義・プロトタイプ提供の理由
          </h3>
          <p className="text-gray-400">
            AI開発の可能性を正確に理解していただくために、具体的な形でご提案させていただきます。
            <br />
            プロジェクトの成功に向けて、まずは無料で実現可能性とコストメリットをご確認ください。
          </p>
        </motion.div>
        {/* 比較表セクション */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">他社との比較</h2>
            <p className="text-gray-400">圧倒的なコストパフォーマンスを実現</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-left">機能・サービス</th>
                  <th className="p-4 text-left">他社</th>
                  <th className="p-4 text-left">当社</th>
                  <th className="p-4 text-left">お客様のメリット</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-700"
                  >
                    <td className="p-4">{item.feature}</td>
                    <td className="p-4 text-gray-400">{item.competitor}</td>
                    <td className="p-4 text-orange-500 font-bold">{item.us}</td>
                    <td className="p-4 text-gray-400">{item.merit}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* よくある質問セクション */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">よくある質問</h2>
            <p className="text-gray-400">無料サービスに関する疑問にお答えします</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 flex items-start">
                  <span className="text-orange-500 mr-2">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 ml-6">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ビジョンセクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mt-32"
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
        </motion.div>

        {/* CTA セクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ビジョンを共に実現しませんか？
            </h2>
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevelopmentProcess