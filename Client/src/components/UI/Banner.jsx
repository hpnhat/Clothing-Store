import React from 'react'

const Banner = ({image, label}) => {
  return (
    <section
      className="bg-img1 txt-center p-lr-15 p-tb-92"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <h2 className="ltext-105 cl0 txt-center">{label}</h2>
    </section>
  );
}

export default Banner