const COHORT_NAME = "2302-ACC-ET-WEB-PT-B";
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// Fetch method to get all data
export async function getAllPosts() {
  try {
    const res = await fetch(`${API_URL}/posts`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ post }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating new post: ", error);
  }
};

// Creating a user with this POST request
export async function registerUser(username, password) {
  try {
    const res = await fetch(`${API_URL}/users/register`, {
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
    const result = await res.json();
    alert(result.data.message);
    return result;
  } catch (error) {
    console.error("Unable to create a player!", error);
  }
}

// Delete a post using this function
export async function deletePost(postId) {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error DEL post: ", error);
  }
}

// Update a post using this function
export async function updatePost(postId, updatedData) {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ post: updatedData }),
    });
    const result = await response.json();
    // console.log("update response", result);
    return result;
  } catch (error) {
    console.error("Error updating post: ", error);
  }
}

// send a message to a post
export async function sendMessage(postId, message) {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ message }),
    });
    const result = await response.json();
    if (response.ok) {
      return { success: true, result: result.data.message };
    } else {
      return { success: false, result: result.error.message };
    }
  } catch (error) {
    console.error("Error sending message: ", error);
    return { success: false, result: error };
  }
}
