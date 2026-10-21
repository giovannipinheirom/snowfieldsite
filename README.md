# Snowfield Languages - Website Institucional & Comercial (MVP)

Este é o projeto completo do MVP da **Snowfield Languages**, uma escola de idiomas com aulas divertidas e personalizadas ativa desde 2019, atendendo alunos de 4 a 90 anos de qualquer escolaridade, com aulas online em todo o Brasil e no exterior, e aulas presenciais em condomínios e empresas de São Bernardo do Campo (SP).

---

## 🚀 Tecnologias Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4 com tokens de design (`globals.css`)
- **Ícones**: Lucide React + Vetores SVG customizados
- **Formulários & Validação**: React Hook Form + Zod
- **Envio Transacional de Leads**: Resend API (com fallback de simulação em console para desenvolvimento)
- **SEO & Metadados**: Schema.org JSON-LD (`EducationalOrganization`, `Course`, `FAQPage`), OpenGraph, `sitemap.xml` e `robots.txt` dinâmicos
- **Privacidade & Conformidade**: Banner de cookies LGPD e canal de DPO

---

## 📁 Estrutura de Pastas e Conteúdo Editável

Todo o conteúdo editável da escola foi desacoplado dos componentes visuais e centralizado em `src/content`:

```
src/
├── content/
│   ├── site.ts               # Fonte única da verdade: contatos, horário, URLs, banner sazonal
│   ├── idiomas.ts            # Grade e dados de cada idioma (níveis, teasers, flashcards)
│   ├── cursos.ts             # Catálogo de cursos, preços, checkoutUrls e formatos
│   ├── depoimentos.ts        # Depoimentos reais de alunos e responsáveis
│   ├── faq.ts                # Perguntas e respostas frequentes (FAQ)
│   └── questoes/
│       └── ingles.ts         # 28 questões progressivas A1-C1 do teste de nível
├── app/
│   ├── page.tsx              # Home com hero, seletor de público e seções
│   ├── metodologia/          # Metodologia pedagógica e jornada
│   ├── sobre/                # História desde 2019 e perfil dos professores
│   ├── idiomas/[idioma]/     # Páginas dinâmicas por idioma com mini-interação
│   ├── ingles-regular/       # Programa de Inglês Regular
│   ├── aulas-em-condominios/ # Página e formulário de condomínios (SBC)
│   ├── aulas-corporativas/   # Página e formulário in-company B2B
│   ├── intensivo-para-viagens/# Curso prático para viajantes
│   ├── preparatorios/        # Seções de exames (TOEFL, Cambridge, Duolingo)
│   ├── cursos/               # Catálogo e páginas de checkout de cursos
│   ├── teste-de-nivel/       # Teste interativo online CEFR
│   ├── contato/              # Canais de atendimento e formulário completo
│   ├── politica-de-privacidade/# Documento de conformidade com a LGPD
│   └── api/                  # Route handlers para processamento de leads e testes
├── components/               # Componentes reutilizáveis (Layout, Forms, UI, Test)
└── lib/                      # WhatsApp link builder, CEFR calculator, Resend, Phone mask
```

---

## ⚙️ Como Configurar as Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Preencha as chaves:
   ```env
   # Chave de API do Resend (obtenha em https://resend.com)
   RESEND_API_KEY=re_1234567890abcdef

   # E-mail onde a coordenação receberá os leads e testes
   LEADS_TO_EMAIL=pedagogico@snowfieldlanguages.com.br

   # Google Analytics 4 (Opcional - só dispara após aceite de cookies)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

   # Meta Pixel (Opcional - só dispara após aceite de cookies)
   NEXT_PUBLIC_META_PIXEL_ID=123456789012345
   ```

> **Nota de Desenvolvimento:** Caso você rode o projeto sem a chave `RESEND_API_KEY`, o sistema não quebra: os envios de formulário e testes de nível são simulados e registrados diretamente com formatação legível no console do servidor (`{"simulated": true}`).

---

## 📧 Como Verificar o Domínio no Resend

Para enviar e-mails de produção usando o remetente oficial `noreply@snowfieldlanguages.com.br`:

1. Acesse o painel do [Resend](https://resend.com/domains) e clique em **Add Domain**.
2. Digite o domínio: `snowfieldlanguages.com.br`.
3. O Resend fornecerá os registros de DNS:
   - **TXT** (SPF): `v=spf1 include:amazonses.com ~all`
   - **TXT** (DKIM): Chave pública gerada pelo Resend
   - **MX** (Feedback loop): Configuração de recebimento
4. Acesse a zona de DNS do seu registrador de domínio (ex: Registro.br, Cloudflare ou GoDaddy) e adicione as entradas indicadas.
5. Clique em **Verify Domain** no Resend. Assim que o status mudar para *Verified*, todos os e-mails transacionais serão entregues com alta entregabilidade.

---

## ✏️ Como Editar Cada Arquivo de Conteúdo

### 1. Dados Institucionais & Contato (`src/content/site.ts`)
Para alterar o número de WhatsApp, horário de atendimento, e-mail ou Instagram:
```typescript
export const siteConfig: SiteContactInfo = {
  name: 'Snowfield Languages',
  sinceYear: 2019,
  whatsapp: {
    number: '+55 (11) 97394-8388',
    cleanNumber: '5511973948388',
    display: '(11) 97394-8388',
    defaultMessage: 'Olá! Vim pelo site da Snowfield...',
  },
  email: 'pedagogico@snowfieldlanguages.com.br',
  // ...
};
```

### 2. Ativar / Desativar o Banner Sazonal (`src/content/site.ts`)
O banner no topo do site pode ser configurado para atender aos picos de matrícula de **Fevereiro** e **Agosto**:
```typescript
seasonalBanner: {
  enabled: true, // true para exibir, false para ocultar
  text: 'Matrículas abertas para o semestre! Vagas limitadas para turmas presenciais e horários online.',
  linkUrl: '/contato',
  linkText: 'Garantir minha vaga',
  startDate: '2026-01-10', // data de início (YYYY-MM-DD)
  endDate: '2026-08-31',   // data de término (YYYY-MM-DD)
}
```

### 3. Idiomas e Atividades (`src/content/idiomas.ts`)
Adicione ou ajuste idiomas, níveis CEFR e as frases úteis interativas que aparecem em `/idiomas/[idioma]`.

### 4. Cursos e Links de Pagamento (`src/content/cursos.ts`)
- **Com link de checkout**: Preencha o campo `checkoutUrl` com o link do Mercado Pago, Hotmart, Stripe, etc. O botão exibirá **"Comprar agora"** e abrirá o link diretamente.
- **Sem link de checkout**: Deixe o campo `checkoutUrl` vazio. O botão mudará automaticamente para **"Quero este curso"** e abrirá o WhatsApp da escola já com o nome do curso selecionado.
- **Preço**: Se o campo `price` for omitido, o bloco de preço não será exibido.

### 5. Depoimentos (`src/content/depoimentos.ts`)
Insira depoimentos reais de alunos ou pais, preenchendo autor, cargo/perfil e conteúdo do relato.

### 6. Questões do Teste de Nível (`src/content/questoes/ingles.ts`)
Contém as 28 questões progressivas de A1 a C1. O arquivo está marcado com o cabeçalho `// REVISAR COM A EQUIPE PEDAGÓGICA`.

---

## 🛠️ Como Rodar Localmente

1. Instalar as dependências:
   ```bash
   npm install
   ```

2. Executar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000).

3. Para testar o build de produção idêntico à Vercel:
   ```bash
   npm run build
   npm run start
   ```

---

## ☁️ Como Publicar na Vercel

1. Envie o projeto para um repositório no GitHub ou GitLab:
   ```bash
   git init
   git add .
   git commit -m "feat: MVP completo Snowfield Languages"
   git branch -M main
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e conecte sua conta.
3. Clique em **Add New Project** e selecione o repositório `snowfield-languages`.
4. O Next.js será detectado automaticamente.
5. Em **Environment Variables**, adicione:
   - `RESEND_API_KEY`
   - `LEADS_TO_EMAIL`
   - `NEXT_PUBLIC_GA_ID` (se aplicável)
   - `NEXT_PUBLIC_META_PIXEL_ID` (se aplicável)
6. Clique em **Deploy**. O deploy será concluído em menos de 2 minutos com SSL automático e CDN global.
