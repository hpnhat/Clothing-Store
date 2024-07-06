import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { products } from '../../../data.example';

const SideMenu = () => {

  const[selectedProduct, setSelectedProduct]=useState([]);

  useEffect(()=>{
    const selected= products.slice(0,3);
    setSelectedProduct(selected)
  })
  return (
    <div className="col-md-4 col-lg-3 p-b-80">
      <div className="side-menu">

        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-33">Categories</h4>
          <ul>
            <li className="bor18">
              <Link
                href="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                Fashion
              </Link>
            </li>
            <li className="bor18">
              <Link
                href="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                Beauty
              </Link>
            </li>
            <li className="bor18">
              <a
                href="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                Street Style
              </a>
            </li>
            <li className="bor18">
              <a
                href="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                Life Style
              </a>
            </li>
            <li className="bor18">
              <a
                href="#"
                className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
              >
                DIY &amp; Crafts
              </a>
            </li>
          </ul>
        </div>
        <div className="p-t-65">
          <h4 className="mtext-112 cl2 p-b-33">Featured Products</h4>
          <ul>
            {selectedProduct.map((product,index)=>(
            <li key={index} className="flex-w flex-t p-b-30">
              <a href={`product/${product.slug}`} className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                <img src={product.image} style={{width:90,height:110}} alt="PRODUCT" />
              </a>
              <div className="size-215 flex-col-t p-t-8">
                <a href={`product/${product.slug}`} className="stext-116 cl8 hov-cl1 trans-04">
                  {product.name}
                </a>
                <span className="stext-116 cl6 p-t-20">${product.price}</span>
              </div>
            </li>
            ))}
         
          </ul>
        </div>
        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-20">Archive</h4>
          <ul>
            <li className="p-b-7">
              <Link
                href="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>July 2018</span>
                <span>(9)</span>
              </Link>
            </li>
            <li className="p-b-7">
              <Link
                href="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>June 2018</span>
                <span>(39)</span>
              </Link>
            </li>
            <li className="p-b-7">
              <Link
                href="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>May 2018</span>
                <span>(29)</span>
              </Link>
            </li>
            <li className="p-b-7">
              <Link
                href="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>April 2018</span>
                <span>(35)</span>
              </Link>
            </li>
            <li className="p-b-7">
              <Link
                href="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>March 2018</span>
                <span>(22)</span>
              </Link>
            </li>
            <li className="p-b-7">
              <Link
                href="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>February 2018</span>
                <span>(32)</span>
              </Link>
            </li>
            <li className="p-b-7">
              <Link
                href="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>January 2018</span>
                <span>(21)</span>
              </Link>
            </li>
            <li className="p-b-7">
              <Link
                href="#"
                className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
              >
                <span>December 2017</span>
                <span>(26)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-t-50">
          <h4 className="mtext-112 cl2 p-b-27">Tags</h4>
          <div className="flex-w m-r--5">
            <Link
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Fashion
            </Link>
            <Link
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Lifestyle
            </Link>
            <Link
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Denim
            </Link>
            <Link
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Streetstyle
            </Link>
            <Link
              href="#"
              className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
            >
              Crafts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu