# Modern Portfolio Website

A sleek, modern portfolio website with a dark theme, smooth animations, and responsive design. Built with React and Bootstrap.

## ✨ Features

- **Modern Dark Theme**: Sleek purple and pink gradient color scheme
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Fully Responsive**: Works perfectly on all devices
- **Optimized Performance**: Fast loading and smooth scrolling
- **Clean Code**: Well-organized component structure

## 🎨 Sections

- **Hero**: Eye-catching introduction with animated stats
- **About**: Skills showcase with progress bars
- **Projects**: Filterable portfolio gallery
- **Services**: Comprehensive service offerings
- **Contact**: Working contact form with info cards
- **Footer**: Social links and newsletter signup

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Copy all files to your project directory**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 🎨 Customization

### Colors
Edit the CSS variables in `App.css`:
```css
:root {
  --primary-bg: #0a0a0f;
  --secondary-bg: #12121a;
  --card-bg: #1a1a26;
  --accent-purple: #8b5cf6;
  --accent-pink: #ec4899;
  --accent-cyan: #06b6d4;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b8;
}
```

### Content
- **Personal Info**: Update name and role in `Hero.jsx`
- **About Section**: Edit skills and description in `About.jsx`
- **Projects**: Add your projects in `Projects.jsx`
- **Services**: Customize services in `Services.jsx`
- **Contact Info**: Update email and social links in `Contact.jsx` and `Footer.jsx`

### Images
Replace the placeholder emoji icons with real images:
- Profile image in About section
- Project thumbnails
- Service icons

## 🛠️ Technologies Used

- **React**: UI library
- **Bootstrap**: CSS framework
- **React Bootstrap**: Bootstrap components for React
- **CSS3**: Custom styling and animations
- **Google Fonts**: Space Grotesk font

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌟 Key Features Explained

### Animations
- Fade-in effects on scroll
- Hover transformations
- Floating elements
- Gradient animations

### Navigation
- Sticky navbar with blur effect
- Smooth scroll to sections
- Mobile-responsive menu

### Contact Form
- Form validation
- Custom styled inputs
- Animated submit button

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎯 Next Steps

1. Replace placeholder content with your actual information
2. Add real project images and descriptions
3. Connect the contact form to a backend service
4. Set up analytics (Google Analytics, etc.)
5. Deploy to hosting (Netlify, Vercel, GitHub Pages)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💬 Support

If you have any questions or need help, feel free to reach out!

---

**Happy Coding! 🚀**