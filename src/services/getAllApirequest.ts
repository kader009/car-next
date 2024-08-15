export const getData = async () => {
  const response = await fetch(`http://localhost:3000/services/api/get-all`);
  const services = response.json();
  return services;
};

export const getSingleData = async (id:string) => {
  const response = await fetch(`http://localhost:3000/services/api/${id}`);
  const service = response.json();
  return service;
};