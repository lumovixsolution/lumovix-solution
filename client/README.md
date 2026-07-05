# Lumovix Solution - Frontend

Professional landing page for Lumovix Solution software company, built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons

## Getting Started

```bash
cd client
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
client/
├── public/assets/logo.png    # Company logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Portfolio.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

## Sections

- **Home** - Hero with CTA and device mockup
- **About Us** - Company story and values
- **Services** - Web, Mobile, Portfolio, Assignment Support
- **Portfolio** - Project showcase
- **Contact** - Contact form and footer details

## Contact Form (Web3Forms)

The contact form sends emails to **lumovixsolution@gmail.com** via [Web3Forms](https://web3forms.com).

### Setup (one-time)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter `lumovixsolution@gmail.com` and verify your email
3. Copy your **Access Key**
4. Create a `.env` file in the `client` folder:

```bash
cp .env.example .env
```

5. Paste your key:

```
VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key
```

6. Restart the dev server (`npm run dev`)

## Contact Info Form (Web3Forms)

The contact form sends emails to **lumovixsolution@gmail.com** via [Web3Forms](https://web3forms.com).

### Setup (one-time)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter `lumovixsolution@gmail.com` and verify your email
3. Copy your **Access Key**
4. Create a `.env` file in the `client` folder:

```bash
cp .env.example .env
```

5. Paste your key:

```
VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key
```

6. Restart the dev server (`npm run dev`)

## Contact

- Phone/WhatsApp: 0789952479
- Email: lumovixsolution@gmail.com
- Location: Malabe, Sri Lanka
