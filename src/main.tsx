import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { ApolloProvider } from '@apollo/client/react'
import { ApolloClient } from '@apollo/client'
import { HttpLink } from '@apollo/client'
import { InMemoryCache } from '@apollo/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  const baseUrl = import.meta.env.VITE_API_BASE_URL 
  const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: baseUrl }),
    cache: new InMemoryCache(),
  });
  const queryClient = new QueryClient();
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={apolloClient}>
          <RouterProvider router={router} />
        </ApolloProvider>
      </QueryClientProvider>
    </StrictMode>,
  )
}