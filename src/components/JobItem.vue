<template>
  <div class="job-item">
    <ul>
      <img class="job-company-logo" :src="data.company_logo" />
      <li>
        Company: {{ data.company }} (<a
          rel="noopener"
          target="_blank"
          :href="data.company_url"
          >{{ data.company_url }}</a
        >)
      </li>
      <li>Last update: {{ data.created_at }}</li>
      <li>Location: {{ data.location }}</li>
      <li>Job position: {{ data.title }}</li>
    </ul>
    <div
      class="job-item-favorite-btn"
      @click="isFavorite ? $emit('removeFavorite') : $emit('addFavorite')"
    >
      {{ isFavorite ? 'Remove from favorites ❤️' : 'Add to favorites 🤍' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    isFavorite: Boolean,
    index: Number
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.job-item {
  width: 100%;
  display: flex;
  flex-direction: column;

  .job-item-favorite-btn {
    cursor: pointer;
    text-align: center;
  }

  .job-company-logo {
    max-height: 3rem;
    margin-bottom: 1rem;
  }
}
</style>
