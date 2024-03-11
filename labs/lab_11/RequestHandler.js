// RequestHandler.js
const Post = require('./Post');
let urlPostData = "https://jsonplaceholder.typicode.com/posts";
class RequestHandler {

    async printTargetPost(userId, postId) {
        let postByUserId = await this._getAllPosts(userId);
        return this._mapResultToPost(postByUserId.filter(p=>p.id === parseInt(postId)))
    }

    async printAllPosts(userId) {
        return this._mapResultToPost(await this._getAllPosts(userId));
    }

    async _getAllPosts(userId) {
        let res = await fetch(urlPostData)
        let postAll = await res.json();
        return this._getPostsByUserId(postAll, userId);
    }

    _getPostsByUserId(posts, userId) {
        return posts.filter(p=>p.userId === parseInt(userId));
    }

    _mapResultToPost(results){
        let posts = [];
        for(let result of results) {
            posts.push(new Post(result.userId, result.id, result.title, result.body));
        }
        return posts;
    }

    
    printPostBody(posts) {
        for(let post of posts) {
            console.log(`- post body content: ${post._body}`);
        }
    }
}
module.exports = RequestHandler;