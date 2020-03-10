const usersStats = () => {
  return fetch("http://localhost:5000/api/users_statistic?id=all")
    .then(res => res.json())
    .then(data => data);
};

export default { usersStats };
