import { Breadcrumb } from '../Breadcrumb'
import { ScrollToTop } from '../ScrollToTop'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Breadcrumb />
      {children}
      <ScrollToTop />
    </>
  )
}