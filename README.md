# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c4e532e7-f2b8-4551-9f19-e5953012040e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c4e532e7-f2b8-4551-9f19-e5953012040e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c4e532e7-f2b8-4551-9f19-e5953012040e) and click on Share -> Publish.

## Deploying to GitHub Pages

If you prefer to host the static build on GitHub Pages, follow these steps:

1. Install the **gh-pages** package:

   ```sh
   npm install -D gh-pages
   ```

2. Build the project:

   ```sh
   npm run build
   ```

3. Deploy the contents of the `dist` folder:

   ```sh
   npm run deploy
   ```

The `vite.config.ts` file has the `base` option set to `/resume-boost-landing-page/` so assets load correctly on GitHub Pages.

After running `npm run deploy`, configure the repository to serve the **gh-pages** branch in the GitHub Pages settings.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
