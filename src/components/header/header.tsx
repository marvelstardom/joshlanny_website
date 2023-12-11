import { Logo } from '@/components/logo'
import { Link } from 'react-router-dom'
import { Menu } from '../menu'

function Header({ title }: { title?: string }) {
  return (
    <header className="relative z-50 py-6">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <Logo />
              <span>{title}</span>
            </Link>
          </h1>
          <Menu className="z-50 flex gap-4" />
          {/* <div className="z-50 flex flex-row items-center justify-start">
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
