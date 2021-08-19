interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Guga',
        email: 'guga@guga.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}