export function getItemsApi(search) {
    const url = `http://localhost:5000/api/items?q=${search}`;
  
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
  const url = `http://localhost:5000/api/items/${id}`;

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