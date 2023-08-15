const COHORT_NAME = "2302-ACC-ET-WEB-PT-B";
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// Fetch method to get all data
export async function getAllPosts() {
  try {
    const res = await fetch(`${API_URL}/posts`);
    const result = await res.json();
    const posts = result.data.posts;
    return posts;
  } catch (error) {
    console.error(`Unable to retrieve posts!`, error);
  }
}
export async function loginUser(username, password) {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    const result = await response.json();

    if (result && result.data && result.data.token) {
      return result.data.token;
    } else {
      throw new Error(result.error.message || "Unable to login.");
    }
  } catch (error) {
    console.error(`Login failed!`, error);
    throw error;
  }
}

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const result = await response.json();
    console.log(result.data.posts);
    return result.data.posts;
  } catch (error) {
    console.error("Error/GET Posts", error);
  }
};

export const makePost = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
      body: JSON.stringify({
        post: {
          title: "My favorite stuffed animal",
          description:
            "This is a pooh doll from 1973. It has been carefully taken care of since I first got it",
          price: "$480.00",
          willDeliver: true,
        },
      }),
    });
    const result = await response.json();
    console.log(result.data.post);
    return result.data.post;
  } catch (error) {
    console.error("Error/POST Posts", error);
  }
};

export const updatePost = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
      body: JSON.stringify({
        post: {
          title: "My favorite stuffed animal",
          description:
            "This is a pooh doll from 1973. It has been carefully taken care of since I first got it",
          price: "$480.00",
          location: "New York,NY",
          willDeliver: true,
        },
      }),
    });
    const result = await response.json();
    console.log(result.data.post);
    return result.data.post;
  } catch (error) {
    console.error(err);
  }
};

export const deletPost = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
    });
    const result = await response.json();
    console.log();
    return result;
  } catch (error) {
    console.error(err);
  }
};
