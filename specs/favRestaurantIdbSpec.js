/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';
import FavoriterestoIdb from '../src/scripts/data/resto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriterestoIdb.getAllResto()).forEach(async (resto) => {
      await FavoriterestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriterestoIdb);
});
