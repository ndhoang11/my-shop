import React from 'react';
import './styles/base.css'
import './styles/main.css'
import './styles/responsive.css'
import './styles/grid.css'
const Footer = () => {
    return (
        <div>
               <footer className="footer">
          <div className="grid wide">
            <div className="grid__row">
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">Ustora</h3>
                <p className="footer__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading"> CHĂM SÓC KHÁCH HÀNG</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href className="footer-item__link">Trung tâm trợ giúp</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">Tickid mail</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">Hướng dẫn mua hàng</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading"> TICKID</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href className="footer-item__link">giới thiệu về tickid Việt Nam</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">Tuyển dụng</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">Điều khoản tickid</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading"> THEO DÕI</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href className="footer-item__link">
                      <i className="footer-item__link-icon fa-brands fa-facebook" />
                      Facebook
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">
                      <i className="footer-item__link-icon  fa-brands fa-instagram" />
                      instagram
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">
                      <i className="footer-item__link-icon fa-brands fa-square-twitter" />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading"> VÀO CỬA HÀNG TRÊN ỨNG DỤNG </h3>
                <div className="footer__download">
                  <img src="hhttps://quantrinhahang.edu.vn/wp-content/uploads/2019/07/qr-code-la-gi.jpg" alt="" className="footer__download-QR" />
                  <div className="footer__download-apps">
                    <a href="https://play.google.com/" className="footer__download-apps-img-link">
                      <img src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Logo.wine.svg" alt="" className="footer__download-apps-img" />
                    </a>
                    <a href="https://apps.apple.com/" className="footer__download-apps-img-link">
                      <img src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Alternative-Logo.wine.svg" alt="" className="footer__download-apps-img" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer__policies">
              <ul className="footer__policies-list">
                <li className="footer__policies-item">
                  <a href className="footer__policies-item-link">
                    Chính sách bảo mật
                  </a>
                </li>
                <li className="footer__policies-item">
                  <a href className="footer__policies-item-link">
                    Quy chế hoạt động
                  </a>
                </li>
                <li className="footer__policies-item">
                  <a href className="footer__policies-item-link">
                    Chính sách vận chuyển
                  </a>
                </li>
                <li className="footer__policies-item">
                  <a href className="footer__policies-item-link-no-boder">
                    Chính sách trả hàng và hoàn tiền
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-logo">
              <img src="https://freshdesignweb.com/demo/template/ustora/img/logo.png" alt="" className="footer-logo__img" />
              <p className="description-logo">Công ty TNHH Ustora</p>
            </div>
            <div className="footer__addrest">
              <p className="footer__addrest-list">Địa chỉ: Số 35, ngách 2/6, p.Hoàng liệt, quận Hoàng Mai, TP.Hà Nội</p>
              <p className="footer__addrest-list">Mã số doanh nghiệp: 01298387868 do sở kế hoạch &amp; đầu tư TP hà nội cấp lần đầu ngày 20/01/2003</p>
              <p className="footer__addrest-list">2020 bản quyền thuộc về công ty TNHH Ustora</p>
            </div>
          </div>
        </footer>
        </div>
    );
};

export default Footer;