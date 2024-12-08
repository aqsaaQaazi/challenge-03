import featureProducts from "../utils/featuredProducts"

export default function FeatureProducts() {

  return (
    <section id="featured-products" className="wrapper">
      <div className="py-[90px] px-[10px] lg:px-0">
        <h2 className="text-[32px] text-navy-blue text-center font-lato font-bold leading-[38px] sm:text-[36px] md:text-[40px]">
          Featured Products
        </h2>
      </div>

      {/* card */}
      <div >
       {featureProducts.map((=> {
        
       }))

       }
      </div>
    </section>
  );
}
