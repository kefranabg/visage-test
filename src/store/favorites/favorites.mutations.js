export default {
  /* Favorites */
  addFavorite: (state, favorite) => state.favorites.push(favorite),
  removeFavoriteById: (state, favoriteId) => {
    const index = state.favorites.findIndex(
      favorite => favorite.id === favoriteId
    )
    state.favorites.splice(index, 1)
  }
}
