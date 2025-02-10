'use client'
import { PageLayout } from '@/components/common/PageLayout'

export default function Legal() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">特定商取引法に基づく表記</h1>
        
        <div className="space-y-8">
          <section>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left w-1/4">事業者名</th>
                  <td className="py-4">株式会社命</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left">代表者名</th>
                  <td className="py-4">白石 達也</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left">所在地</th>
                  <td className="py-4">山梨県南都留郡富士河口湖町小立2253-1</td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left">連絡先</th>
                  <td className="py-4">
                    電話番号：08048768001<br />
                    メールアドレス：shiraishi.tatsuya@mikoto.co.jp
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left">サービスの対価</th>
                  <td className="py-4">
                    各サービスの料金は、個別の契約内容により決定します。<br />
                    具体的な金額は、お見積りの際にご案内いたします。
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left">支払方法</th>
                  <td className="py-4">
                    銀行振込（お支払い条件は個別にご相談させていただきます）
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left">サービスの提供時期</th>
                  <td className="py-4">
                    契約締結後、お客様との協議により決定した開発スケジュールに従って提供いたします。
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="py-4 pr-4 text-left">返品・キャンセル</th>
                  <td className="py-4">
                    開発開始前のキャンセルについては、無償で承ります。<br />
                    開発開始後のキャンセルについては、進捗状況に応じた金額をご請求させていただく場合があります。
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </PageLayout>
  )
}