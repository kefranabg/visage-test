<template>
  <div class="page-wrapper">
    <h1 class="jobs-page-title">Javascript Jobs 🎓</h1>
    <location-search-bar v-if="networkOnLine"></location-search-bar>
    <p class="infos-label">
      <b v-if="jobsFetchPending">🚧Fetching results</b>
      <b v-if="jobs && !jobs.length">No job found for this location 😕</b>
      <b v-if="jobs && jobs.length">{{ jobs.length }} jobs found 👍</b>
    </p>
    <job-list class="jobs-list" :jobs="jobs"></job-list>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import JobList from '@/components/JobList'
import LocationSearchBar from '@/components/LocationSearchBar'

export default {
  head() {
    return {
      title: {
        inner: 'Jobs'
      },
      meta: [
        {
          name: 'description',
          content: `visage jobs page`,
          id: 'desc'
        }
      ]
    }
  },
  components: { JobList, LocationSearchBar },
  computed: {
    ...mapState('jobs', ['jobs']),
    ...mapGetters('jobs', ['jobsFetchPending']),
    ...mapState('app', ['networkOnLine'])
  },
  mounted() {
    this.fetchJobs()
  },
  methods: mapActions('jobs', ['fetchJobs'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.jobs-page-title {
  text-align: center;
}

.jobs-list {
  margin: 20px 0;
}
</style>
