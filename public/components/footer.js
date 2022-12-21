import Link from './Link'
import NowPlayingFooter from './NowPlayingFooter'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { currentDayName } from '@/lib/utils/dateUtils'

export default function Footer() {
  return (
    <footer> 
       <NowPlayingFooter />
       <div className="mt-10 mb-4 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-3 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
         {`© ${new Date().getFullYear()}`} {siteMetadata.author} • Have a test good {currentDayName()}!
        </div>
       </div>
    </footer>
  )
}
