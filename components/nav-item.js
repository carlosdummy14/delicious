import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../utils/icons'

const NavItem = ({ type, size }) => {
  return (
    <Link href={'#'}>
      <a>
        <Image src={Icon[type]} width={size} height={size} alt={`${type} menu`} />
      </a>
    </Link>
  )
}

export default NavItem
