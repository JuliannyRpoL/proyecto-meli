const { REACT_APP_API_URL } = process.env

export function getItemsApi(search) {
  let url;

  if(!search) {
    url = `${REACT_APP_API_URL}/items`;
  } else {
    url = `${REACT_APP_API_URL}/items?q=${search}`;
  }
  
  const params = {
    method: "GET",
    redirect: 'follow'
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: "No se pudieron obtener resultados" };
    })
    .catch((err) => {
      return err;
    });
}

export function getItemDetailsApi(id) {
  const url = `${REACT_APP_API_URL}/items/${id}`;

  const params = {
    method: "GET",
    redirect: 'follow'
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return { message: "No se pudieron obtener resultados" };
    })
    .catch((err) => {
      return err;
    });
}