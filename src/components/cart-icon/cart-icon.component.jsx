import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const isCartOpenToogle = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={isCartOpenToogle}/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;