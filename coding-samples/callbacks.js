// 3) convert method using callbacks to method using promises (without nodejs utils)

const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'},
    {title: 'post three', body: 'this is post three'},
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post),
            callback()
    }, 2000);
}

createPost({title: 'post four', body: 'this is post four'}, getPosts);
