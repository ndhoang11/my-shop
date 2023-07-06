import React from 'react';
import './styles/base.css'
import './styles/main.css'
import './styles/responsive.css'
import './styles/grid.css'
const Body = () => {
    const titles = [
        {
          titleIp: 'iPhone VN/A Chính Thống'
        },
        {
          titleSS: 'Samsung Chính Hãng'
        },
      ]
        const products = [
          {
              image:  'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg',
              name: ' iPhone 14 Pro Max 128GB Chính hãng (VN/A)  ',
              price: '25.790.000',
              oldPrice: '33.990.000đ ',
              favorite: true,
              produce: 'Korea',
              nameDiscount: 'Discount',
              DiscountPercent: '10%',
              brand: 'Ustora',
              title: 'iPhone VN/A Chính Thống'
          },
          {
            image: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone-13-128gb-didongviet_1.jpg&w=640&q=100',
            name: ' iPhone 13 128GB Chính Hãng (VN/A)  ',
            price: '23.790.000',
            oldPrice: '33.990.000đ ',
            favorite: true,
            produce: 'Korea',
            nameDiscount: 'Discount',
            DiscountPercent: '10%',
            brand: 'Ustora',
    
        },
        {
          image: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone-13-pro-128gb-didongviet_1.jpg&w=640&q=100',
          name: ' iPhone 14 Pro 128GB Chính hãng (VN/A)  ',
          price: '25.790.000',
          oldPrice: '33.990.000đ ',
          favorite: true,
          produce: 'Korea',
          nameDiscount: 'Discount',
          DiscountPercent: '10%',
          brand: 'Ustora'
    
      },
      {
        image: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone-14-plus-128gb-didongviet_1.jpg&w=1920&q=80',
        name: ' iPhone 12 64GB (Likenew)  ',
        price: '9.990.000',
        oldPrice: '11.990.000đ ',
        favorite: true,
        produce: 'Korea',
        nameDiscount: 'Discount',
        DiscountPercent: '10%',
        brand: 'Ustora'
    
    },
    {
      image: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone-11-64gb-chinh-hang_3.jpg&w=640&q=100',
      name: ' iPhone 11 64GB Chính Hãng (VN/A)   ',
      price: '9.990.000',
       oldPrice: '11.990.000đ ',
      favorite: true,
      produce: 'Korea',
      nameDiscount: 'Discount',
      DiscountPercent: '10%',
      brand: 'Ustora'
    
    },
    {
    image: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone-13-pro-256gb-didongviet_1.jpg&w=640&q=100',
    name: ' iPhone 14 Pro 128GB Chính hãng (VN/A)   ',
    price: '9.990.000',
    oldPrice: '11.990.000đ ',
    favorite: true,
    produce: 'Korea',
    nameDiscount: 'Discount',
    DiscountPercent: '10%',
    brand: 'Ustora'
    
    },
    {
    image: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone-14-plus-128gb-didongviet_1.jpg&w=1920&q=80',
    name: 'iPhone 14 Plus 256GB Chính Hãng (VN/A)   ',
    price: '9.990.000',
    oldPrice: '11.990.000đ ',
    favorite: true,
    produce: 'Korea',
    nameDiscount: 'Discount',
    DiscountPercent: '10%',
    brand: 'Ustora'
    
    },
    {
    image: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone-13-pro-128gb-didongviet_1.jpg&w=1920&q=80',
    name: ' iPhone 14 Pro 128GB Chính hãng (VN/A) ',
    price: '9.990.000',
     oldPrice: '11.990.000đ ',
    favorite: true,
    produce: 'Korea',
    nameDiscount: 'Discount',
    DiscountPercent: '10%',
    brand: 'Ustora'
    
    },
    {
    image: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fproducts%2F2023%2F4%2F3%2F1%2F1683095228018_iphone_12_pro_max_den_didongviet.jpg&w=1920&q=80',
    name: ' iPhone 12 Pro 128GB (Likenew)   ',
    price: '212.990.000 ',
    oldPrice: '15.990.000 ',
    favorite: true,
    produce: 'Korea',
    nameDiscount: 'Discount',
    DiscountPercent: '10%',
    brand: 'Ustora'
    
    },
    {
    image: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone-12-mau-green-didongviet_2.jpg&w=640&q=100',
    name: ' iPhone 12 64GB (Likenew)   ',
    price: '9.990.0000',
    oldPrice: '11.990.000 ',
    favorite: true,
    produce: 'Korea',
    nameDiscount: 'Discount',
    DiscountPercent: '10%',
    brand: 'Ustora'
    
    },
    
      ]
    
      const productSs = [
     
    {
      imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Fa%2Fsamsung-galaxy-z-flip4-5g-128gb-didongviet_1_1_1.jpg&w=1920&q=80',
      nameSS: ' Samsung Galaxy Z Flip4 5G 128GB Chính Hãng (BHĐT)  ',
      priceSS: '14.090.000 ',
      oldPriceSS: '23.990.000  ',
      favoriteSS: true,
      produceSS: 'Korea',
      nameDiscountSS: 'Discount',
      DiscountPercentSS: '10%',
      brandSS: 'Ustora'
      
      },
     { 
      imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Fa%2Fsamsung-galaxy-s23-mau-den-1-didongviet.jpg&w=1920&q=80',
      nameSS: ' Samsung Galaxy S23 5G 256GB Chính Hãng  ',
      priceSS: '16.790.000',
      oldPriceSS: '24.990.000  ',
      favoriteSS: true,
      produceSS: 'Korea',
      nameDiscountSS: 'Discount',
      DiscountPercentSS: '10%',
      brandSS: 'Ustora'
      
      },
     { 
      imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Fa%2Fsamsung-galaxy-s23-mau-tim-1-didongviet_2.jpg&w=1920&q=80',
      nameSS: 'Samsung Galaxy S23 Plus 5G 512GB Chính Hãng  ',
      priceSS: '20.590.000',
      oldPriceSS: '29.990.000 ',
      favoriteSS: true,
      produceSS: 'Korea',
      nameDiscountSS: 'Discount',
      DiscountPercentSS: '10%',
      brandSS: 'Ustora'
      
      },
      { 
        imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fproducts%2F2023%2F4%2F31%2F1%2F1685524109619_samsung_galaxy_s23_ultra_thumb_didongviet_new.jpg&w=1920&q=80',
        nameSS: 'Samsung Galaxy S23 Ultra 5G 512GB Chính Hãng ',
        priceSS: '30.880.000 ',
        oldPriceSS: '36.990.000 ',
        favoriteSS: true,
        produceSS: 'Korea',
        nameDiscountSS: 'Discount',
        DiscountPercentSS: '10%',
        brandSS: 'Ustora'
        
        },
        { 
          imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fmedia%2Fcatalog%2Fproduct%2Fs%2Fa%2Fsamsung-galaxy-z-fold4-5g-256gb-didongviet.jpg&w=1920&q=80',
          nameSS: 'Samsung Galaxy Z Fold4 5G 256GB Chính Hãng ',   
          priceSS: '28.880.000 ',
          oldPriceSS: '40.990.000 ',
          favoriteSS: true,
          produceSS: 'Korea',
          nameDiscountSS: 'Discount',
          DiscountPercentSS: '10%',
          brandSS: 'Ustora'
          
          },
          { 
            imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fproducts%2F2023%2F4%2F21%2F1%2F1684604344478_samsung_galaxy_a04_mau_den_didongviet_1.jpg&w=1920&q=80',
            nameSS: 'Samsung Galaxy A04 32GB Chính Hãng (BHĐT)',
            priceSS: '2.890.000',
             oldPriceSS: '3.990.000 ',
            favoriteSS: true,
            produceSS: 'Korea',
            nameDiscountSS: 'Discount',
            DiscountPercentSS: '10%',
            brandSS: 'Ustora'
            
            },
            { 
              imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fproducts%2F2023%2F4%2F21%2F1%2F1684604027620_samsung_galaxy_a04s_mau_xanh_duong_si_didongviet_1.jpg&w=1920&q=80',
              nameSS: 'Samsung Galaxy A04s 64GB Chính Hãng (BHĐT)',
              priceSS: '2.890.000',
              oldPriceSS: '3.990.000 ',
              favoriteSS: true,
              produceSS: 'Korea',
              nameDiscountSS: 'Discount',
              DiscountPercentSS: '10%',
              brandSS: 'Ustora'
              
              },
              { 
                imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fproducts%2F2023%2F4%2F15%2F1%2F1684132626296_samsung_galaxy_a14_128gb_mau_den_didongviet_1_1.jpg&w=1920&q=80',
                nameSS: 'Samsung Galaxy A14 128GB Chính Hãng (BHĐT)',             
                priceSS: '8.790.000 ',
                oldPriceSS: '11.290.000 ',
                favoriteSS: true,
                produceSS: 'Korea',
                nameDiscountSS: 'Discount',
                DiscountPercentSS: '10%',
                brandSS: 'Ustora'
                
                },
                { 
                  imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fproducts%2F2023%2F5%2F9%2F1%2F1686296072076_samsung_galaxy_a34_128gb_xanh_dao_didongviet_1.jpg&w=1920&q=80',
                  nameSS: 'Samsung Galaxy A34 5G 128GB Chính Hãng (BHĐT)',
                  priceSS: '8.790.000 ',
                  oldPriceSS: '11.290.000 ',
                  favoriteSS: true,
                  produceSS: 'Korea',
                  nameDiscountSS: 'Discount',
                  DiscountPercentSS: '10%',
                  brandSS: 'Ustora'
                  
                  },
                  { 
                    imageSS: 'https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fproducts%2F2023%2F5%2F9%2F1%2F1686299517983_samsung_galaxy_a54_128gb_den_didongviet.jpg&w=1920&q=80',
                    nameSS: 'Samsung Galaxy A54 5G 256GB Chính Hãng (BHĐT)',
                    priceSS: '8.790.000 ',
                    oldPriceSS: '11.290.000 ',
                    favoriteSS: true,
                    produceSS: 'Korea',
                    nameDiscountSS: 'Discount',
                    DiscountPercentSS: '10%',
                    brandSS: 'Ustora'
                    
                    },
      ]
    return (
        <div>
             <div className="body">
            {/* main-nav-bar */}
            <div className="grid wide">
              <div className="row sm-gutter">
                <div className="col l-2 m-0 c-0">
                  <nav className="category hide-on-mobile-tablet">
                    <h3 className="category__heading">
                      <a href className="category__heading-link">
                        <i className="category__heading-icon fa-solid fa-list hide-on-mobile-tablet" />
                        Category</a></h3><a href className="category__heading-link">
                    </a> 
                    <ul className="category-list">
                      <li className="category-item  category-item--active">
                        <a href className="category-item__link ">Điện thoại </a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Apple (ARR) </a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Laptop / máy tính bảng</a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Máy cũ giá rẻ</a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Phụ kiện </a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Thiết bị đeo tay </a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link"> Tai nghe </a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Khuyến mãi hôm nay </a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Thu cũ đổi mới </a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Ưu đãi dịch vụ</a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Trả góp 0% </a>
                      </li>
                      <li className="category-item">
                        <a href className="category-item__link">Tin tức </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col l-10 m-10 c-12">
                  <div className="main-navbar hide-on-mobile-tablet ">
                    <ul className="main__navbar--list">
                      <li className="main__navbar--item main__navbar--item-active "><a href="/" className="main__navbar--item-link">HOME</a></li>
                      <li className="main__navbar--item "><a href className="main__navbar--item-link">SHOP PAGE</a></li>
                      <li className="main__navbar--item "><a href className="main__navbar--item-link">SINGLE PRODUCT</a></li>
                      <li className="main__navbar--item "><a href className="main__navbar--item-link">CART</a></li>
                      <li className="main__navbar--item "><a href className="main__navbar--item-link">CHECKUOT</a></li>
                      <li className="main__navbar--item "><a href className="main__navbar--item-link">CATEGORY</a></li>
                      <li className="main__navbar--item "><a href className="main__navbar--item-link">OTHERS</a></li>
                      <li className="main__navbar--item "><a href className="main__navbar--item-link">CONTACT</a></li>
                    </ul>
                  </div>
                  <div className="slider  hide-on-mobile-tablet">
                    <img src="https://cdn-v2.didongviet.vn/files/banners/2023/5/16/1/1686900133618_aaaaac_quyaaan_maay_caa_824x400.jpg" alt="" className="slider-img" />
                  </div>                    
                </div>  
                <div className="col l-12 m-12 c-12">
                  <nav className="suggest-product">
                    <ul className="suggest-product__list">
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687163311575_iphone_12_pro_max.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687161654715_iphone_14_pro_max.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687163683983_iphone_13.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687164795667_airpods_2_2023.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687161468213_galaxy_a34_bhdt_didongviet_1.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687164938609_huawei_band_8.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687167607787_caap_saaac.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687501344946_frame_14.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687500929529_frame_12.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687500814595_frame_11.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687501112613_frame_13.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/23/0/1687501344946_frame_14.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                      <li className="suggest-product__item">
                        <a href className="suggest-product__link">
                          <img src="https://cdn-v2.didongviet.vn/files/page/2023/5/19/0/1687163683983_iphone_13.png" className="suggest-product-img" alt="" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="home-product">
                    <div className="title">
                    {titles.map((titleProduct) => 
                      <a href className="title__product">{titleProduct.titleIp}</a>
                    )}
                    </div>
                    <div className="row sm-gutter">
                    {
                        products.map((product) => 
                        <div className="col l-2-4 m-3 c-6 ">
                        <a className="home-product-item" href="/">
                        <div className="home-product-item__img" style={{backgroundImage: `url(${product.image})`}}></div>
                          <h4 className="home-product-item__name">
                            {product.name}
                          </h4>
                          <div className="home-product-item__price">
                            <span className="home-product-item__price-old">{product.oldPrice}</span>
                            <span className="home-product-item__price-curent">{product.price}đ</span>
                          </div>
                          <div className="home-product-item__action">
                            <span className="home-product-item__like">
                              <i className="fa-solid fa-heart" />
                              {/* <i class="fa-solid fa-heart"></i> */}
                            </span>
                            <div className="home-product-item__rating">
                              <i className="fa-sharp fa-solid fa-star" />
                              <i className="fa-sharp fa-solid fa-star" />
                              <i className="fa-sharp fa-solid fa-star" />
                              <i className="fa-sharp fa-solid fa-star" />
                              <i className="fa-sharp fa-solid fa-star" />
                            </div>
                          </div>
                          <div className="home-product-item__origin">
                            <span className="home-product-item__brand">{product.brand}</span>
                            <span className="home-product-item__origin-name">{product.produce}</span>
                          </div>
                          <div className="home-product-item__favourite">
                            <i className="fa-solid fa-check" />
                            <span>Favourite</span>
                          </div>
                          <div className="home-product-item__sale-off">
                            <span className="home-product-item__sale-off-persent">{product.nameDiscount}</span>
                            <span className="home-product-item__sale-off-label">{product.DiscountPercent}</span>
                          </div>
                        </a>  
                      </div>)
                    }           
                      
                    </div>
                  </div>
                  <div className="home-product">
                    <div className="title">
                    {titles.map((titleProduct) => 
                      <a href className="title__product">{titleProduct.titleSS}</a>
                    )}
                    </div>
                    <div className="row sm-gutter">
                    {
                        productSs.map((productSS) => 
                        <div className="col l-2-4 m-3 c-6 ">
                        <a className="home-product-item" href="/">
                        <div className="home-product-item__img" style={{backgroundImage: `url(${productSS.imageSS})`}}></div>
                          <h4 className="home-product-item__name">
                            {productSS.nameSS}
                          </h4>
                          <div className="home-product-item__price">
                            <span className="home-product-item__price-old">{productSS.oldPriceSS}</span>
                            <span className="home-product-item__price-curent">{productSS.priceSS}đ</span>
                          </div>
                          <div className="home-product-item__action">
                            <span className="home-product-item__like">
                              <i className="fa-solid fa-heart" />
                              {/* <i class="fa-solid fa-heart"></i> */}
                            </span>
                            <div className="home-product-item__rating">
                              <i className="fa-sharp fa-solid fa-star" />
                              <i className="fa-sharp fa-solid fa-star" />
                              <i className="fa-sharp fa-solid fa-star" />
                              <i className="fa-sharp fa-solid fa-star" />
                              <i className="fa-sharp fa-solid fa-star" />
                            </div>
                          </div>
                          <div className="home-product-item__origin">
                            <span className="home-product-item__brand">{productSS.brandSS}</span>
                            <span className="home-product-item__origin-name">{productSS.produceSS}</span>
                          </div>
                          <div className="home-product-item__favourite">
                            <i className="fa-solid fa-check" />
                            <span>Favourite</span>
                          </div>
                          <div className="home-product-item__sale-off">
                            <span className="home-product-item__sale-off-persent">{productSS.nameDiscountSS}</span>
                            <span className="home-product-item__sale-off-label">{productSS.DiscountPercentSS}</span>
                          </div>
                        </a>  
                      </div>)
                    }           
                      
                    </div>
                  </div>
                  <ul className="pagination home-product__pagination">
                    <li className="pagination-item  ">
                      <a href className="pagination-item__link">
                        <i className="pagination-item__icon fa-solid fa-angle-left" />
                      </a>
                    </li>
                    <li className="pagination-item pagination-item--active">
                      <a href className="pagination-item__link ">1</a> 
                    </li>
                    <li className="pagination-item">
                      <a href className="pagination-item__link">2</a> 
                    </li>
                    <li className="pagination-item">
                      <a href className="pagination-item__link">3</a> 
                    </li>
                    <li className="pagination-item">
                      <a href className="pagination-item__link">4</a> 
                    </li>
                    <li className="pagination-item">
                      <a href className="pagination-item__link">...</a> 
                    </li>
                    <li className="pagination-item">
                      <a href className="pagination-item__link">14</a> 
                    </li>
                    <li className="pagination-item">
                      <a href className="pagination-item__link">
                        <i className="pagination-item__icon fa-solid fa-angle-right" />
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