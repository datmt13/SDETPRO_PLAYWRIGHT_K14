// TestPostModel.js
const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11(){
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object
    let requestHandler = new RequestHandler();
    console.log("post target");
     const post = await requestHandler.printTargetPost(userId, postId);
     requestHandler.printPostBody(post)
     console.log("==========================");
     console.log("all post");
     const allPost = await requestHandler.printAllPosts(userId);
     requestHandler.printPostBody(allPost)
}