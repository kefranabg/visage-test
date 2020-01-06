<template>
  <div class="location-action-bar">
    <input
      placeholder="Enter a location"
      class="location-name-input"
      type="text"
      :value="location"
      @input="
        setLocationInput($event.target.value)
        debouncedSearch()
      "
    />
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import debounce from 'lodash/debounce'

export default {
  computed: mapState('jobs', ['location']),
  methods: {
    ...mapMutations('jobs', ['setLocationInput']),
    ...mapActions('jobs', ['fetchJobs']),
    // eslint-disable-next-line func-names
    debouncedSearch: debounce(function() {
      this.fetchJobs()
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.location-action-bar {
  display: flex;
  align-items: center;
  justify-content: center;

  .location-name-input {
    padding-left: 5px;
    height: 30px;
    width: 150px;
    outline: none;
    font: inherit;
    border: 1px solid;
    border-color: #2c3e50;
    border-radius: 3px;
  }

  .search-location-btn {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    border-color: #2c3e50;

    &:hover {
      color: $vue-color;
      border-color: $vue-color;
    }
  }
}
</style>
