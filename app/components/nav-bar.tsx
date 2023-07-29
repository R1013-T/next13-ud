import Link from 'next/link'

interface NavItemProps {
  href: string
  text: string
}

const NavItem = ({ href, text }: NavItemProps) => (
  <Link
    href={href}
    className="rounded bg-gray-700  px-3 py-2 text-white hover:bg-gray-500"
  >
    {text}
  </Link>
)

export default function NavBar() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        <NavItem href="/" text="Home" />
        <NavItem href="/blogs" text="Nested Layout with Blogs" />
        <NavItem href="/streaming-sr" text="Streaming SR" />
        <NavItem href="/auth" text="Auth with CRUD" />
      </nav>
    </header>
  )
}
