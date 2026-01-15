
🔳 QR Code Generator - Next.js
Um gerador de QR codes dinâmico e customizável, construído com Next.js e TypeScript. Crie QR codes personalizados com cores, logos e muito mais!



![qr-code](https://raw.githubusercontent.com/Felipecard/qr-code-generator/refs/heads/main/public/qr-image.png)

✨ Funcionalidades
🎨 Customização completa de cores - Altere a cor principal e de fundo

🏢 Logo personalizado - Adicione sua própria logo ao QR code

📏 Controle de tamanho - Ajuste o tamanho da logo integrada

📱 Preview em tempo real - Veja as alterações instantaneamente

⬇️ Download fácil - Baixe o QR code gerado em PNG

🚀 Performance otimizada - Construído com Next.js App Router

🚀 Como Usar
1. Pré-requisitos
Node.js 18+ instalado

npm, yarn, pnpm ou bun

2. Instalação
bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta do projeto
cd qr-code-generator

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
3. Desenvolvimento
bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
Acesse http://localhost:3000 no seu navegador.

4. Personalize seu QR Code
Cole seu link no campo de entrada

Escolha as cores - principal e de fundo

Faça upload do logo (opcional)

Ajuste o tamanho da logo

Clique em "Baixar QR Code" para salvar

🛠️ Tecnologias
Next.js 14 - Framework React com App Router

TypeScript - Tipagem estática

qrcode.react - Geração de QR codes

React Icons - Ícones do FaUpload

CSS Modules - Estilização

📁 Estrutura do Projeto
text
qr-code-generator/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout base
│   └── globals.css       # Estilos globais
├── public/               # Arquivos estáticos
├── package.json
└── README.md
🎯 Componentes Principais
QRCodeCanvas
Componente principal que renderiza o QR code com todas as customizações:

value: Link/Texto do QR code

bgColor: Cor de fundo

fgColor: Cor principal

imageSettings: Configurações da logo

Customização
Cores: Inputs type="color" para seleção visual

Logo: Upload de imagem com FileReader

Tamanho: Dropdown com opções predefinidas

🌐 Deploy
Vercel (Recomendado)
https://vercel.com/button

bash
# Build para produção
npm run build

# Iniciar produção
npm start
📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🤝 Contribuindo
Contribuições são sempre bem-vindas! Siga estes passos:

Faça um Fork do projeto

Crie uma Branch (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a Branch (git push origin feature/AmazingFeature)

Abra um Pull Request

👥 Autores
Seu Nome - @seuusuario

⭐ Destaques
✅ 100% responsivo

✅ Tipagem TypeScript completa

✅ Código limpo e organizado

✅ Fácil de personalizar

✅ Preview em tempo real

🙏 Agradecimentos
Next.js pelo framework incrível

qrcode.react pela biblioteca de QR codes

React Icons pelos ícones

<p align="center"> Feito com ❤️ usando Next.js e TypeScript </p><p align="center"> <a href="#-qr-code-generator---nextjs">Voltar ao topo</a> </p>
