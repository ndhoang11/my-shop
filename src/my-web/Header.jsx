import React from 'react';
import './styles/base.css'
import './styles/main.css'
import './styles/responsive.css'
import './styles/grid.css'

const Header = () => {
    return (
        <div>
             <header className="header">
            <div className="grid wide"> 
              <nav className="header__navbar hide-on-mobile-tablet ">
                <ul className="header__navbar--list">
                  <li className="header__navbar--item   ">
                    <a href className="header__navbar--item-link  "> <i className="header__navbar--icon fa-solid fa-user" />
                      My account  
                    </a>                                    
                  </li>
                  <li className="header__navbar--item  ">
                    <a href className="header__navbar--item-link ">
                      <i className="header__navbar--icon fa-solid fa-heart" />
                      Wishlist</a></li><a href className="header__navbar--item-link ">
                  </a>                     
                  <li className="header__navbar--item">
                    <a href className="header__navbar--item-link ">
                      <i className="header__navbar--icon fa-solid fa-user" />                       
                      My Cart</a></li><a href className="header__navbar--item-link ">
                  </a>                       
                  <li className="header__navbar--item">
                    <a href className="header__navbar--item-link">
                      <i className="header__navbar--icon fa-solid fa-user" />                       
                      Checkout
                    </a>                        
                  </li>
                </ul>
                <ul className="header__navbar--list">
                  <li className="header__navbar--item header__navbar--item--open-notify ">
                    <a href className="header__navbar--item-link">
                      <i className="header__navbar--icon fa-solid fa-bell" />
                      Notification</a>
                    <div className="header__notify">
                      <header className="header__notify-header">
                        <h3>Thông báo mới nhận </h3>
                      </header>
                      <ul className="header__notify-list">
                        <li className="header__notify-item header__notify-item--viewed">
                          <a href className="header__notify-link">
                            <img src="https://freshdesignweb.com/demo/template/ustora/img/product-2.jpg" alt="" className="header__notify-img" />
                            <div className="header__notify-info">
                              <span className="header__notify-name">Xác thực chính hãng nguồn gốc các sản phẩm Ustora</span>
                              <span className="header__notify-description">Hidden Tag là giải pháp xác thực hàng chính hãng bằng công nghệ tiên tiến nhất hiện nay</span>
                            </div>
                          </a>
                        </li>
                        <li className="header__notify-item header__notify-item--viewed">
                          <a href className="header__notify-link">
                            <img src="https://freshdesignweb.com/demo/template/ustora/img/product-thumb-2.jpg" alt="" className="header__notify-img" />
                            <div className="header__notify-info">
                              <span className="header__notify-name">Sale sốc Samsung Galaxy s5-2015 </span>
                              <span className="header__notify-description">Gia chỉ còn 1.200.000 (giá gốc 3.200.000)</span>
                            </div>
                          </a>
                        </li>
                        <li className="header__notify-item">
                          <a href className="header__notify-link">
                            <img src="https://freshdesignweb.com/demo/template/ustora/img/product-thumb-3.jpg" alt="" className="header__notify-img" />
                            <div className="header__notify-info">
                              <span className="header__notify-name">Samsung Galaxy note4 chính thức ra mắt dòng laptop mới </span>
                              <span className="header__notify-description">Để có một trải nghiệm tốt hơn chân thật hơn hãy đến với Samsung </span>
                            </div>
                          </a>
                        </li>
                        <li className="header__notify-item">
                          <a href className="header__notify-link">
                            <img src="https://freshdesignweb.com/demo/template/ustora/img/product-thumb-4.jpg" alt="" className="header__notify-img" />
                            <div className="header__notify-info">
                              <span className="header__notify-name">Samsung Galaxy Utra20 chính thức ra mắt dòng tivi mới </span>
                              <span className="header__notify-description">Samsung luôn mang đến cho người dùng trải nghiệm tốt nhất</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div className="header__notify-more">
                        <a href className="header__notify-more-btn">Xem tất cả</a>
                      </div>
                    </div>
                  </li>
                  <li className="header__navbar--item">
                    <a href className="header__navbar--item-link">
                      <i className="header__navbar--icon fa-sharp fa-solid fa-question" />
                      Help</a>    
                  </li>    
                  <li htmlFor="modal-account-info" className="header__navbar--item  ">
                    <a className="header__navbar--item-btn ">
                      <i className="header__navbar--icon--btn fa-solid fa-user" />
                      Account
                    </a>
                  </li>
                </ul></nav>
              <div className="header-width-search">
                <label htmlFor="navbar-mobile-checkbox" className="main__navber-mobile hide-on-pc   ">
                  <i className="main__navbar-mobile-icon  fa-solid fa-bars" /> 
                </label>
                <input type="checkbox" hidden id="navbar-mobile-checkbox" /> 
                <label htmlFor="navbar-mobile-checkbox" className="nav__overlay" />
                <div className="nav__mobile  ">
                  <label htmlFor="navbar-mobile-checkbox" className="nav__mobile-close hide-on-pc   ">
                    <i className="nav__mobile-close-icon fa-solid fa-xmark " />
                  </label>
                  <ul className="nav__mobile-list ">
                    <li className="nav__mobile-item  "><a href="/" className="nav__mobile-link">HOME</a></li>
                    <li className="nav__mobile-item "><a href className="nav__mobile-link">SHOP PAGE</a></li>
                    <li className="nav__mobile-item "><a href className="nav__mobile-link">SINGLE PRODUCT</a></li>
                    <li className="nav__mobile-item "><a href className="nav__mobile-link">CART</a></li>
                    <li className="nav__  mobile-item "><a href className="nav__mobile-link">CHECKUOT</a></li>
                    <li className="nav__mobile-item "><a href className="nav__mobile-link">CATEGORY</a></li>
                    <li className="nav__mobile-item "><a href className="nav__mobile-link">OTHERS</a></li>
                    <li className="nav__mobile-item "><a href className="nav__mobile-link">CONTACT</a></li>
                  </ul>
                </div>
                <label htmlFor="mobile-search-checkbox" className="header__mobile-search hide-on-pc hide-on-tablet">
                  <i className="header__mobile-search-icon fa-solid fa-magnifying-glass" />
                </label>
                <input type="checkbox" hidden id="mobile-search-checkbox" className="header__search--checkbox" />
                <div className="header__logo  hide-on-mobile-tablet">
                  <a href className="header__logo-link">
                    <img src="https://freshdesignweb.com/demo/template/ustora/img/logo.png" className="header__logo-img" alt="/" />
                  </a>
                </div>
                <div className="header__search ">
                  <input type="text" className="header__search-input" placeholder="Search for products" />
                  <div className="header__search-select">
                    <span className="header__search-select-label"> Inside the store</span>
                    <i className="header__search-select-icon fa-solid fa-angle-down" />
                  </div>
                  <div className="header__search-btn">
                    <i className="header__search-btn-icon fa-solid fa-magnifying-glass" /> 
                  </div>
                </div>
                <div className="header__cart">
                  <div className="header__cart-wrap">
                    <div className="header__cart-notifi">0</div>
                    <i className="header__cart-icon fa-sharp fa-solid fa-cart-shopping" /> 
                    <div className="header__cart-content">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACcCAIAAAB3FTesAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDMxMDBDQzcwRTEyMTFFQTlDN0JDNTAzRUUyMzIxMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDMxMDBDQzgwRTEyMTFFQTlDN0JDNTAzRUUyMzIxMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMkIwRDVENDBFMEYxMUVBOUM3QkM1MDNFRTIzMjEwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MzEwMENDNjBFMTIxMUVBOUM3QkM1MDNFRTIzMjEwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk3kXrQAABTwSURBVHja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" alt="" className="header__cart-img" />
                      <span className="header__cart-text">No products in the cart.</span>
                    </div>
                  </div>
                </div>
                <div className="header__menu-mobile hide-on-pc  ">
                  <label htmlFor="menu-mobile">
                    <i className="header__menu-mobile-icon fa-solid fa-house" />
                  </label>
                  <input type="checkbox" hidden id="menu-mobile" />
                  <div className="header__menu-mobile-list">
                    <li className="header__menu-mobile-item"><a href className="header__menu-mobile-link">
                        <i className="fa-solid fa-user" />
                        My account
                      </a>
                    </li>
                    <li className="header__menu-mobile-item"><a href className="header__menu-mobile-link">
                        <i className="fa-solid fa-heart" />
                        Wishlist
                      </a>
                    </li>
                    <li className="header__menu-mobile-item"><a href className="header__menu-mobile-link">
                        <i className="fa-solid fa-user" />
                        My cart
                      </a>
                    </li>
                    <li className="header__menu-mobile-item"><a href className="header__menu-mobile-link">
                        <i className="fa-solid fa-user" />
                        Checkout
                      </a></li>
                    <li className="header__menu-mobile-item"><a href className="header__menu-mobile-link">
                        <i className="fa-solid fa-bell" />
                        Notification
                      </a></li>
                    <li className="header__menu-mobile-item"><a href className="header__menu-mobile-link">
                        <i className="fa-solid fa-question" />
                        Help
                      </a></li>
                    <li className="header__menu-mobile-item">
                      <a href className="header__menu-mobile-link  open-account-js">
                        <i className="fa-solid fa-user" />
                        Account
                      </a></li>
                  </div>
                </div>
              </div>
            </div> 
            <ul className="main__navbar--tablet hide-on-mobile hide-on-pc   ">
              <li className="main__navbar-item nav__moble-active ">
                <a href className="main__navbar-link ">HOME</a>
              </li>
              <li className="main__navbar-item">
                <a href className="main__navbar-link">SHOP PAGE</a>
              </li>
              <li className="main__navbar-item">
                <a href className="main__navbar-link">SINGLE PRODUCT</a>
              </li>
              <li className="main__navbar-item">
                <a href className="main__navbar-link">CART</a>
              </li>
              <li className="main__navbar-item">
                <a href className="main__navbar-link">CHECKOUT</a>
              </li>
              <li className="main__navbar-item">
                <a href className="main__navbar-link">CATEGORY</a>
              </li>
              <li className="main__navbar-item">
                <a href className="main__navbar-link">OTHER</a>
              </li>
            </ul>
            {/* modal account */} 
            <div className="modal">
              <div className="modal__overlay" />
              <div className="modal__body">
                {/* register form */}
                <div className="auth-form">
                  <div className="auth-form__container">
                    <div className="auth-form__header">
                      <h3 className="auth-form__heading">
                        Đăng ký
                      </h3>
                      <span className="auth-form__switch-btn">Đăng nhập</span>
                    </div>
                    <div className="auth-form__form">   
                      <div className="auth-form__group">
                        <label htmlFor className="auth-form__label">Email or username</label>
                        <input type="text" className="auth-form__input" placeholder="Email or username" />
                      </div>
                      <div className="auth-form__group">
                        <label htmlFor className="auth-form__label">Password</label>
                        <input type="text" className="auth-form__input" placeholder="Password" />
                      </div>
                      <div className="auth-form__group">
                        <label htmlFor className="auth-form__label">Enter password again</label>
                        <input type="text" className="auth-form__input" placeholder="Enter password again" />
                      </div>
                    </div>
                    <div className="auth-form__aside">
                      <p className="auth-form__policy-text">
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                        <a href className="auth-form__policy-link"> privacy policy</a>.
                      </p>
                    </div>
                    <div className="auth-form__controls">
                      <button className="btn auth-form__control-back btn--normal">TRỞ LẠI</button>
                      <button className="btn btn--primaky">ĐĂNG KÝ</button>
                    </div>
                  </div>
                  <div className="auth-form__socials">
                    <a href="https://www.facebook.com/?stype=lo&jlou=AfcoSqfdX76DgYuD4in2a23VO-T34v94Fn82qGewMg_wmWub5MXDeZQSFvv1JEUaZkIl90TnlIfS02pTWsdlpgVcEWbG1yNQKZHmnysTx_rCow&smuh=40981&lh=Ac_gdLeGWEMwJbijd-8" className="auth-form__socials--facebook btn btn--icon">
                      <i className="auth-form__socials-icon fa-brands fa-square-facebook" />
                      <span className="auth-form__socials-title">  Continue with facebook</span>
                    </a>
                    <a href="https://github.com/" className="auth-form__socials--google btn btn--icon">
                      <i className="auth-form__socials-icon fa-brands fa-github" />
                      <span className="auth-form__socials-title">  Continue with Github</span>
                    </a>
                  </div>
                </div> 
                {/* login form */}
                <div className="auth-form">
                  <div className="auth-form__container">
                    <div className="auth-form__header">
                      <h3 className="auth-form__heading">
                        Đăng nhập
                      </h3>
                      <span className="auth-form__switch-btn">Đăng ký</span>
                    </div>
                    <div className="auth-form__form">
                      <div className="auth-form__group">
                        <label htmlFor className="auth-form__label">Email or username</label>
                        <input type="text" className="auth-form__input" placeholder="Email or username" />
                      </div>
                      <div className="auth-form__group">
                        <label htmlFor className="auth-form__label">Password</label>
                        <input type="text" className="auth-form__input" placeholder="Password" />
                      </div>
                    </div>
                    <div className="auth-form__help">
                      <a href className="auth-form__help-link auth-form__help-forgot">Forgot password</a>
                      <span className="auth-form__help-separate" />
                      <a href className="auth-form__help-link auth-form__help-help">Help ? </a>
                    </div>
                    <div className="auth-form__controls">
                      <button className="btn auth-form__control-back btn--normal">TRỞ LẠI</button>
                      <button className="btn btn--primaky">ĐĂNG nhập</button>
                    </div>
                  </div>
                  <div className="auth-form__socials">
                    <a href="https://www.facebook.com/" className="auth-form__socials--facebook btn btn--icon">
                      <i className="auth-form__socials-icon fa-brands fa-square-facebook" />
                      <span className="auth-form__socials-title">  Continue with facebook</span>
                    </a>
                    <a href="https://github.com/" className="auth-form__socials--google btn btn--icon">
                      <i className="auth-form__socials-icon fa-brands fa-github" />
                      <span className="auth-form__socials-title">  Continue with Github</span>
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </header>
        </div>
    );
};

export default Header;