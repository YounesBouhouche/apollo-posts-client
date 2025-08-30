# 🚀 Apollo GraphQL Posts

A modern, beautiful web application showcasing the power of Apollo Client, GraphQL, and modern React development. Built with cutting-edge technologies and featuring a gorgeous, responsive design.

![Apollo GraphQL Posts](https://img.shields.io/badge/Apollo-GraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎨 **Beautiful Design**
- **Modern UI/UX** with gradient backgrounds and smooth animations
- **Responsive design** that works perfectly on all devices
- **Custom typography** using Google Fonts (Inter, Playfair Display, JetBrains Mono)
- **Material 3 inspired** color system and components
- **Smooth animations** and micro-interactions

### 📱 **Core Functionality**
- **Browse Posts** - Beautiful grid layout with animated post cards
- **Read Individual Posts** - Detailed post view with author information
- **Create New Posts** - Comprehensive post creation form with live preview
- **Error Handling** - Elegant error states with retry functionality
- **Loading States** - Beautiful loading animations

### 🔧 **Technical Features**
- **Apollo Client** for GraphQL data management
- **TanStack Query** for advanced caching and state management
- **TanStack Router** for type-safe routing
- **Reusable Components** - Modular, maintainable architecture
- **TypeScript** for type safety and better developer experience

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | ^18.3.1 |
| **TypeScript** | Type Safety | ^5.6.2 |
| **Apollo Client** | GraphQL Client | Latest |
| **TanStack Query** | Data Fetching & Caching | Latest |
| **TanStack Router** | Type-safe Routing | Latest |
| **Tailwind CSS** | Styling Framework | ^3.4.15 |
| **Vite** | Build Tool & Dev Server | ^6.0.1 |

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone "https://github.com/YounesBouhouche/apollo-posts-client"
   cd learn-apollo-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ErrorMessage.tsx    # Error handling component
│   ├── Footer.tsx          # Application footer
│   ├── Loading.tsx         # Loading spinner component
│   ├── Navbar.tsx          # Navigation bar
│   ├── PostCard.tsx        # Post display card
│   └── SectionHeader.tsx   # Section heading component
├── hooks/              # Custom React hooks
│   └── useFetch.tsx        # Apollo + TanStack Query integration
├── models/             # TypeScript type definitions
│   ├── Post.tsx            # Post data model
│   └── User.tsx            # User data model
├── routes/             # Page components (TanStack Router)
│   ├── __root.tsx          # Root layout
│   ├── index.tsx           # Home page (posts list)
│   ├── create.tsx          # Create post page
│   └── post.$postId.tsx    # Individual post page
├── utils/              # Utility functions
│   └── queries.tsx         # GraphQL queries
├── App.tsx             # Main App component
├── App.css             # Global styles & animations
└── main.tsx            # Application entry point
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue to Purple gradient (`#3B82F6` → `#8B5CF6`)
- **Secondary**: Gray variants for text and backgrounds
- **Accent**: Teal and Pink for highlights
- **Surface**: Clean whites and light grays

### **Typography**
- **Display**: Playfair Display (headings)
- **Body**: Inter (paragraphs, UI text)
- **Mono**: JetBrains Mono (code, usernames)

### **Components**
- **Cards**: Rounded corners (16px-24px), subtle shadows
- **Buttons**: Gradient backgrounds, hover animations
- **Forms**: Large inputs, proper spacing, validation states
- **Navigation**: Sticky header, smooth transitions

## 🔍 Key Components

### **PostCard**
Displays individual posts with:
- Author information and avatar
- Post title and content preview
- Interactive buttons (Like, Share, Read More)
- Smooth hover animations

### **Loading & Error States**
- Beautiful dual-ring loading spinner
- Comprehensive error handling with retry buttons
- Consistent styling across the application

### **Create Post Form**
- Real-time character counting
- Live preview functionality
- Form validation and submission states
- Writing tips and guidelines

## 🚦 GraphQL Integration

### **Queries**
- `postsQuery` - Fetch paginated posts list
- `postQuery` - Fetch individual post details

### **Data Flow**
1. **useFetch Hook** - Custom hook combining Apollo Client + TanStack Query
2. **Automatic Caching** - TanStack Query handles caching and background updates
3. **Error Handling** - Comprehensive error states with retry functionality
4. **Loading States** - Beautiful loading indicators

## 🔧 Development

### **Code Style**
- **ESLint** configuration for code quality
- **TypeScript** strict mode enabled
- **Prettier** for consistent formatting
- **Component-first** architecture

### **Performance**
- **Code splitting** with TanStack Router
- **Image optimization** with proper loading states
- **Bundle optimization** with Vite
- **Caching strategies** with TanStack Query

## 📱 Responsive Design

- **Mobile First** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grid** system using CSS Grid and Flexbox
- **Touch-friendly** interface elements

## 🎯 Future Enhancements

- [ ] User authentication and profiles
- [ ] Post categories and tags
- [ ] Search and filtering functionality
- [ ] Comments system
- [ ] Dark mode toggle
- [ ] Social sharing integration
- [ ] Rich text editor for post creation
- [ ] Image upload support
- [ ] Real-time updates with subscriptions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Apollo GraphQL** for the excellent GraphQL client
- **TanStack** for amazing React utilities
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the lightning-fast build tool
- **React Community** for continuous innovation

---

**Built with ❤️ using modern web technologies**
