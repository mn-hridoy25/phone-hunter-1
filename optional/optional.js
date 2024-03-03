// const loadFunction = () => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }


const loadFunction = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    console.log(data);
}
