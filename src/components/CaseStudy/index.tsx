'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const CaseStudy = () => {
  const cases = [
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
        管理機能も充実しており、企業での運用を想定した権限管理や使用量の制御、詳細な利用統計なども備えています。リリースしてから1ヶ月以内に8桁売り上げを樹立`
    },
    {
      title: "AIアポ - 個別相談自動化プラットフォーム",
      image: "/case-study-3.png",
      period: {
        traditional: "4ヶ月",
        actual: "10日"
      },
      description: `個別相談を完全自動化するための革新的なプラットフォームです。
        LPと自社の参考情報を入力するだけで、カスタマイズされた個別相談アシスタントを自動生成。
        相談の誘導から予約管理、リマインド配信まで、すべてを一元化して管理できます。
        AI技術により、各企業の特性や業界に合わせた最適な対話フローを自動で構築し、
        人間のような柔軟な対応と効率的な予約管理を実現しています。
        営業担当者の工数を大幅に削減しながら、質の高い個別相談の実施を可能にする
        オールインワンのソリューションです。`
    },
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
      title: "文字起こし太郎くん - AI文字起こし＆分析ツール",
      image: "/case-study-4.png",
      period: {
        traditional: "2ヶ月",
        actual: "3時間"
      },
      description: `複数の画像やスクリーンショットから瞬時にテキストを抽出し、整理・分析できる画期的なツールです。
        Kindleの書籍データや競合他社のWebサイト、プレゼン資料など、あらゆる画像ソースに対応。
        高精度なOCRとAI解析により、画像内のテキストを正確に抽出し、日付順や文脈に応じて自動的に整理。
        通常なら数時間かかる情報収集と整理作業を、わずか数分で完了できる画期的なツールとして、
        マーケティング担当者や研究者から高い評価を得ています。`
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">開発実績</h2>
          <p className="text-gray-400">圧倒的な開発スピードで実現した実例をご紹介</p>
        </motion.div>

        <div className="space-y-20">
          {cases.map((case_study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-orange-500/30 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative w-full aspect-[1351/882] md:aspect-[1351/882]">
                  <Image
                    src={case_study.image}
                    alt={case_study.title}
                    fill
                    className="object-contain md:object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">{case_study.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">従来の想定開発期間</p>
                      <p className="text-xl font-bold text-white">{case_study.period.traditional}</p>
                    </div>
                    <div className="bg-orange-500/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-400">爆速開発期間</p>
                      <p className="text-xl font-bold text-orange-500">{case_study.period.actual}</p>
                    </div>
                  </div>
                  <p className="text-gray-400">{case_study.description}</p>
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