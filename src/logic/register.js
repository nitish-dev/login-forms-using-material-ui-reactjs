export default function register(users){
    let data = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];;
    
    //Validation if user already registerd
    let duplicateUser = data.filter(user => { return user.userName === users.userName; });
    if (duplicateUser) {
        console.log('Username "' + users.userName + '" is already taken');
        return;
    }
    data.push(users);
    if (localStorage) {
        localStorage.setItem('user', JSON.stringify(data));
    }
}

