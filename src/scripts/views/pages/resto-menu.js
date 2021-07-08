import RestaurantSource from '../../data/resto-source';
import { createrestoItemTemplate } from '../templates/template-creator';

const NowMenu = {
  async render() {
    return `
    <div class="hero">
     <div class="hero-overlay">
           <div class="hero-inner">
              <h1 class="hero-title">
              Dapatkan makanan sehat dan lezat di resto kami !
              </h1>
              <p class="hero-tag">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus sit ipsam maiores debitis, tempora itaque? Sed minima
              similique vero doloribus voluptatum, odit nisi.
              </p>
            </div>
       </div>
  </div>


      <div class="content">
        <h2 class="content__heading">Now Menu in Resto</h2>
        <div id="restos" class="restos">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const data = await RestaurantSource.getRestaurantList();
    const restosContainer = document.querySelector('#restos');

    // console.log(data.restaurants);
    // loop
    data.restaurants.forEach((resto) => {
      restosContainer.innerHTML += createrestoItemTemplate(resto);
      // console.log(resto);
    });
  },
};

export default NowMenu;

// {/* <div class="hero">
//      <div class="hero-overlay">
//            <div class="hero-inner">
//               <h1 class="hero-title">
//               Dapatkan makanan sehat dan lezat di resto kami !
//               </h1>
//               <p class="hero-tag">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Doloribus sit ipsam maiores debitis, tempora itaque? Sed minima
//               similique vero doloribus voluptatum, odit nisi.
//               </p>
//             </div>
//        </div>
//   </div> */}
