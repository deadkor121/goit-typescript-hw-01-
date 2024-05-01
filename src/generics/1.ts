import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
try {
    const response = await axios.get(url);

    return response.data;
} catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
}
}

interface User {
name: string;
email: string;
}

const user = await fetchData<User>("/api/users/1");

interface Post {
title: string;
content: string;
}

const posts = await fetchData<Post[]>("/api/posts");

console.log(user, posts);
