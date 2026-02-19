import LoginHero from '/login-hero.png'
import { createFileRoute } from '@tanstack/react-router'
import SignUpForm from '@/components/SignUpForm'

export const Route = createFileRoute('/sign-up')({
  component: SignUpPage,
})

function SignUpPage() {
  return (
    <main>
      <div className="flex min-h-screen">
        <div>
          <img src={LoginHero} className="w-200 h-screen lg:block hidden" />
        </div>

        <div className="w-full lg:min-h-0 min-h-screen flex items-center justify-center bg-beige-100">
          <SignUpForm />
        </div>
      </div>
    </main>
  )
}
