'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pageNames: { [key: string]: string } = {
  'privacy-policy': 'プライバシーポリシー',
  'terms': '利用規約',
  'legal': '特定商取引法に基づく表記',
}

export const Breadcrumb = () => {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(p => p)
  const currentPage = paths[paths.length - 1]

  return (
    <nav className="bg-gray-100 py-2">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-gray-600 hover:text-orange-500">
              ホーム
            </Link>
          </li>
          {paths.length > 0 && (
            <>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-orange-500">
                {pageNames[currentPage] || currentPage}
              </li>
            </>
          )}
        </ol>
      </div>
    </nav>
  )
}