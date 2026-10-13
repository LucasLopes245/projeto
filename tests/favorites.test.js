import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { favoriteMoments, favoritesAlbum } from '../src/data/favorites.js';

test('Mural usa fotos próprias, identificadores únicos e a mesma ordem do lightbox', () => {
  assert.equal(favoriteMoments.length, 19);
  assert.equal(new Set(favoriteMoments.map(photo => photo.id)).size, 19);
  assert.equal(favoriteMoments.filter(photo => photo.featured).length, 5);
  assert.deepEqual(favoritesAlbum.images, favoriteMoments.map(photo => photo.image));
  for (const photo of favoriteMoments) {
    assert.ok(photo.image.startsWith('favorites/'));
    assert.ok(existsSync(new URL(`../public/${photo.image}`, import.meta.url)));
    assert.ok(Math.abs(photo.rotation) <= 2);
    assert.ok(photo.width > 0 && photo.height > 0);
    assert.ok(['small', 'medium', 'large'].includes(photo.size));
  }
});
