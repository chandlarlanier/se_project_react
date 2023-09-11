const baseUrl = "http://localhost:3001";

export const getClothingItems = () => {
  const clothingItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return clothingItems;
};

export const addClothingItem = (data) => {
  const newClothingItem = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return newClothingItem;
};

export const deleteClothingItem = (cardId) => {
  const deletedClothingItem = fetch(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return deletedClothingItem;
};
