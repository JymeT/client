import { Outlet, useNavigate } from 'react-router-dom'
import { Activity, LogOut, PlusCircle, User, Calendar, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Avatar } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'
import { useAuth } from '@/context/authContext'
import {
  Wallet,
  // CreditCard
} from 'lucide-react'

import { useEffect } from 'react'

const DashboardLayout = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center space-x-2 px-2 pt-4 pb-2 text-2xl font-bold text-finflow-blue ">
              <Activity className="h-6 w-6 text-indigo-600" />
              <span>FM</span>
              <span className="text-sm font-normal text-gray-500">powered by AI</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <div className="space-y-1 py-2">
              <Link to="/dashboard">
                <Button variant="ghost" className="w-full justify-start">
                  <Activity size={16} className="mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Link to="/transactions">
                <Button variant="ghost" className="w-full justify-start">
                  <Wallet size={16} className="mr-2" />
                  Transactions
                </Button>
              </Link>
              <Link to="/reminders">
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar size={16} className="mr-2" />
                  Reminders
                </Button>
              </Link>

              <Link to="/notifications">
                <Button variant="ghost" className="w-full justify-start">
                  <Bell size={16} className="mr-2" />
                  Notifications
                </Button>
              </Link>

              <Link to="/chat">
                <Button variant="ghost" className="w-full justify-start">
                  <PlusCircle size={16} className="mr-2" />
                  Chat
                </Button>
              </Link>
            </div>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-2 border-t">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <User className="h-6 w-6" />
                      </Avatar>
                      <span className="truncate">{user?.name}</span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-grow overflow-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <SidebarTrigger className="md:hidden" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
