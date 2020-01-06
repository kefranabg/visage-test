<template>
  <div>
    <job-item
      v-for="(job, index) in jobs"
      :key="job.id"
      class="job-row"
      :index="index"
      :data="job"
      :is-favorite="isJobFavorite(job.id)"
      @removeFavorite="removeFavoriteById(job.id)"
      @addFavorite="addFavorite(job)"
    ></job-item>
  </div>
</template>

<script>
import JobItem from '@/components/JobItem'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: { JobItem },
  props: {
    jobs: Array
  },
  computed: mapGetters('favorites', ['isJobFavorite']),
  methods: mapMutations('favorites', ['addFavorite', 'removeFavoriteById'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.job-row {
  display: flex;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  justify-content: space-between;
}
</style>
