import { TiShoppingCart } from 'react-icons/ti';
import { AiOutlineSearch } from 'react-icons/ai';

import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img
          src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
          alt='Amazon Logo.'
        />
      </div>

      <div className='header_search-container'>
        <div className='header-drop-menu'>select</div>
        <div className='search'>
          <input
            type='text'
            className='header-search-input'
            placeholder='Search here...'
          />
        </div>
        <div className='header-search-icon'>
          <AiOutlineSearch size={25} />
        </div>
      </div>
      <nav className='header_nav'>
        <div className='header_option'>
          <span>
            <small>English</small>
          </span>
        </div>
        <div className='header_option'>
          <span>
            <small>Hello, Guest</small>
          </span>
          <span className='bold-text'>Account & Lists</span>
        </div>
        <div className='header_option'>
          <span>
            <small>Returns</small>
          </span>
          <span className='bold-text'>& Orders</span>
        </div>
        <div className='header_option'>
          <span className='cart-icon'>
            <TiShoppingCart />
          </span>
          <span className='cart-count'>
            <strong>15</strong>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
