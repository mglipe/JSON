import api from "../api";


export async function login(login, senha){

    const listUsers = await fetchUsers();
    const user = listUsers.find(element => element.login === senha && element.email === login);
    return user;

    
  };




export async function fetchUsers(){
    try{
        const result = await api.get('/users');
        return result.data;

    }catch(err){
        console.log(err);
        return [];
    }
}


export async function createUser(user, senha){
    try{
        await api.post('/users',{
            login: senha,
            email: user,
        });
    return 'sucess';
    }catch(err){
        console.log(err);
        return 'invalid';
    }
    

}