<div align="center">

# 🌌 QRgen

### Space-Themed QR Code Generator

*Generate direct QR codes with zero redirects and stunning visual effects*

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.0.0-000000?style=flat&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)

[🚀 Live Demo](https://qr-gen-eight-phi.vercel.app) • [📝 Report Bug](https://github.com/heytanix/QRgen/issues) • [✨ Request Feature](https://github.com/heytanix/QRgen/issues)

</div>

---

## You can help me by Donating
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/heytanix)

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

QRgen is a modern, space-themed QR code generator web application that creates high-quality QR codes instantly. Built with Flask and featuring an immersive animated space background, QRgen provides a seamless user experience for generating and downloading QR codes for URLs, text, contact information, WiFi credentials, and more.

### Why QRgen?

- **Zero Redirects**: Generate direct QR codes without any intermediate redirects
- **Instant Generation**: Real-time QR code creation with no delays
- **Beautiful UI**: Stunning space-themed interface with animated stars and shooting stars
- **High Quality**: Optimized QR codes with configurable error correction
- **Easy to Use**: Intuitive interface with character counting and validation
- **Free & Open Source**: MIT licensed for personal and commercial use

---

## ✨ Key Features

### Core Functionality
- 📱 **QR Code Generation** - Create QR codes from any text, URL, or data up to 2000 characters
- 💾 **PNG Download** - Download generated QR codes as high-quality PNG images
- 🔄 **Real-time Preview** - Instant QR code preview as you type
- 📊 **Character Counter** - Live character count with color-coded warnings

### User Experience
- 🌌 **Space Theme** - Immersive animated starfield background with twinkling stars
- ✨ **Shooting Stars** - Dynamic shooting star animations for visual appeal
- 🎨 **Glass Morphism** - Modern glassmorphic UI elements with backdrop blur
- 📱 **Responsive Design** - Fully responsive layout for desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized loading and generation speeds
- ♿ **Accessibility** - Keyboard shortcuts (Ctrl+Enter) and focus states

### Technical Features
- 🔐 **Error Handling** - Comprehensive client and server-side error handling
- 🎯 **Input Validation** - Client-side validation with helpful error messages
- 🔄 **Loading States** - Clear loading indicators during processing
- 💪 **Robust Backend** - Flask-powered REST API with proper error responses

---

## 🛠️ Tech Stack

### Backend
- **[Flask](https://flask.palletsprojects.com/)** - Python web framework (v3.0.0)
- **[qrcode](https://github.com/lincolnloop/python-qrcode)** - QR code generation library (v7.4.2)
- **[Pillow](https://python-pillow.org/)** - Image processing library (v10.3.0)
- **[Werkzeug](https://werkzeug.palletsprojects.com/)** - WSGI utility library (v3.0.1)

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Advanced animations and effects
- **JavaScript (ES6+)** - Modern async/await patterns
- **Fetch API** - RESTful API communication

### Deployment
- **[Vercel](https://vercel.com)** - Serverless deployment platform
- **GitHub** - Version control and collaboration

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Python 3.8 or higher**
  ```bash
  python --version
  ```

- **pip** (Python package manager)
  ```bash
  pip --version
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/heytanix/QRgen.git
   cd QRgen
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   cd api
   python index.py
   ```

5. **Access the application**

   Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

---

## 💻 Usage

### Web Interface

1. **Enter your data** in the text area (URLs, text, contact info, WiFi credentials, etc.)
2. **Click "Generate QR Code"** or press `Ctrl + Enter`
3. **Preview the QR code** in real-time
4. **Download** the QR code as a PNG file using the "Download PNG" button
5. **Generate a new QR code** by clicking "New QR Code" to reset the interface

### Example Use Cases

#### Generate a URL QR Code
```
https://www.example.com
```

#### Generate a WiFi QR Code
```
WIFI:T:WPA;S:MyNetwork;P:MyPassword;;
```

#### Generate Contact Information
```
BEGIN:VCARD
VERSION:3.0
FN:John Doe
TEL:+1-234-567-8900
EMAIL:john@example.com
END:VCARD
```

#### Generate Plain Text
```
Hello, World!
Welcome to QRgen!
```

---

## 🔌 API Endpoints

### `GET /`
**Description**: Serves the main HTML interface

**Response**: HTML page

---

### `POST /generate`
**Description**: Generates a QR code and returns it as a base64-encoded image

**Request Body**:
```json
{
  "text": "Your text or URL here"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "image": "data:image/png;base64,iVBORw0KGgo..."
}
```

**Error Response** (400/500):
```json
{
  "error": "Error message"
}
```

---

### `POST /download`
**Description**: Generates and downloads a QR code as a PNG file

**Request Body**:
```json
{
  "text": "Your text or URL here"
}
```

**Success Response** (200):
- Content-Type: `image/png`
- File download with name: `qrcode_{hash}.png`

**Error Response** (400/500):
```json
{
  "error": "Error message"
}
```

---

## 📁 Project Structure

```
QRgen/
├── api/
│   ├── index.py              # Flask application & API endpoints
│   ├── static/
│   │   ├── style.css         # Space-themed styles & animations
│   │   └── script.js         # Frontend JavaScript logic
│   └── templates/
│       └── index.html        # Main HTML interface
├── requirements.txt          # Python dependencies
├── vercel.json              # Vercel deployment configuration
├── LICENSE                  # MIT License
└── README.md               # Project documentation
```

---

## 🌐 Deployment

### Deploy to Vercel

This project is configured for seamless deployment on Vercel:

1. **Fork this repository** to your GitHub account

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your forked repository

3. **Configure settings** (automatic detection)
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

4. **Deploy**
   - Click "Deploy"
   - Your app will be live at `your-project.vercel.app`

### Deploy Locally

Follow the [Installation](#installation) instructions above to run the application locally on port 5000.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Write clean, maintainable code
- Follow existing code style and conventions
- Test your changes thoroughly
- Update documentation as needed
- Add comments for complex logic

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` file for more information.

This means you are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

---

## 👨‍💻 Contact

**Thanish C** - [@heytanix](https://github.com/heytanix)

**Project Link**: [https://github.com/heytanix/QRgen](https://github.com/heytanix/QRgen)

**Live Demo**: [https://qr-gen-eight-phi.vercel.app](https://qr-gen-eight-phi.vercel.app)

---

## 🙏 Acknowledgments

- [Flask](https://flask.palletsprojects.com/) - Web framework
- [python-qrcode](https://github.com/lincolnloop/python-qrcode) - QR code generation
- [Pillow](https://python-pillow.org/) - Image processing
- [Vercel](https://vercel.com) - Deployment platform
- [Font Awesome](https://fontawesome.com) - Icons (if used)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ by [Thanish C](https://github.com/heytanix)

</div>
