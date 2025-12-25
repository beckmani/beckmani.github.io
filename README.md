# Isaac Beckman - Portfolio

A modern, responsive portfolio website showcasing my work as a DevOps Engineer.

## 🚀 Features

- **Responsive Design**: Fully responsive from 320px to desktop
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Smooth Scrolling**: Animated section navigation with active state tracking
- **Project Showcase**: Curated list of featured projects with GitHub integration
- **Contact Form**: Client-side validated contact form
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Sticky navigation with theme toggle
│   ├── Hero.tsx        # Landing section with CTAs
│   ├── About.tsx       # Personal bio and highlights
│   ├── Skills.tsx      # Tech stack and skills grid
│   ├── Projects.tsx    # Featured projects showcase
│   ├── Experience.tsx  # Work experience timeline
│   ├── Contact.tsx     # Contact form and social links
│   └── Footer.tsx      # Footer with quick links
├── data/               # JSON data files
│   ├── projects.json   # Project information
│   ├── skills.json     # Skills by category
│   └── experience.json # Work history
└── pages/
    └── Index.tsx       # Main page layout
```

## 🎨 Design System

The project uses a custom design system with CSS variables defined in `src/index.css`:

**Dark Mode Colors:**
- Background: `#0b1220`
- Surface: `#111827`
- Primary: `#3b82f6` (Blue)
- Secondary: `#10b981` (Emerald)

**Light Mode:** Automatically switches with clean, readable colors

## 🛠 Customization

### Update Projects
Edit `src/data/projects.json` to add/remove projects:

```json
{
  "name": "project-name",
  "description": "Project description",
  "tech": ["Tech1", "Tech2"],
  "github": "https://github.com/user/repo",
  "featured": true
}
```

### Update Skills
Edit `src/data/skills.json` to modify skills:

```json
{
  "category": "Category Name",
  "skills": ["Skill1", "Skill2"]
}
```

### Update Experience
Edit `src/data/experience.json` for work history:

```json
{
  "role": "Job Title",
  "company": "Company Name",
  "period": "2020 - Present",
  "location": "Location",
  "highlights": ["Achievement 1", "Achievement 2"]
}
```

## 🚦 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 TODO

- [ ] Add downloadable PDF resume
- [ ] Implement contact form backend endpoint
- [ ] Add Google Analytics tracking
- [ ] Create blog/notes section
- [ ] Add more project screenshots

## 📧 Contact

- **Email**: isaac@example.com
- **LinkedIn**: [isaac-beckman-isr](https://www.linkedin.com/in/isaac-beckman-isr/)
- **GitHub**: [beckmani](https://github.com/beckmani)
- **Location**: Tel Aviv, Israel (Asia/Jerusalem)

## 📄 License

This project is open source and available under the MIT License.
