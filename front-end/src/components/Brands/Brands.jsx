import { useState, useEffect } from "react";
import { client, urlFor } from "../../client";
import "./Brands.css";
import { Rectangle_1 } from "../../assets/index";

const Brands = () => {
  const [brands, setBrands] = useState();

  useEffect(() => {
    const query = '*[_type == "brands"]';

    client
      .fetch(query)
      .then((r) => {
        if (r.length > 0) {
          r.sort((a, b) => a.index - b.index);
          setBrands(r);
          console.log("database results", r);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="wrapper">
      <section id="Brands" className="rootOfBrands">
        <h5>{"You’ll be in good company"}</h5>

        <h1>Trusted by leading brands</h1>

        <div className="imageDivBrand">
          {(brands || []).map((brand, i) => {
            return (
              <div className="imageBrand" key={i}>
                <img src={urlFor(brand.image)} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Brands;
