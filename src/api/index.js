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

// Log In function
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

// Create New Post using an object
export const createPost = async (post) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
      },
      body: JSON.stringify({ post })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating new post: ", error);
  }
};
