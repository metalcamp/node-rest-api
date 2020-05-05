function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;
        }, 2000);

        if (!error) {
            resolve();
        } else {
            reject('Something went wrong');
        }
    });
}

createPost({title: 'post four', body: 'this is post four'})
    .then(getPosts)
    .catch(err => console.log(err));
