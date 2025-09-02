# Lumina X 2025

Projeto web construído com **React**, **TypeScript** e **Vite**.  
O objetivo é fornecer uma base organizada e escalável para aplicações modernas, utilizando componentes reutilizáveis e boas práticas de desenvolvimento.

---

## 📖 Visão Geral

Esta aplicação utiliza tecnologias atuais do ecossistema JavaScript para garantir desempenho, acessibilidade e manutenção simples.  
A estrutura de diretórios segue um padrão claro e todos os arquivos são tipados com **TypeScript**.

---

## 🛠 Tecnologias Principais

- [React](https://reactjs.org/) 18  
- [TypeScript](https://www.typescriptlang.org/) 5  
- [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Radix UI](https://www.radix-ui.com/) e [shadcn/ui](https://ui.shadcn.com/)  
- React Router DOM  
- React Hook Form e Zod  
- React Query  

---

## 📂 Estrutura do Projeto

```bash
src/
 ├─ components/        # Componentes reutilizáveis e seções da página
 ├─ hooks/             # Hooks personalizados
 ├─ lib/               # Funções utilitárias e configurações
 ├─ pages/             # Páginas/rotas da aplicação
 └─ main.tsx           # Ponto de entrada
```

---

## ✅ Boas Práticas Adotadas

- Tipagem estática com **TypeScript** para evitar erros em tempo de execução.  
- Componentização e organização do código em pastas como `components`, `hooks` e `pages`.  
- Estilização com **Tailwind CSS** e `tailwind-merge` para evitar conflitos de classes.  
- Padrões de código garantidos pelo **ESLint** (`npm run lint`).  
- Componentes acessíveis utilizando **Radix UI** e **shadcn/ui**.  
- Uso de **React Query** e **React Hook Form** para gerenciamento de estado e formulários.  
- Commits descritivos e revisões de código antes de integrar novas funcionalidades.  

---

## 🚀 Como Começar

1. Certifique-se de ter [Node.js](https://nodejs.org/) 18+ instalado.  
2. Instale as dependências:  

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:  

   ```bash
   npm run dev
   ```

---

## 📜 Scripts Disponíveis

| Comando            | Ação                                       |
|--------------------|--------------------------------------------|
| `npm run dev`      | Executa o servidor de desenvolvimento.     |
| `npm run build`    | Gera uma build otimizada para produção.    |
| `npm run lint`     | Analisa o código em busca de problemas.    |
| `npm run preview`  | Visualiza a build localmente.              |

---

## 🤝 Contribuições

- Execute `npm run lint` e `npm run build` antes de enviar um pull request.  
- Siga as boas práticas descritas neste documento.  

---

## 📄 Licença

Este projeto não possui licença definida. Utilize-o de acordo com as políticas da organização.

