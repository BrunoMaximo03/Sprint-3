function handleSubmit(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;

    const data = {
        nome: nome,
        usuario: usuario,
        senha: senhaA
    };

    localStorage.setItem('db.json', JSON.stringify(data));
    
    let db = {
        "usuarios": [
            {
                "id": 1,
                "nome": "Nome1",
                "usuario": "cliente",
                "senha": "senhaAleatoria1"
            },
            {
                "id": 2,
                "nome": "Nome2",
                "usuario": "admin",
                "senha": "senhaAleatoria2"
            },
            {
                "id": 3,
                "nome": "Nome3",
                "usuario": "cliente",
                "senha": "senhaAleatoria3"
            },
            {
                "id": 4,
                "nome": "Nome4",
                "usuario": "admin",
                "senha": "senhaAleatoria4"
            },
            {
                "id": 5,
                "nome": "Nome5",
                "usuario": "cliente",
                "senha": "senhaAleatoria5"
            },
            {
                "id": 6,
                "nome": "Nome6",
                "usuario": "admin",
                "senha": "senhaAleatoria6"
            },
            {
                "id": 7,
                "nome": "Nome7",
                "usuario": "cliente",
                "senha": "senhaAleatoria7"
            },
            {
                "id": 8,
                "nome": "Nome8",
                "usuario": "admin",
                "senha": "senhaAleatoria8"
            },
            {
                "id": 9,
                "nome": "Nome9",
                "usuario": "cliente",
                "senha": "senhaAleatoria9"
            },
            {
                "id": 10,
                "nome": "Nome10",
                "usuario": "admin",
                "senha": "senhaAleatoria10"
            }
        ]
    }

    let usuarios = db.usuarios;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario && usuarios[i].senha === senha) {
            if (usuario === 'cliente') {
                window.location.href = 'cliente.html';
            } else if (usuario === 'admin') {
                window.location.href = 'pagina_admin.html';
            }
            return;
        }
    }

    alert('Perfil adicionado!');
}
