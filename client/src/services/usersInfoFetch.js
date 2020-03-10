const usersInfo = () => {
  return fetch("http://localhost:5000/api/users?id=all")
    .then(res => res.json())
    .then(data => data);
};

export default { usersInfo };
