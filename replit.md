# Deep Google Search - Bug Bounty Reconnaissance Platform

## Overview

This is a web-based reconnaissance platform designed for bug bounty hunters and security professionals. The application provides a comprehensive collection of Google Dorks (specialized search queries) specifically curated for discovering vulnerabilities, sensitive files, and potential security issues in target domains. The platform features an intuitive interface for entering target domains, filtering dorks by category, and managing reconnaissance sessions through a built-in workspace.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Single Page Application (SPA)**: Pure HTML, CSS, and vanilla JavaScript without frameworks
- **Modular JavaScript Design**: Organized into separate modules (app.js, dorks.js, workspace.js) following a class-based architecture
- **Component-Based UI**: Each major feature (theme toggle, workspace, dork management) is encapsulated in its own class
- **CSS Custom Properties**: Extensive use of CSS variables for theming and consistent design system
- **Responsive Design**: Mobile-first approach with flexible layouts

### Data Management
- **Client-Side Storage**: Uses browser localStorage for persistence of user preferences, saved targets, and notes
- **Static Data Structure**: Google Dorks are stored as JavaScript objects categorized by vulnerability type
- **No Backend Database**: All data is managed client-side, making the application completely portable

### Theme System
- **Dual Theme Support**: Dark and light theme implementations using CSS custom properties
- **Dynamic Theme Switching**: Real-time theme toggling without page refresh
- **Persistent Theme Preference**: User's theme choice is saved to localStorage

### Workspace Management
- **Session Persistence**: Saves current reconnaissance session including target domains and notes
- **Import/Export Functionality**: Allows users to backup and restore their workspace data
- **Auto-save Features**: Automatic saving of notes and session data to prevent data loss

### Search and Filtering System
- **Real-time Filtering**: Dynamic filtering of Google Dorks based on user input
- **Category-based Organization**: Dorks are organized into logical categories (sensitive files, vulnerabilities, etc.)
- **Domain Substitution**: Automatic replacement of placeholder domains with user-specified targets

## External Dependencies

### CDN Resources
- **Google Fonts**: Inter font family for typography
- **Font Awesome 6.4.0**: Icon library for UI elements
- **GitHub Assets**: Custom favicon hosted on GitHub raw content

### Browser APIs
- **localStorage**: For client-side data persistence
- **File API**: For workspace import/export functionality
- **DOM APIs**: For dynamic content manipulation and event handling

### Third-party Integrations
- **Google Search**: The core functionality relies on Google's search engine for executing the generated dork queries
- **No Authentication Services**: Application runs entirely client-side without user accounts or authentication
- **No Analytics or Tracking**: No external analytics or tracking services integrated