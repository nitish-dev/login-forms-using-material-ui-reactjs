export default function register(users){
    let data = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];;
    if()
    data.push(users);
    if (localStorage) {
        localStorage.setItem('user', JSON.stringify(data));
    }
}

