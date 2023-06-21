import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import './Header.scss';

// src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link to='/'>
          <img src='/src/assets/nav-sprite-global.png' alt='Amazon Logo.' />
        </Link>
      </div>

      <div className='header_search-container'>
        <div className='search'>
          <div className='header-drop-menu'>
            <select>
              <optgroup label='clothes'>
                <option value='t-shirt'>T-shirt</option>
                <option value='pants'>Pants</option>
              </optgroup>
              <optgroup label='shoes'>
                <option value='shoes'>shoes</option>
              </optgroup>
            </select>
          </div>
          <input
            type='search'
            className='header-search-input'
            placeholder='Search here...'
            required
          />

          <div className='header-search-icon'>
            <AiOutlineSearch size={25} />
          </div>
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
            <img src='/src/assets/nav-sprite-global.png' alt='Cart Icon' />
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
