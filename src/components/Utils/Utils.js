export const getDataFormLocalstorage = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : [];
};
