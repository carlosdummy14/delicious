import Link from 'next/link'
import BurgerIcon from './burger-icon'
import DessertIcon from './dessert-icon'
import DrinkIcon from './drink-icon'
import FriesIcon from './fries-icon'
import OrderIcon from './order-icon'

const NavItem = ({ type, size }) => {
  return (
    <>
      {type === 'burger' && (
        <Link href={'/menu/burgers'}>
          <a>
            <BurgerIcon width={`${size}em`} height={`${size}em`} />
          </a>
        </Link>
      )}
      {type === 'fries' && (
        <Link href={'/menu/fries'}>
          <a>
            <FriesIcon width={`${size}em`} height={`${size}em`} />
          </a>
        </Link>
      )}
      {type === 'drink' && (
        <Link href={'/menu/drinks'}>
          <a>
            <DrinkIcon width={`${size}em`} height={`${size}em`} />
          </a>
        </Link>
      )}
      {type === 'dessert' && (
        <Link href={'/menu/desserts'}>
          <a>
            <DessertIcon width={`${size}em`} height={`${size}em`} />
          </a>
        </Link>
      )}
      {type === 'order' && (
        <Link href={'/menu/order'}>
          <a>
            <OrderIcon width={`${size}em`} height={`${size}em`} />
          </a>
        </Link>
      )}
    </>
  )
}

export default NavItem
