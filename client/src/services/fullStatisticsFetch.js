const statisticFetch = num_page => {
  if (num_page === Number || num_page !== 0) {
    return fetch(`http://localhost:5000/api/statistics?pega_num=${num_page}`)
      .then(res => res.json())
      .then(data => data.statistics);
  } else {
    return fetch("http://localhost:5000/api/statistics")
      .then(res => res.json())
      .then(data => data.statistics);
  }
};

export default { statisticFetch };
