# College Fest Website

A modern, responsive website for a college technical festival built with HTML, Tailwind CSS, and JavaScript. The website features both dark and light themes, a countdown timer, and various sections to showcase event information.

## Features

- Responsive design that works on all devices
- Dark/Light theme toggle with system preference detection
- Live countdown timer to the event
- Smooth scroll navigation
- Modern UI with Tailwind CSS
- Contact and registration forms
- Timeline-style event schedule
- Featured events showcase

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- JavaScript (Vanilla)
- Font Awesome Icons

## Setup

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Open the project folder:
```bash
cd college-fest-website
```

3. Open `index.html` in your web browser to view the website.

## Project Structure

```
college-fest-website/
├── index.html      # Main HTML file
├── app.js         # JavaScript for countdown and theme toggle
└── README.md      # Project documentation
```

## Customization

### Event Date
To change the event date, modify the `eventDate` constant in `app.js`:

```javascript
const eventDate = new Date('2024-03-15T09:00:00').getTime();
```

### Theme Colors
The primary and secondary colors can be customized in the Tailwind configuration in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',    // Change this for primary color
                secondary: '#10B981',   // Change this for secondary color
            }
        }
    }
}
```

## Browser Support

The website is compatible with all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE). 