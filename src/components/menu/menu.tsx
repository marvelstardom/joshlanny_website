import MenuItem from '@/components/menu/menu-item'

const MENU_ITEMS = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Contact Us', to: '/contact' },
  // { name: "FAQ's", to: '/faqs' },
  // { name: 'Support', to: '/support' },
]

function Menu({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {MENU_ITEMS.map((link) => (
        <MenuItem key={link.name} to={link.to} name={link.name} />
      ))}
    </ul>
  )
}

export default Menu
