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

export const addClothingItem = (cardData, token) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(cardData),
  }).then(checkResponse);
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
