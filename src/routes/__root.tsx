import { Outlet, createRootRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <App>
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </App>
    </div>
  )
}
