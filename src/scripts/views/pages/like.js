import FavoriterestoIdb from '../../data/resto-idb';
import { createrestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
                <div class="content">
                <h2 class="content__heading">Your Liked resto</h2>
                <div id="like" class="restos">
            
                </div>
                </div>
            `;
  },

  async afterRender() {
    const restos = await FavoriterestoIdb.getAllResto();
    const restosContainer = document.querySelector('#like');

    // if data empty
    if (restos.length === 0) {
      restosContainer.innerHTML = `
                  <div class="content_kosong"> Empty favorite Resto. Put one, by clicking heart button in the detail page.</div> 
        
            `;
    }

    // display all fav resto
    console.log(restos);
    restos.forEach((resto) => {
      restosContainer.innerHTML += createrestoItemTemplate(resto);
    });
  },
};

export default Like;
