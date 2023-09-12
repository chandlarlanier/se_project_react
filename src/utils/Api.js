const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

export const getClothingItems = () => {
  const clothingItems = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then(checkResponse);
  return clothingItems;
};

export const addClothingItem = (data) => {
  const newClothingItem = fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkResponse);
  return newClothingItem;
};

export const deleteClothingItem = (cardId) => {
  const deletedClothingItem = fetch(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then(checkResponse);
  return deletedClothingItem;
};
