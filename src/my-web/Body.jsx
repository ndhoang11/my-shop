import React, { useMemo } from 'react';
import { samSungProducts } from '../data/samSungProducts';
import { iphoneProducts } from '../data/iphoneProducts';
import { titles } from '../data/titles';
import { OppoProducts } from '../data/oppoProducts';
const Body = (props) => {

  // iphone
  const searchText = props.searchText;
  const listIphoneProducts = useMemo(() => {
    // kiem tra searchText co gia tri hay ko
    if (!searchText.trim()?.length) return iphoneProducts;
    const newProductList = iphoneProducts.filter((product) => {
      const regex = new RegExp(searchText, 'ig');
      const matched = regex.test(product.name);
      return matched;
    });

    return newProductList;
  }, [searchText]);

  // Samsung
  const listSamsungProducts = useMemo(() => {
    // kiem tra searchText co gia tri hay ko
    if (!searchText.trim()?.length) return samSungProducts;
  
    const newProductList = samSungProducts.filter((product) => {
      const regex = new RegExp(searchText, 'ig');
      const matched = regex.test(product.name);
      return matched;
    });

    return newProductList;
  }, [searchText]);

  // Oppo
  const listOppoProducts = useMemo(() => {
    // kiem tra searchText co gia tri hay ko
    if (!searchText.trim()?.length) return OppoProducts;
  
    const newProductList = OppoProducts.filter((product) => {
      const regex = new RegExp(searchText, 'ig');
      const matched = regex.test(product.name);
      return matched;
    });

    return newProductList;
  }, [searchText]);

  return (
    <div>
      <div className='body'>
        {/* main-nav-bar */}
        <div className='grid wide'>
          <div className='row sm-gutter'>
            <div className='col l-2 m-0 c-0'>
              <nav className='category hide-on-mobile-tablet'>
                <h3 className='category__heading'>
                  <a href className='category__heading-link'>
                    <i className='category__heading-icon fa-solid fa-list hide-on-mobile-tablet' />
                    Category
                  </a>
                </h3>
                <a href className='category__heading-link'></a>
                <ul className='category-list'>
                  <li className='category-item  category-item--active'>
                    <a href className='category-item__link '>
                      Điện thoại{' '}
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Apple (ARR){' '}
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Laptop / máy tính bảng
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Máy cũ giá rẻ
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Phụ kiện{' '}
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Thiết bị đeo tay{' '}
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      {' '}
                      Tai nghe{' '}
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Khuyến mãi hôm nay{' '}
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Thu cũ đổi mới{' '}
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Ưu đãi dịch vụ
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Trả góp 0%{' '}
                    </a>
                  </li>
                  <li className='category-item'>
                    <a href className='category-item__link'>
                      Tin tức{' '}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='col l-10 m-10 c-12'>
              <div className='main-navbar hide-on-mobile-tablet '>
                <ul className='main__navbar--list'>
                  <li className='main__navbar--item main__navbar--item-active '>
                    <a href='/' className='main__navbar--item-link'>
                      HOME
                    </a>
                  </li>
                  <li className='main__navbar--item '>
                    <a href className='main__navbar--item-link'>
                      SHOP PAGE
                    </a>
                  </li>
                  <li className='main__navbar--item '>
                    <a href className='main__navbar--item-link'>
                      SINGLE PRODUCT
                    </a>
                  </li>
                  <li className='main__navbar--item '>
                    <a href className='main__navbar--item-link'>
                      CART
                    </a>
                  </li>
                  <li className='main__navbar--item '>
                    <a href className='main__navbar--item-link'>
                      CHECKUOT
                    </a>
                  </li>
                  <li className='main__navbar--item '>
                    <a href className='main__navbar--item-link'>
                      CATEGORY
                    </a>
                  </li>
                  <li className='main__navbar--item '>
                    <a href className='main__navbar--item-link'>
                      OTHERS
                    </a>
                  </li>
                  <li className='main__navbar--item '>
                    <a href className='main__navbar--item-link'>
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
              <div className='slider  hide-on-mobile-tablet'>
                <img
                  src='https://cdn-v2.didongviet.vn/files/banners/2023/5/16/1/1686900133618_aaaaac_quyaaan_maay_caa_824x400.jpg'
                  alt=''
                  className='slider-img'
                />
              </div>
            </div>
            <div className='col l-12 m-12 c-12'>
              <nav className='suggest-product'>
                <ul className='suggest-product__list'>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687163311575_iphone_12_pro_max.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687161654715_iphone_14_pro_max.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687163683983_iphone_13.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687164795667_airpods_2_2023.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687161468213_galaxy_a34_bhdt_didongviet_1.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687164938609_huawei_band_8.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687167607787_caap_saaac.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687501344946_frame_14.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687500929529_frame_12.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687500814595_frame_11.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687501112613_frame_13.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687501344946_frame_14.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='suggest-product__item'>
                    <a href className='suggest-product__link'>
                      <img
                        src='https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687163683983_iphone_13.png'
                        className='suggest-product-img'
                        alt=''
                      />
                    </a>
                  </li>
                </ul>
              </nav>

              {/* iphone */}
              <div className='home-product'>
                <div className='title'>
                  {titles.map((titleProduct) => (
                    <a href className='title__product'>
                      {titleProduct.titleIp}
                    </a>
                  ))}
                </div>
                <div className='row sm-gutter'>
                  {listIphoneProducts.map((product) => (
                    <div className='col l-2-4 m-3 c-6 '>
                      <a className='home-product-item' href='/'>
                        <div
                          className='home-product-item__img'
                          style={{ backgroundImage: `url(${product.image})` }}
                        ></div>
                        <h4 className='home-product-item__name'>
                          {product.name}
                        </h4>
                        <div className='home-product-item__price'>
                          <span className='home-product-item__price-old'>
                            {product.oldPrice}
                          </span>
                          <span className='home-product-item__price-curent'>
                            {product.price}đ
                          </span>
                        </div>
                        <div className='home-product-item__action'>
                          <span className='home-product-item__like'>
                            <i className='fa-solid fa-heart' />
                            {/* <i class="fa-solid fa-heart"></i> */}
                          </span>
                          <div className='home-product-item__rating'>
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                          </div>
                        </div>
                        <div className='home-product-item__origin'>
                          <span className='home-product-item__brand'>
                            {product.brand}
                          </span>
                          <span className='home-product-item__origin-name'>
                            {product.produce}
                          </span>
                        </div>
                        <div className='home-product-item__favourite'>
                          <i className='fa-solid fa-check' />
                          <span>Favourite</span>
                        </div>
                        <div className='home-product-item__sale-off'>
                          <span className='home-product-item__sale-off-persent'>
                            {product.nameDiscount}
                          </span>
                          <span className='home-product-item__sale-off-label'>
                            {product.discountPercent}
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                {/* samsung */}
              </div>
              <div className='home-product'>
                <div className='title'>
                  {titles.map((titleProduct) => (
                    <a href className='title__product'>
                      {titleProduct.titleSS}
                    </a>
                  ))}
                </div>
                <div className='row sm-gutter'>
                  {listSamsungProducts.map((product) => (
                    <div className='col l-2-4 m-3 c-6 '>
                      <a className='home-product-item' href='/'>
                        <div
                          className='home-product-item__img'
                          style={{
                            backgroundImage: `url(${product.image})`,
                          }}
                        ></div>
                        <h4 className='home-product-item__name'>
                          {product.name}
                        </h4>
                        <div className='home-product-item__price'>
                          <span className='home-product-item__price-old'>
                            {product.oldPrice}
                          </span>
                          <span className='home-product-item__price-curent'>
                            {product.price}đ
                          </span>
                        </div>
                        <div className='home-product-item__action'>
                          <span className='home-product-item__like'>
                            <i className='fa-solid fa-heart' />
                            {/* <i class="fa-solid fa-heart"></i> */}
                          </span>
                          <div className='home-product-item__rating'>
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                          </div>
                        </div>
                        <div className='home-product-item__origin'>
                          <span className='home-product-item__brand'>
                            {product.brand}
                          </span>
                          <span className='home-product-item__origin-name'>
                            {product.produce}
                          </span>
                        </div>
                        <div className='home-product-item__favourite'>
                          <i className='fa-solid fa-check' />
                          <span>Favourite</span>
                        </div>
                        <div className='home-product-item__sale-off'>
                          <span className='home-product-item__sale-off-persent'>
                            {product.nameDisount}
                          </span>
                          <span className='home-product-item__sale-off-label'>
                            {product.discountPercent}
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {/* oppo */}
              <div className='home-product'>
                <div className='title'>
                  {titles.map((titleProduct) => (
                    <a href className='title__product'>
                      {titleProduct.titleOppo}
                    </a>
                  ))}
                </div>
                <div className='row sm-gutter'>
                  {listOppoProducts.map((product) => (
                    <div className='col l-2-4 m-3 c-6 '>
                      <a className='home-product-item' href='/'>
                        <div
                          className='home-product-item__img'
                          style={{
                            backgroundImage: `url(${product.image})`,
                          }}
                        ></div>
                        <h4 className='home-product-item__name'>
                          {product.name}
                        </h4>
                        <div className='home-product-item__price'>
                          <span className='home-product-item__price-old'>
                            {product.oldPrice}
                          </span>
                          <span className='home-product-item__price-curent'>
                            {product.price}đ
                          </span>
                        </div>
                        <div className='home-product-item__action'>
                          <span className='home-product-item__like'>
                            <i className='fa-solid fa-heart' />
                            {/* <i class="fa-solid fa-heart"></i> */}
                          </span>
                          <div className='home-product-item__rating'>
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                            <i className='fa-sharp fa-solid fa-star' />
                          </div>
                        </div>
                        <div className='home-product-item__origin'>
                          <span className='home-product-item__brand'>
                            {product.brand}
                          </span>
                          <span className='home-product-item__origin-name'>
                            {product.produce}
                          </span>
                        </div>
                        <div className='home-product-item__favourite'>
                          <i className='fa-solid fa-check' />
                          <span>Favourite</span>
                        </div>
                        <div className='home-product-item__sale-off'>
                          <span className='home-product-item__sale-off-persent'>
                            {product.nameDisount}
                          </span>
                          <span className='home-product-item__sale-off-label'>
                            {product.discountPercent}
                          </span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <ul className='pagination home-product__pagination'>
                <li className='pagination-item  '>
                  <a href className='pagination-item__link'>
                    <i className='pagination-item__icon fa-solid fa-angle-left' />
                  </a>
                </li>
                <li className='pagination-item pagination-item--active'>
                  <a href className='pagination-item__link '>
                    1
                  </a>
                </li>
                <li className='pagination-item'>
                  <a href className='pagination-item__link'>
                    2
                  </a>
                </li>
                <li className='pagination-item'>
                  <a href className='pagination-item__link'>
                    3
                  </a>
                </li>
                <li className='pagination-item'>
                  <a href className='pagination-item__link'>
                    4
                  </a>
                </li>
                <li className='pagination-item'>
                  <a href className='pagination-item__link'>
                    ...
                  </a>
                </li>
                <li className='pagination-item'>
                  <a href className='pagination-item__link'>
                    14
                  </a>
                </li>
                <li className='pagination-item'>
                  <a href className='pagination-item__link'>
                    <i className='pagination-item__icon fa-solid fa-angle-right' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
