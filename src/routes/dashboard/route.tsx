import Sidebar from '@/components/SideBar';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <main>
      <div className="flex">
        <div className="w-75 bg-orange-50 lg:block hidden h-screen">
          <Sidebar />
        </div>

        <div className="flex-1 text-black">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

