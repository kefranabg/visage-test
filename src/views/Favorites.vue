<template>
  <div class="page-wrapper">
    <h1 class="favorites-page-title">Favorites Jobs ❤️</h1>
    <p class="infos-label">
      <b v-if="favorites && !favorites.length">No favorites yet 😕</b>
      <b v-if="favorites && favorites.length"
        >{{ favorites.length }} favorites 👍</b
      >
    </p>
    <job-list class="favorites-list" :jobs="favorites"></job-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import JobList from '@/components/JobList'

export default {
  head() {
    return {
      title: {
        inner: 'Favorites'
      },
      meta: [
        {
          name: 'description',
          content: `visage favorites page`,
          id: 'desc'
        }
      ]
    }
  },
  components: { JobList },
  computed: mapState('favorites', ['favorites'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.favorites-page-title {
  text-align: center;
}

.favorites-list {
  margin: 20px 0;
}
</style>
