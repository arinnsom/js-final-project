const getProductsInfo = () =>
  fetch("./data/data.json").then((response) => {
    return response.json();
  });

export { getProductsInfo };
