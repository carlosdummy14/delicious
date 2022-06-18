import Link from 'next/link'
import BurgerIcon from './burger-icon'
import DessertIcon from './dessert-icon'
import DrinkIcon from './drink-icon'
import FriesIcon from './fries-icon'
import OrderIcon from './order-icon'

const NavItem = ({ type, size }) => {
  return (
    <Link href={'#'}>
      <a>
        {type === 'burger' && <BurgerIcon width={`${size}em`} height={`${size}em`} />}
        {type === 'fries' && <FriesIcon width={`${size}em`} height={`${size}em`} />}
        {type === 'drink' && <DrinkIcon width={`${size}em`} height={`${size}em`} />}
        {type === 'dessert' && <DessertIcon width={`${size}em`} height={`${size}em`} />}
        {type === 'order' && <OrderIcon width={`${size}em`} height={`${size}em`} />}
      </a>
    </Link>
  )
}

export default NavItem
