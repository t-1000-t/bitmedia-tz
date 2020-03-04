const usersFetch = () => {
  return fetch("http://localhost:5000/api/pages")
    .then(res => res.json())
    .then(data => data.pages);
};

export default { usersFetch };
