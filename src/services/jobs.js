const API_URL = 'https://github-jobs-proxy.appspot.com/positions'

export default location =>
  fetch(`${API_URL}?description=javascript&location=${location}`).then(res =>
    res.json()
  )
