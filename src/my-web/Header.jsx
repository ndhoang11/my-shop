import React from 'react';

const Header = (props) => {
  return (
    <div>
      <header className='header'>
        <div className='grid wide'>
          <nav className='header__navbar '>
            <ul className='header__navbar--list hide-on-mobile-tablet'>
              <li className='header__navbar--item   '>
                <a href className='header__navbar--item-link  '>
                  {' '}
                  <i className='header__navbar--icon fa-solid fa-user' />
                  My account
                </a>
              </li>
              <li className='header__navbar--item  '>
                <a href className='header__navbar--item-link '>
                  <i className='header__navbar--icon fa-solid fa-heart' />
                  Wishlist
                </a>
              </li>
              <a href className='header__navbar--item-link '></a>
              <li className='header__navbar--item'>
                <a href className='header__navbar--item-link '>
                  <i className='header__navbar--icon fa-solid fa-user' />
                  My Cart
                </a>
              </li>
              <a href className='header__navbar--item-link '></a>
              <li className='header__navbar--item'>
                <a href className='header__navbar--item-link'>
                  <i className='header__navbar--icon fa-solid fa-user' />
                  Checkout
                </a>
              </li>
            </ul>
            <ul className='header__navbar--list hide-on-mobile-tablet'>
              <li className='header__navbar--item header__navbar--item--open-notify '>
                <a href className='header__navbar--item-link'>
                  <i className='header__navbar--icon fa-solid fa-bell' />
                  Notification
                </a>
                <div className='header__notify'>
                  <header className='header__notify-header'>
                    <h3>Thông báo mới nhận </h3>
                  </header>
                  <ul className='header__notify-list'>
                    <li className='header__notify-item header__notify-item--viewed'>
                      <a href className='header__notify-link'>
                        <img
                          src='https://freshdesignweb.com/demo/template/ustora/img/product-2.jpg'
                          alt=''
                          className='header__notify-img'
                        />
                        <div className='header__notify-info'>
                          <span className='header__notify-name'>
                            Xác thực chính hãng nguồn gốc các sản phẩm Ustora
                          </span>
                          <span className='header__notify-description'>
                            Hidden Tag là giải pháp xác thực hàng chính hãng
                            bằng công nghệ tiên tiến nhất hiện nay
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className='header__notify-item header__notify-item--viewed'>
                      <a href className='header__notify-link'>
                        <img
                          src='https://freshdesignweb.com/demo/template/ustora/img/product-thumb-2.jpg'
                          alt=''
                          className='header__notify-img'
                        />
                        <div className='header__notify-info'>
                          <span className='header__notify-name'>
                            Sale sốc Samsung Galaxy s5-2015{' '}
                          </span>
                          <span className='header__notify-description'>
                            Gia chỉ còn 1.200.000 (giá gốc 3.200.000)
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className='header__notify-item'>
                      <a href className='header__notify-link'>
                        <img
                          src='https://freshdesignweb.com/demo/template/ustora/img/product-thumb-3.jpg'
                          alt=''
                          className='header__notify-img'
                        />
                        <div className='header__notify-info'>
                          <span className='header__notify-name'>
                            Samsung Galaxy note4 chính thức ra mắt dòng laptop
                            mới{' '}
                          </span>
                          <span className='header__notify-description'>
                            Để có một trải nghiệm tốt hơn chân thật hơn hãy đến
                            với Samsung{' '}
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className='header__notify-item'>
                      <a href className='header__notify-link'>
                        <img
                          src='https://freshdesignweb.com/demo/template/ustora/img/product-thumb-4.jpg'
                          alt=''
                          className='header__notify-img'
                        />
                        <div className='header__notify-info'>
                          <span className='header__notify-name'>
                            Samsung Galaxy Utra20 chính thức ra mắt dòng tivi
                            mới{' '}
                          </span>
                          <span className='header__notify-description'>
                            Samsung luôn mang đến cho người dùng trải nghiệm tốt
                            nhất
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className='header__notify-more'>
                    <a href className='header__notify-more-btn'>
                      Xem tất cả
                    </a>
                  </div>
                </div>
              </li>
              <li className='header__navbar--item'>
                <a href className='header__navbar--item-link'>
                  <i className='header__navbar--icon fa-sharp fa-solid fa-question' />
                  Help
                </a>
              </li>
              <li className='header__navbar--item  ' onClick={() => props.setOn (!props.on)} >   
                <a className='header__navbar--item-btn '>
                  <i className='header__navbar--icon--btn fa-solid fa-user' />
                  Account
                </a>
              </li>
            </ul>
          </nav>
          <div className='header-width-search'>
            <label
              htmlFor='navbar-mobile-checkbox'
              className='main__navber-mobile hide-on-pc   '
            >
              <i className='main__navbar-mobile-icon  fa-solid fa-bars' />
            </label>
            <input type='checkbox' hidden id='navbar-mobile-checkbox' />
            <label htmlFor='navbar-mobile-checkbox' className='nav__overlay' />
            <div className='nav__mobile  '>
              <label
                htmlFor='navbar-mobile-checkbox'
                className='nav__mobile-close hide-on-pc   '
              >
                <i className='nav__mobile-close-icon fa-solid fa-xmark ' />
              </label>
              <ul className='nav__mobile-list '>
                <li className='nav__mobile-item  '>
                  <a href='/' className='nav__mobile-link'>
                    HOME
                  </a>
                </li>
                <li className='nav__mobile-item '>
                  <a href className='nav__mobile-link'>
                    SHOP PAGE
                  </a>
                </li>
                <li className='nav__mobile-item '>
                  <a href className='nav__mobile-link'>
                    SINGLE PRODUCT
                  </a>
                </li>
                <li className='nav__mobile-item '>
                  <a href className='nav__mobile-link'>
                    CART
                  </a>
                </li>
                <li className='nav__  mobile-item '>
                  <a href className='nav__mobile-link'>
                    CHECKUOT
                  </a>
                </li>
                <li className='nav__mobile-item '>
                  <a href className='nav__mobile-link'>
                    CATEGORY
                  </a>
                </li>
                <li className='nav__mobile-item '>
                  <a href className='nav__mobile-link'>
                    OTHERS
                  </a>
                </li>
                <li className='nav__mobile-item '>
                  <a href className='nav__mobile-link'>
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <label
              htmlFor='mobile-search-checkbox'
              className='header__mobile-search hide-on-pc hide-on-tablet'
            >
              <i className='header__mobile-search-icon fa-solid fa-magnifying-glass' />
            </label>
            <input
              type='checkbox'
              hidden
              id='mobile-search-checkbox'
              className='header__search--checkbox'
            />
            <div className='header__logo  hide-on-mobile-tablet'>
              <a href className='header__logo-link'>
                <img
                  src='https://freshdesignweb.com/demo/template/ustora/img/logo.png'
                  className='header__logo-img'
                  alt='/'
                />
              </a>
            </div>
            <div className='header__search '>
              <input
                type='text'
                value={props.searchText}
                onChange={(event) => props.setSearchText(event.target.value)}
                className='header__search-input'
                placeholder='Search for products'
              />
              <div className='header__search-select'>
                <span className='header__search-select-label'>
                  {' '}
                  Inside the store
                </span>
                <i className='header__search-select-icon fa-solid fa-angle-down' />
              </div>
              <div className='header__search-btn'>
                <i className='header__search-btn-icon fa-solid fa-magnifying-glass' />
              </div>
            </div>
            <div className='header__cart'>
              <div className='header__cart-wrap'>
                <div className='header__cart-notifi'>0</div>
                <i className='header__cart-icon fa-sharp fa-solid fa-cart-shopping' />
                <div className='header__cart-content'>
                  <img
                    alt=''
                    className='header__cart-img'
                  />
                  <span className='header__cart-text'>
                    No products in the cart.
                  </span>
                </div>
              </div>
            </div>
            <div className='header__menu-mobile hide-on-pc  '>
              <label htmlFor='menu-mobile'>
                <i className='header__menu-mobile-icon fa-solid fa-house' />
              </label>
              <input type='checkbox' hidden id='menu-mobile' />
              <div className='header__menu-mobile-list'>
                <li className='header__menu-mobile-item'>
                  <a href className='header__menu-mobile-link'>
                    <i className='fa-solid fa-user' />
                    My account
                  </a>
                </li>
                <li className='header__menu-mobile-item'>
                  <a href className='header__menu-mobile-link'>
                    <i className='fa-solid fa-heart' />
                    Wishlist
                  </a>
                </li>
                <li className='header__menu-mobile-item'>
                  <a href className='header__menu-mobile-link'>
                    <i className='fa-solid fa-user' />
                    My cart
                  </a>
                </li>
                <li className='header__menu-mobile-item'>
                  <a href className='header__menu-mobile-link'>
                    <i className='fa-solid fa-user' />
                    Checkout
                  </a>
                </li>
                <li className='header__menu-mobile-item'>
                  <a href className='header__menu-mobile-link'>
                    <i className='fa-solid fa-bell' />
                    Notification
                  </a>
                </li>
                <li className='header__menu-mobile-item'>
                  <a href className='header__menu-mobile-link'>
                    <i className='fa-solid fa-question' />
                    Help
                  </a>
                </li>
                <li className='header__menu-mobile-item' onClick={() =>props.setOn(true)}>
                  <a href className='header__menu-mobile-link  open-account-js'>
                    <i className='fa-solid fa-user' />
                    Account
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <ul className='main__navbar--tablet hide-on-mobile hide-on-pc   '>
          <li className='main__navbar-item nav__moble-active '>
            <a href className='main__navbar-link '>
              HOME
            </a>
          </li>
          <li className='main__navbar-item'>
            <a href className='main__navbar-link'>
              SHOP PAGE
            </a>
          </li>
          <li className='main__navbar-item'>
            <a href className='main__navbar-link'>
              SINGLE PRODUCT
            </a>
          </li>
          <li className='main__navbar-item'>
            <a href className='main__navbar-link'>
              CART
            </a>
          </li>
          <li className='main__navbar-item'>
            <a href className='main__navbar-link'>
              CHECKOUT
            </a>
          </li>
          <li className='main__navbar-item'>
            <a href className='main__navbar-link'>
              CATEGORY
            </a>
          </li>
          <li className='main__navbar-item'>
            <a href className='main__navbar-link'>
              OTHER
            </a>
          </li>
        </ul>
       
      </header>
    </div>
  );
};

export default Header;
