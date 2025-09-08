import React from 'react';

function VitaminsEx({ showSection }) {
  return (
    <section id="vitaminsEx">
      <h2>Vitamins & Minerals</h2>
      <div className="card-grid">
        <div className="card">
          <img src="https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/589746/pictures/large_spinach-apple-strawberry-blueberry-salad.jpg" alt="" />
          <h3>Spinach & Kale Salad</h3>
          <p>Iron, vitamin K & antioxidants.</p>
        </div>
        <div className="card">
          <img src="https://cff2.earth.com/uploads/2023/10/11185058/citrus-fruits_1medium.jpg" alt="" />
          <h3>Citrus Fruits</h3>
          <p>Vitamin C boost immunity.</p>
        </div>
        <div className="card">
          <img src="https://assets.heartfoundation.org.nz/images/nutrition/page-heros/nuts-and-seeds-hero.jpg?mtime=1669000908" alt="" />
          <h3>Nuts & Seeds</h3>
          <p>Minerals, healthy fats.</p>
        </div>
        <div className="card">
          <img src="https://images.indianexpress.com/2018/01/omega-3-fish-thinkstockphotos-759.jpg" alt="" />
          <h3>Fatty Fish</h3>
          <p>Vitamin D & omega-3s.</p>
        </div>
        <div className="card">
          <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg" alt="" />
          <h3>Dairy</h3>
          <p>Calcium for bone health.</p>
        </div>
        <div className="card">
          <img src="https://www.tasteofhome.com/wp-content/uploads/2025/01/Pressure-Cooker-Hard-Boiled-Eggs_EXPS_TOHD24_258639_ChristineMa_3.jpg" alt="" />
          <h3>Eggs</h3>
          <p>B12, selenium & protein.</p>
        </div>
        <div className="card">
          <img src="https://5.imimg.com/data5/QD/IT/GLADMIN-43554645/green-mussels-shellfish.png" alt="" />
          <h3>Shellfish</h3>
          <p>Zinc, copper & selenium.</p>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfo9bk4CDUtvDd_sLYB6VyMPtdTvcOc0UHuQ&s" alt="" />
          <h3>Legumes</h3>
          <p>Folate, iron, magnesium.</p>
        </div>
        <div className="card">
          <img src="https://assets.clevelandclinic.org/transform/LargeFeatureImage/f66aad84-0eb3-40ea-9eab-1b62835e1c21/cruciferousVegetables-157439382-770x533-1_jpg" alt="" />
          <h3>Broccoli & Cruciferous Vegs</h3>
          <p>Vitamin K, C & fiber.</p>
        </div>
        <div className="card">
          <img src="https://japanesetaste.in/cdn/shop/articles/how-to-make-yaki-imo-baked-japanese-sweet-potato-japanese-taste.jpg?v=1737982163&width=5760" alt="" />
          <h3>Sweet Potatoes</h3>
          <p>Beta-carotene, vitamin C, potassium.</p>
        </div>
        <div className="card">
          <img src="https://m.media-amazon.com/images/I/61N7iqjDGcL._UF1000,1000_QL80_.jpg" alt="" />
          <h3>Avocado</h3>
          <p>Vitamin E, potassium, healthy fats.</p>
        </div>
        <div className="card">
          <img src="https://www.tayyarijeetki.in/hubfs/tjk-2024/articles-tjk/incorporating-whole-grains-into-kids%E2%80%99-meals/incorporating-whole-grains-into-kids-meals-feature-image.webp" alt="" />
          <h3>Whole Grains</h3>
          <p>B vitamins, fiber, magnesium.</p>
        </div>
      </div>
      <button className="back-btn" onClick={() => showSection('nutrition')}>Back</button>
    </section>
  );
}

export default VitaminsEx;
