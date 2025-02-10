'use client'
import { PageLayout } from '@/components/common/PageLayout'

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1><div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">1. 個人情報の利用目的</h2>
            <p>当社は、以下の目的で個人情報を収集・利用いたします：</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>サービスに関する情報提供やご案内</li>
              <li>お問い合わせへの対応</li>
              <li>サービスの改善や新サービスの開発</li>
              <li>セミナーや各種イベントのご案内</li>
              <li>メールマガジンの配信</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Cookieの使用について</h2>
            <p>当社ウェブサイトでは、ユーザー体験の向上やサービスの改善のためにCookieを使用する場合があります。
               Cookieは、ブラウザの設定により無効化することが可能です。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. アクセス解析ツールについて</h2>
            <p>当社ウェブサイトでは、Googleアナリティクスを使用して、サイトの利用状況の計測・分析を行う場合があります。
               これらのデータは匿名で収集されており、個人を特定する情報は含まれません。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. 個人情報の管理</h2>
            <p>当社は、個人情報の正確性及び安全性確保のために、セキュリティ対策を実施し、個人情報の漏洩、
               滅失またはき損の防止に努めます。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. 個人情報の第三者提供</h2>
            <p>当社は、法令に基づく場合を除き、あらかじめご本人の同意を得ることなく、
               個人情報を第三者に提供することはありません。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. お問い合わせ窓口</h2>
            <p>個人情報の取扱いに関するお問い合わせは、下記までご連絡ください：</p>
            <div className="mt-2">
              <p>株式会社命</p>
              <p>Email: shiraishi.tatsuya@mikoto.co.jp</p>
              <p>TEL: 08048768001</p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  )
}