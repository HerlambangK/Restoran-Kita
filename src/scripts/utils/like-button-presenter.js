// import FavoriterestoIdb from '../data/resto-idb';
// import FavoriterestoIdb from '../data/resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, resto, favoriteResto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = resto.restaurant;
    this._favoriteRestoIdb = favoriteResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    // get resto in indexed db
    const restaurant = await this._favoriteRestoIdb.getResto(id);
    // const restaurant = await FavoriterestoIdb.getResto(id);

    if (restaurant) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  // async _isrestoExist(id) {
  //   const resto = await this._favoriteRestoIdb.getResto(id);
  //   return !!resto; // apa ini maksudnya ?
  // },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await this._favoriteRestoIdb.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await this._favoriteRestoIdb.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
