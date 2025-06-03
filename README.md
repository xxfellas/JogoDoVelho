🎯 Funcionalidades
Jogo multiplayer em tempo real (1x1)

Partidas iniciadas automaticamente ao conectar dois jogadores

Interface simples e intuitiva

Alternância de vez com controle de turno

Comunicação entre jogadores via WebSocket

____________________________________________________________________________________________________________________________________________________________________________________

🧠 Como Funciona
O servidor aguarda conexões via Socket.IO.

O primeiro jogador fica em espera.

Quando o segundo jogador entra, o jogo começa em uma "sala".

Cada jogador pode fazer uma jogada por vez.

As jogadas são transmitidas em tempo real para o oponente.

____________________________________________________________________________________________________________________________________________________________________________________

📁 Estrutura do Projeto
jogo-do-velho/
├── public/
│   └── index.html        # Interface do jogo
├── server.js             # Servidor Node.js + WebSocket
├── package.json
└── README.md

____________________________________________________________________________________________________________________________________________________________________________________

📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir.

____________________________________________________________________________________________________________________________________________________________________________________

✨ Autor
Desenvolvido por [Seu Nome]
📧 Contato: seuemail@exemplo.com
