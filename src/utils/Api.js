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

export const likeClothingItem = (itemId, token) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      'Content-Type': "application/json",
      authorization: `Bearer ${token}`
    }
  }).then((res) => {
    console.log(res.json());
  })
}

export const unlikeClothingItem = (itemId, token) => {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      'Content-Type': "application/json",
      authorization: `Bearer ${token}`
    }
  }).then((res)=> {
    checkResponse(res);
  })
}
