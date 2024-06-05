## HISTORIA 1

Eu como administrador do jogo, quero ter a estatística por jogo, do total de mortes, de mortes por causa e de mortes causadas pelo <world> para entender dificuldade dos jogadores.


### Executar o projeto

O projeto ainda não esta com docker :(, mas pode ser executado com os seguintes comandos.

```
npm install
```
```
npm run dev
```

### Routa

```
curl --location 'http://localhost:5050/api/parser'
```

### Estrutura de retorno

````
{
    "game_11": {
        "hostName": "Code Miner Server",
        "version": "ioq3 1.36 linux-x86_64 Apr 12 2009",
        "kills": 20,
        "Players": {
            "Dono da Bola": {
                "id": "3",
                "name": "Dono da Bola",
                "kills": {
                    "wold": 3,
                    "player": 2
                }
            },
            "Isgalamido": {
                "id": "2",
                "name": "Isgalamido",
                "kills": {
                    "wold": 2,
                    "player": 2
                }
            },
            "Zeh": {
                "id": "4",
                "name": "Zeh",
                "kills": {
                    "wold": 0,
                    "player": 2
                }
            },
            "Oootsimo": {
                "id": "5",
                "name": "Oootsimo",
                "kills": {
                    "wold": 0,
                    "player": 1
                }
            },
            "Chessus": {
                "id": "6",
                "name": "Chessus",
                "kills": {
                    "wold": 0,
                    "player": 3
                }
            },
            "Assasinu Credi": {
                "id": "7",
                "name": "Assasinu Credi",
                "kills": {
                    "wold": 3,
                    "player": 1
                }
            },
            "Mal": {
                "id": "8",
                "name": "Mal",
                "kills": {
                    "wold": 0,
                    "player": 1
                }
            }
        }
    }
}
````

### Melhorias

1. Este projeto possui testes somente da estrutura, CORS, body-parser, content-type.
2. Utilizar o Docker
3. Adicionar uma rota para buscar por game

