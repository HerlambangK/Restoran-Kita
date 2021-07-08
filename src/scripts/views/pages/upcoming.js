import RestaurantSource from '../../data/resto-source';
import { createrestoItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Upcoming in Resto</h2>
        <div id="restos" class="restos">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await RestaurantSource.getRestaurantList();
    const restosContainer = document.querySelector('#restos');
    restos.restaurants.forEach((resto) => {
      restosContainer.innerHTML += createrestoItemTemplate(resto);
    });
  },
};

export default Upcoming;
