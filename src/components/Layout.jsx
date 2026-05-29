import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Sidebar */}
      <div className="bg-black text-white p-5 md:w-64">

        <h1 className="text-2xl font-bold mb-6">
          Shop SaaS
        </h1>

        <div className="flex md:flex-col gap-4 overflow-x-auto">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/billing">
            Billing
          </Link>

        </div>

      </div>

      {/* Main */}
      <div className="flex-1 p-4 md:p-6 bg-gray-100">
        <Outlet />
      </div>

    </div>
  )
}