const readline = require("readline-sync");

let urlPostData = "https://jsonplaceholder.typicode.com/posts";
let userId = readline.question("input user id: ");
let postId = readline.question("input post id: ");

async function run() {
  let post = await sendRequestPosts();
  logInfoDataPost(post);
}
run();

async function sendRequestPosts() {
  let res = await fetch(urlPostData)
  return res.json();
}

function logInfoDataPost(posts) {
  let postsByUser = getPostsByUserId(posts);
  console.log(`all post of user id ${userId}`);
  console.log(printPostBody(postsByUser));
  console.log("=====================");
  console.log(`all post by user id ${userId} and post id ${postId}`);
  let postsById = getPostsById(postsByUser);
  console.log(printPostBody(postsById));
}

function printPostBody(posts) {
  for(post of posts) {
    console.log(`- post body content: ${post.body}`);
  }
}

function getPostsByUserId(posts) {
  return posts.filter(filterPostByUserId);
}
function filterPostByUserId(post) {
  return post.userId === parseInt(userId);
}
function getPostsById(posts) {
  return posts.filter(filterPostById);
}
function filterPostById(post) {
  return post.id === parseInt(postId);
}
