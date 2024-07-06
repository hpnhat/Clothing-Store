import React from 'react'
import Banner from '../../components/UI/Banner';
import { about } from '../../../data.example';

const About = () => {
  return (
    <div>
      <Banner
        image={"https://themewagon.github.io/cozastore/images/bg-01.jpg"}
        label={"About"}
      />
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          {about.map((content, index) => (
            <div className={`row ${index === 0 ? "p-b-148" : ""}`} key={index}>
              <div
                className={`col-md-7 col-lg-8 ${
                  index % 2 === 1 ? "order-md-2 p-b-30" : ""
                }`}
              >
                <div
                  className={`p-t-7 ${
                    index === 0
                      ? "p-r-85 p-r-15-lg p-r-0-md"
                      : "p-l-85 p-l-15-lg p-l-0-md"
                  }`}
                >
                  <h3 className="mtext-111 cl2 p-b-16">{content.title}</h3>
                  {content.paragraphs.map((paragraph, i) => (
                    <p className="stext-113 cl6 p-b-26" key={i}>
                      {paragraph}
                    </p>
                  ))}
                  {content.quote && (
                    <div className="bor16 p-l-29 p-b-9 m-t-22">
                      <p className="stext-114 cl6 p-r-40 p-b-11">
                        {content.quote.text}
                      </p>
                      <span className="stext-111 cl8">
                        {content.quote.author}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`col-11 col-md-5 col-lg-4 m-lr-auto ${
                  index % 2 === 1 ? "order-md-1 p-b-30" : ""
                }`}
              >
                <div className={`how-bor${index + 1}`}>
                  <div className="hov-img0">
                    <img src={content.image} alt="IMG" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About