# The Dungeon Smoke Shop Website

A modern, responsive website for The Dungeon Smoke Shop - Downtown's premier smoke shop destination. Built with clean HTML5, CSS3, and JavaScript, optimized for GitHub Pages hosting.

## 🏪 About The Store

The Dungeon Smoke Shop is a downtown smoke shop offering quality smoking accessories, glassware, and tobacco products. This website serves as the digital presence for the store, providing information about products, location, hours, and contact details.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Multi-Page Structure**: Home, Products, About, and Contact pages
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized assets and minimal dependencies
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 📁 Project Structure

```
Store Website/
├── index.html              # Homepage
├── pages/                  # Secondary pages
│   ├── products.html       # Products showcase
│   ├── about.html          # About the store
│   └── contact.html        # Contact information and form
├── assets/                 # Static assets
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # Main JavaScript file
│   └── images/             # Image assets (to be added)
│       └── (logo, products, etc.)
├── README.md               # This file
└── .gitignore              # Git ignore file (optional)
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A GitHub account (for hosting)
- Git installed on your computer
- A text editor or IDE (VS Code recommended)

### Local Development

1. **Clone or download the project**
   ```bash
   git clone [your-repository-url]
   cd "Store Website"
   ```

2. **Open the project**
   - Open `index.html` in your web browser to view the site locally
   - Or use a local development server for better testing:
     ```bash
     # If you have Python installed:
     python -m http.server 8000
     # Then visit http://localhost:8000
     
     # Or if you have Node.js:
     npx serve .
     ```

3. **Make your customizations**
   - Update contact information in all HTML files
   - Add your store's actual address, phone, and email
   - Replace placeholder images with actual store photos
   - Customize colors in CSS variables (`:root` section in style.css)

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "dungeon-smoke-shop-website")
4. Make sure it's set to "Public"
5. Initialize with a README if you want
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file" on your new repository page
2. Drag and drop all your website files
3. Write a commit message like "Initial website upload"
4. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin [your-repository-url]
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at: `https://[your-username].github.io/[repository-name]`

## 🎨 Customization Guide

### Colors and Branding

The website uses CSS custom properties for easy theming. Update these in `assets/css/style.css`:

```css
:root {
    --primary-color: #2c1810;    /* Dark brown - main brand color */
    --secondary-color: #8b4513;   /* Medium brown - secondary brand color */
    --accent-color: #d4a574;      /* Light brown/gold - accent color */
    --text-light: #ffffff;        /* White text */
    --text-dark: #333333;         /* Dark text */
    /* ... more variables */
}
```

### Adding Your Content

1. **Store Information**: Update contact details in all HTML files
2. **Images**: Add your store photos to `assets/images/`
3. **Products**: Update the products page with your actual product categories
4. **About**: Customize the about page with your store's story
5. **Hours**: Update business hours in the contact page

### Adding New Pages

To add a new page:

1. Create a new HTML file in the `pages/` directory
2. Copy the structure from an existing page
3. Update the navigation links in all HTML files
4. Add corresponding styles in `style.css` if needed

## 📱 Mobile Responsiveness

The website is fully responsive and includes:

- Mobile-first CSS approach
- Hamburger menu for mobile navigation
- Flexible grid layouts
- Optimized typography for different screen sizes
- Touch-friendly interactive elements

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup with proper SEO structure
- **CSS3**: Modern CSS with custom properties, flexbox, and grid
- **JavaScript**: Vanilla JavaScript for interactions (no frameworks)
- **GitHub Pages**: Free static site hosting

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features

- Minimal HTTP requests
- Optimized CSS and JavaScript
- Semantic HTML for better SEO
- Fast loading times
- Mobile-optimized

## 📋 TODO / Future Enhancements

- [ ] Add store images and logo
- [ ] Implement product gallery with actual products
- [ ] Add Google Maps integration for store location
- [ ] Set up contact form backend (using services like Formspree or Netlify Forms)
- [ ] Add social media links and integration
- [ ] Implement blog section for store updates
- [ ] Add online ordering system integration
- [ ] Set up Google Analytics tracking
- [ ] Add customer testimonials section
- [ ] Implement inventory management system integration

## 🤝 Contributing

If you're working with a team or want to make improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions about this website or technical support:

- Email: [your-email@example.com]
- Store Phone: [store-phone-number]
- GitHub Issues: Use the Issues tab in your repository

## 📄 License

This project is open source. Feel free to use it as a template for your own smoke shop or retail website.

---

**Made with ❤️ for The Dungeon Smoke Shop**

*Last updated: November 2025*# Store-Website
