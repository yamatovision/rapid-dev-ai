'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const CaseStudy = () => {
  const cases = [
    {
      title: "AIスキル学習プラットフォーム開発",
      image: "/case-study-1.png",
      period: {
        traditional: "6ヶ月",
        actual: "30日"
      },
      description: `開発したプラットフォームの核となるのは、従来の人手による採点を完全に自動化した評価システムです。
        学習者が提出した課題は瞬時に分析・評価され、詳細なフィードバックが提供されます。
        さらにそこから成績表や証明書の発行が自動化され単位認定なども可能になりました。
        さらに、システムは学習者の目標に対して課題の理解度からキャリアパスを提案。
        アバターなども画像生成AIで自動化しワンクリックで作成などシームレスな体験を実現しています。`
    },
    {
      title: "カスタムAIアシスタントプラットフォーム「ブルーランプ」",
      image: "/case-study-2.png",
      period: {
        traditional: "10ヶ月",
        actual: "16日"
      },
      description: `豊富な専門知識と実務経験を持つ人間の頭脳を、ソフトウェアとして再現したプラットフォームです。
        このシステムでは、目的に応じた「工場」を選択することで、特定の業務や課題に特化したアシスタントとして機能します。
        独自の工場システムにより、ユーザーは目的に応じて最適な環境を選択できます。例えば、文章作成工場では原稿の執筆補助や校正、データ分析工場では複雑なデータの解析と可視化、プログラミング工場ではコードの生成とデバッグなど、各工場が特定の専門性を持っています。
管理機能も充実しており、企業での運用を想定した権限管理や使用量の制御、詳細な利用統計なども備えています。リリースしてから1ヶ月以内に8桁売り上げを樹立

        
        
        `
    }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">開発実績</h2>
          <p className="text-gray-600">圧倒的な開発スピードで実現した実例をご紹介</p>
        </motion.div>

        <div className="space-y-20">
          {cases.map((case_study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative h-[400px]">
                  <Image
                    src={case_study.image}
                    alt={case_study.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">{case_study.title}</h3>  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">従来の想定開発期間</p>
                      <p className="text-xl font-bold text-gray-900">{case_study.period.traditional}</p>
                    </div>
                    <div className="bg-orange-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">爆速開発期間</p>
                      <p className="text-xl font-bold text-orange-600">{case_study.period.actual}</p>
                    </div>
                  </div>

                  <p className="text-gray-600">{case_study.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudy