import { find } from 'lodash'

export default {
  /**
   * Check if job is favorite
   */
  isJobFavorite: state => jobId =>
    !!find(state.favorites, favorite => favorite.id === jobId)
}
