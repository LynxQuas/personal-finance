import { createFileRoute } from '@tanstack/react-router'
import LoginForm from '@/components/LoginForm'
import LoginHero from '/login-hero.png'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  return (
    <main>
      <div className="flex min-h-screen">
        <div>
          <img src={LoginHero} className="w-200 h-screen lg:block hidden" />
        </div>

        <div className="w-full lg:min-h-0 min-h-screen flex items-center justify-center bg-beige-100">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
