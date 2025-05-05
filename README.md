
# OutliersVerse

## Deployment Instructions

Since the `package.json` file is read-only in this environment, follow these manual steps for deployment:

### For GitHub Pages:

1. Make sure you have npm installed and run the deployment script which will install required dependencies:
```bash
node deploy.js
```

2. Install gh-pages (if not already installed):
```bash
npm install --save-dev gh-pages
```

3. Deploy to GitHub Pages:
```bash
npx gh-pages -d dist
```

### For other deployment platforms:

1. Run the deployment script (this will install Vite if needed):
```bash
node deploy.js
```

2. Deploy the `dist` folder to your preferred hosting service.

## Project Structure

This project is built with:
- React
- Vite
- Tailwind CSS
- Shadcn UI components

## Development

To run the project locally:
```bash
npm run dev
```
