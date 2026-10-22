# Personal Developer Portfolio

A beginner-friendly responsive portfolio made with plain HTML5, CSS3, and JavaScript.

## 1. Open in VS Code

1. Extract `developer-portfolio.zip`.
2. Open VS Code.
3. Select **File → Open Folder** and choose the `developer-portfolio` folder.
4. Open `index.html` in a browser. For easier development, install the **Live Server** extension in VS Code, right-click `index.html`, and choose **Open with Live Server**.

## 2. Personalize it before publishing

- Replace the sample email in `index.html` with your real email address.
- Update the GitHub and LinkedIn links to your profile URLs.
- Edit the About and Skills sections so they accurately reflect your skills.
- Replace the sample project cards with projects you have actually completed.
- Add your PDF resume as `assets/resume.pdf`. If you do not have one ready, remove the resume download button until you do.
- Search for `Sanjay` in `index.html` and update the text if you want a different display name.

## 3. Test the interactions

- Click **Theme** to switch between dark and light modes. The choice is saved in the browser.
- On a narrow screen, use the hamburger menu to navigate.
- Click **View details** on a project card to open a popup.
- Use the navigation links to test smooth scrolling.
- Check the browser developer console for errors.

## 4. Publish with GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a new public repository, for example `developer-portfolio`.
3. In VS Code, open the terminal (**Terminal → New Terminal**) and run these commands from inside this project folder:

   ```bash
   git init
   git add .
   git commit -m "Build personal developer portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/developer-portfolio.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to configure your name/email, use the name and email associated with your Git commits.

4. On GitHub, open the repository and choose **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then click **Save**.
7. Wait for the workflow to finish. Your website URL will usually be:
   `https://YOUR-USERNAME.github.io/developer-portfolio/`

## 5. Before submitting to your internship

- [ ] Website opens on mobile and desktop.
- [ ] Theme toggle works.
- [ ] Mobile menu opens and closes.
- [ ] Project detail popups work.
- [ ] Email and social links are correct.
- [ ] Resume link points to a real PDF, or the button is removed.
- [ ] README contains setup instructions.
- [ ] Repository is public if the internship requires public access.
- [ ] Add the live URL and repository URL to your submission.

## File structure

```text
developer-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── (put resume.pdf here)
```

No build tools or npm packages are required.
