//GET request
async function fetchToDos() {

    //   fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then((res) => {
    //     return res.json(); //.json again return another promise. so use another then below line
    //   }).then((data) => {
    //     tasks = data.slice(0,10); //get only 10 items
    //     renderList();
    //   }).catch((error)=> {
    //     console.log("error",error);
    //   });
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await response.json();
        data = data.slice(0, 10); //get only 10 items
        console.log("get response",data);
    } catch (error) {
        console.log(error);
    }

}

fetchToDos();
//POST request  
async function fetchPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await res.json();
        posts = posts.slice(0, 10);
        //   console.log(posts);
        for (const post of posts) {
            console.log(`Title: ${post.title}\nBody: ${post.body}`);
        }
    } catch (e) {
        console.log(e);
    }
}

fetchPosts();