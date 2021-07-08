/* eslint-disable no-undef */

const assert = require('assert');

Feature('Favorite Resto');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
  // root URL : http:localhost:9000
  I.amOnPage('/#/like');
});

const emptyFavoriteRestoText = 'Empty favorite Resto. Put one, by clicking heart button in the detail page.';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#like');
  I.see(emptyFavoriteRestoText, '#like');
  I.amOnPage('/');
  // pause();
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#like');

  // URL: /
  I.amOnPage('/');
  I.seeElement('.resto-item__content a');
  const firstRestoCard = locate('.resto-item__content a').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.wait(20);
  // I.waitForElement('.resto__overview');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/like
  I.amOnPage('/#/like');
  I.seeElement('.card-content-title');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');

  assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#like');

  // URL: /
  I.amOnPage('/');
  I.seeElement('.resto-item__content a');
  const firstRestoCard = locate('.resto-item__content a').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // URL: /resto/:id
  I.wait(20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/like
  I.amOnPage('/#/like');
  I.seeElement('.card-content-title');
  const likedCardTitle = await I.grabTextFrom('.card-content-title a');

  assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan

  I.seeElement('.resto-item');
  // const likedCardTitle = await I.grabTextFrom('.card-content-title a');
  // I.waitForElement('.resto__overview');
  // I.wait(20);
  I.click(likedCardTitle);
  // pause();
  // URL: /resto/:id
  I.wait(15);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/like');
  I.seeElement('#like');
  I.dontSeeElement('.resto-item');
  I.dontSeeElement('.card-content-title');
});
