# FaithTech.dev

Personal consultancy site for **FaithTech.dev** — product & technology leadership for churches, Bible partners, and ministries. Built with Lovable, then refined locally.

- **Repo**: [github.com/AlexTSung/faithtech.dev](https://github.com/AlexTSung/faithtech.dev)
- **Local preview**: `npm run dev` → http://127.0.0.1:8080

### Contact form (Formspree)

To receive contact form submissions by email, set up [Formspree](https://formspree.io) and add your form ID:

1. Create a form at [formspree.io](https://formspree.io) (free tier is fine).
2. Copy the form ID from the form endpoint (e.g. `https://formspree.io/f/xyzabcde` → `xyzabcde`).
3. Create `.env.local` in the project root with: `VITE_FORMSPREE_FORM_ID=xyzabcde`
4. Restart the dev server or redeploy. Submissions will be sent to your Formspree email.

## Project info (Lovable)

**URL**: https://lovable.dev/projects/b1381395-51b7-4c1a-a487-b2060697f3fc

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b1381395-51b7-4c1a-a487-b2060697f3fc) and start prompting.

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

### Go live on faithtech.dev (Vercel)

1. **Push your code to GitHub** (if you haven’t):
   ```bash
   git add .
   git commit -m "FaithTech.dev site ready for deploy"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
   - Click **Add New… → Project** and import `AlexTSung/faithtech.dev`.
   - Vercel will use the repo’s `vercel.json` (build: `npm run build`, output: `dist`). Click **Deploy**.
   - Your site will be live at a URL like `faithtech-dev.vercel.app`.

3. **Use your domain faithtech.dev**
   - In the Vercel project: **Settings → Domains**.
   - Add `faithtech.dev` and `www.faithtech.dev` (optional).
   - In your domain registrar’s DNS, add the records Vercel shows (see below for **Squarespace Domains**).
   - After DNS propagates (often 5–30 minutes), the site will be live at **https://faithtech.dev**.

#### DNS at Squarespace Domains (formerly Google Domains)

1. Go to [Squarespace Domains](https://domains.squarespace.com) and sign in. Select **faithtech.dev**.
2. Open **DNS** (or **DNS Settings** / **Manage DNS**).
3. Add the records Vercel gives you when you add the domain. Usually:

   | Type  | Host / Name | Value / Answer        |
   |-------|-------------|------------------------|
   | **A** | `@` (or leave blank for apex) | `76.76.21.21` |
   | **CNAME** | `www` | `cname.vercel-dns.com` |

   If Squarespace uses “Host” and “Points to”:
   - **A:** Host `@`, Points to `76.76.21.21`
   - **CNAME:** Host `www`, Points to `cname.vercel-dns.com`

4. Remove or change any old **A** or **CNAME** records that point elsewhere (e.g. to Google or Squarespace hosting), so only Vercel’s records are used for `faithtech.dev` and `www.faithtech.dev`.
5. Save. Propagation usually takes 5–30 minutes; sometimes up to 48 hours.

You can also use [Lovable](https://lovable.dev/projects/b1381395-51b7-4c1a-a487-b2060697f3fc) and click Share → Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
