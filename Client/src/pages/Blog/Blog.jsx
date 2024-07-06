import React, { useState } from "react";
import Banner from "../../components/UI/Banner";
import { blogs } from "../../../data.example";
import Pagination from "../../components/UI/Pagination";
import SideMenu from "../../components/UI/SideMenu";

const Blog = () => {

  const[currentPage, setCurrentPage]=useState(1);
const itemsPerPage =  3;

const indexOfLastItem = currentPage* itemsPerPage;
const indexOfFirstItem= indexOfLastItem - itemsPerPage;
const currentItems= blogs.slice(indexOfFirstItem, indexOfLastItem)

const paginate = pageNumber=> setCurrentPage(pageNumber);

  return (
    <div>
      <Banner
        image={"https://themewagon.github.io/cozastore/images/bg-02.jpg"}
        label={"Blog"}
      />
      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {currentItems.map((blog, index) => (
                  <div key={index} className="p-b-63">
                    <a href={blog.link} className="hov-img0 how-pos5-parent">
                      <img src={blog.imgSrc} alt="IMG-BLOG" />
                      <div className="flex-col-c-m size-123 bg9 how-pos5">
                        <span className="ltext-107 cl2 txt-center">
                          {blog.date.day}
                        </span>
                        <span className="stext-109 cl3 txt-center">
                          {blog.date.month} {blog.date.year}
                        </span>
                      </div>
                    </a>
                    <div className="p-t-32">
                      <h4 className="p-b-15">
                        <a
                          href={blog.link}
                          className="ltext-108 cl2 hov-cl1 trans-04"
                        >
                          {blog.title}
                        </a>
                      </h4>
                      <p className="stext-117 cl6">{blog.description}</p>
                      <div className="flex-w flex-sb-m p-t-18">
                        <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                          <span>
                            <span className="cl4">By</span> {blog.author}
                            <span className="cl12 m-l-4 m-r-6">|</span>
                          </span>
                          <span>
                            {blog.categories.join(", ")}
                            <span className="cl12 m-l-4 m-r-6">|</span>
                          </span>
                          <span>{blog.comments} Comments</span>
                        </span>
                        <a
                          href={blog.link}
                          className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
                        >
                          Continue Reading
                          <i className="fa fa-long-arrow-right m-l-9" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Pagination */}
                <Pagination 
                itemPerPage={itemsPerPage}
                totalItem={blogs.length}
                paginate={paginate}/>
              </div>
            </div>
      <SideMenu/>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
