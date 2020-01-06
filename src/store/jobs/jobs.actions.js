import JobsService from '@/services/jobs'

export default {
  /**
   * Fetch jobs
   */
  fetchJobs: async ({ commit, state }) => {
    commit('setJobs', null)
    const jobs = await JobsService(state.locationInput)
    commit('setJobs', jobs)
  }
}
