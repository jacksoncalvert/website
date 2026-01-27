# Smartlane Software PTY LTD - Website

Official website for Smartlane Software PTY LTD, built with React and Vite.

## Features

- **Homepage**: Professional company website with branding, services, and contact information
- **Privacy Policy**: Comprehensive privacy policy accessible from the homepage footer
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern Stack**: Built with React 19, Vite 7, and React Router

## Requirements Met

✅ Valid website representing Smartlane Software PTY LTD  
✅ Privacy Policy directly accessible from homepage  
✅ Privacy Policy link in footer, available to all visitors  

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The `dist/` folder contains all static files needed for deployment. You can deploy to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Deploy the `dist/` folder to gh-pages branch
- **Any static hosting**: Upload the contents of `dist/`

## Project Structure

```
website/
├── src/
│   ├── App.jsx          # Main app with routing
│   ├── Home.jsx         # Homepage component
│   ├── PrivacyPolicy.jsx # Privacy policy component
│   ├── Home.css         # Homepage styles
│   ├── PrivacyPolicy.css # Privacy policy styles
│   └── main.jsx         # Application entry point
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technology Stack

- React 19.2.0
- Vite 7.2.4
- React Router DOM 7.x
- ESLint for code quality

## License

© 2026 Smartlane Software PTY LTD. All rights reserved.
