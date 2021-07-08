/* eslint-disable no-undef */
const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Review Resto');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  const reviewText = 'Automated RIPiew';

  // URL: /
  I.seeElement('.card-content-title a');
  I.click(locate('.card-content-title a').first());

  // URL: /resto/:id
  I.wait(15);
  I.waitForElement('.resto__overview');
  I.seeElement('.form-review');
  I.fillField('#name-input', 'E2E testing');
  I.fillField('#review-input', reviewText);
  I.click('#submit-review');

  // after submit review
  // I.refreshPage();
  I.waitForResponse('https://restaurant-api.dicoding.dev/review');
  const lastReview = locate('.review-body').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
