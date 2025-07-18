# case-central-atendimento

Case Central de Atendimento

Este projeto simula uma solução em Node.js para análise de chamadas de atendimento ao cliente utilizando arquitetura baseada em serviços AWS.  

---

## Tecnologias usadas

| Tecnologia         | Papel no projeto (simulado)                          |
|--------------------|------------------------------------------------------|
| Node.js            | Linguagem principal                                  |
| Amazon S3          | Origem do arquivo de áudio (evento simulado)         |
| AWS Lambda         | Orquestrador (lambda-handler.js)                     |
| Amazon Transcribe  | Transcrição de áudio (simulado)                      |
| Amazon Comprehend  | Análise de sentimento e tópicos (simulado)           |
| Amazon RDS         | Banco de dados relacional para persistência (mock)   |

---

## Estrutura do Projeto

case-central-atendimento/
├── .idea
├── src/
│   ├── lambda-handler.js              # Orquestrador do pipeline
│   ├── transcribe-service.js          # Mock do Amazon Transcribe
│   ├── comprehend-service.js          # Mock do Amazon Comprehend
│   └── rds-service.js                 # Mock do Amazon RDS (PostgreSQL)
├── Case - Desenho da Arquitetura.png  # Desenho de Arquitetura do cenario proposto
├── event.json                         # Evento simulado de trigger do S3
├── .env.example                       # Variáveis de ambiente de exemplo (documentação)
├── package.json                       # Dependências e metadata do projeto
└── README.md                          # Este arquivo
