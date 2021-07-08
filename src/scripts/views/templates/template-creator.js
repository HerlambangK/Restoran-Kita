import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
  <h3>Information</h3>
    <h4>Nama Resto</h4>
    <p>${resto.name}</p>
    <h4>Kota</h4>
    <p>${resto.city}</p>
    <h4 >Alamat Lengkap</h4>
    <p>${resto.address}</p>
    <h4>Kategory menu</h4>
      <ul class="detail-info">
          <li>${resto.categories
    .map(
      (category) => `
              <span class="category">${category.name}</span>
            `,
    )
    .join('')}
          </li>
      </ul>
    
    
    <h4>Rating </h4>
            <p><i class="fa fa-star" aria-hidden="true"></i><span>${resto.rating}</span></p>
     
  </div>
  <div class="resto__overview">
    <h3 class="overview">Overview</h3>
    <p>${resto.description}</p>
    <h4 class="menu-makanan">Menu Makanan</h4>
    
   <div class="detail-menu">
    <div class="row">
        <div class="column"> 
              <div class="detail-food">
              <h4>Food</h4>
              <ul>
                ${resto.menus.foods
    .map(
      (food, i) => `
                      <li><p>${i + 1}) ${food.name}</p></li>
                    `,
    )
    .join('')}
              <ul>
            </div>
        </div>
        <div class="column">
                    <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${resto.menus.drinks
    .map(
      (drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>
              `,
    )
    .join('')}
        <ul>
      </div>
        </div>
   </div>    
    </div> 
  <h3 class="title-review">Reviews</h3>

    <div class="detail-review">
    ${resto.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>

              <p class="review-date">${review.date}</p>
            </div>

            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
    )
    .join('')}
    </div>
  </div>
`;

const createrestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
     <img tabindex="0" class=" resto-item__header__poster lazyload" crossorigin="anonymous" src="./images/loading-300.jpg" alt="${
  resto.name
}" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" />
       
        <div class="resto-item__header__rating">
            <p><i class="fa fa-star" aria-hidden="true"></i><span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="card-content-title">
             <a href="${`/#/detail/${resto.id}`}">${resto.name}</a>
        </h3>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createrestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

//  <img class="resto-item__header__poster" alt="${resto.name}"
//             src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"></img>
