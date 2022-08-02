interface UserLogin {
    id : number;
    foto: string| null;
    nome: string;
    usuario: string ;
    senha: string;
    token?: string| null
}

export default UserLogin