'use client'
import { PageLayout } from '@/components/common/PageLayout'

export default function Terms() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">利用規約</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">第1条（適用）</h2>
            <p>本規約は、株式会社命（以下「当社」といいます）が提供するすべてのサービス（以下「本サービス」といいます）の利用に関する条件を定めるものです。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">第2条（利用登録）</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>本サービスの利用を希望する者は、当社の定める方法によって利用登録を申請するものとします。</li>
              <li>当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります：
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>虚偽の事項を届け出た場合</li>
                  <li>本規約に違反したことがある者からの申請である場合</li>
                  <li>その他、当社が利用登録を相当でないと判断した場合</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">第3条（禁止事項）</h2>
            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害する行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">第4条（本サービスの提供の停止等）</h2>
            <p>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">第5条（知的財産権）</h2>
            <p>本サービスによって提供される商品、サービス、コンテンツ等に関する著作権、特許権、商標権等の知的財産権は、当社または当社にライセンスを許諾している者に帰属します。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">第6条（免責事項）</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
              <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">第7条（サービス内容の変更等）</h2>
            <p>当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">第8条（利用規約の変更）</h2>
            <p>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">第9条（準拠法・裁判管轄）</h2>
            <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
          </section>
        </div>

        <div className="mt-8 text-right">
          <p>2024年1月1日 制定</p>
        </div>
      </div>
    </PageLayout>
  )
}