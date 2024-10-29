<h1>Sistema de Gestão de Colaboradores</h1>

Este projeto é uma aplicação React desenvolvida para facilitar a gestão de colaboradores em diferentes equipes de uma empresa. A aplicação permite cadastrar colaboradores com informações como nome, cargo, imagem e equipe correspondente. Cada colaborador registrado é exibido em um card personalizado na seção da equipe selecionada.

Funcionalidades Principais
Cadastro de Colaboradores: Criação de cards para cada colaborador com dados essenciais (nome, cargo, equipe, e imagem).
Organização por Equipe: Exibição dos colaboradores por equipes como Administrativo, Financeiro, Marketing, Recursos Humanos, e Suporte.
Personalização Visual: Cada equipe possui uma cor primária e secundária, utilizadas para estilizar o layout dos cards.
Upload de Imagem: Carregamento de imagens para cada colaborador, exibindo uma visualização prévia.
Tecnologias Utilizadas
React: Biblioteca JavaScript para construção da interface de usuário.
CSS: Estilização personalizada de componentes para uma UI atraente e intuitiva.
Hooks do React: Uso de useState para controle de estado dos colaboradores e dados do formulário.
Estrutura do Projeto
O projeto está organizado em componentes funcionais para garantir a modularidade e reusabilidade do código:

App.js: Componente principal, gerencia as equipes e colaboradores.
Formulario.js: Componente para cadastro de novos colaboradores.
CardsEquipe.js: Exibe colaboradores filtrados por equipe em cards personalizados.
Colaborador.js: Renderiza o card de cada colaborador.
CampoTexto.js e DropDown.js: Componentes de formulário reutilizáveis para entrada de texto e seleção de equipe.

Você pode ver esse projeto funcionando aqui: https://staff-react-9zsvseisq-claytons-projects-66cf100c.vercel.app
