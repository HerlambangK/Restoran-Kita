import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import PostReview from '../../utils/post-riview';
// import LikeButtonInitiator from '../../utils/like-button-presenter';
// import favoriterestoIdb from '../../data/resto-idb';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriterestoIdb from '../../data/resto-idb';

// import { createRestoDetailTemplate, createLikeButtonTemplate }
// from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>


          <div class="form-review">
            <form autocomplete="on">
              <div class="mb-3">
                <label for="name-input" class="form-label">Name</label>
                <input type="text" class="form-control" id="name-input" minlength="3" placeholder="Your name..." required>
              </div>

              <div class="mb-3">
                <label for="review-input" class="form-label">Review</label>
                <input type="text" class="form-control" id="review-input" minlength="3" placeholder="Your review..." required>
              </div>

              <button id="submit-review" type="submit" class="submit-btn">Submit Review</button>
            </form>
          </div>
   
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.getRestaurantDetail(url.id);
    const restoContainer = document.querySelector('#resto');
    // restoContainer.innerHTML = createRestoDetailTemplate(resto);

    // console.info(resto);
    // console.log(resto.restaurant);
    restoContainer.innerHTML += createRestoDetailTemplate(resto.restaurant);

    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonPresenter.init({
      resto,
      // favoriterestoIdb,
      favoriteResto: FavoriterestoIdb,
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      // resto: {
      //   id: resto.id,
      //   name: resto.name,
      //   description: resto.description,
      //   pictureId: resto.pictureId,
      //   rating: resto.rating,
      //   city: resto.city,
      // },
    });

    const btnSubmitReview = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#name-input');
    const reviewInput = document.querySelector('#review-input');

    btnSubmitReview.addEventListener('click', async (e) => {
      e.preventDefault();

      // POST review
      await PostReview(url, nameInput.value, reviewInput.value);

      // Send message to websocket server
      // sendDataToWebsocket({
      //   name: nameInput.value,
      //   review: reviewInput.value,
      // });

      // clear form input
      nameInput.value = '';
      reviewInput.value = '';
    });
  },
};

export default Detail;
