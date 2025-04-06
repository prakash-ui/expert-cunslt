import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  MessageSquare,
  ShieldAlert,
  UserPlus,
  Users
} from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <Button asChild variant="outline">
          <Link href="/admin/reports/new">Generate Report</Link>
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="logs">System Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,345</div>
                <p className="text-xs text-zinc-500">+123 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Experts</CardTitle>
                <UserPlus className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-zinc-500">+45 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$241,234</div>
                <p className="text-xs text-zinc-500">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sessions Today</CardTitle>
                <Calendar className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">347</div>
                <p className="text-xs text-zinc-500">+28 vs. yesterday</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Platform Activity</CardTitle>
                <CardDescription>Session bookings and user registrations</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center text-center text-zinc-500">
                  <BarChart className="h-16 w-16 mb-2" />
                  <p>Activity chart will be displayed here</p>
                  <p className="text-xs">Sessions, registrations, and revenue</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest system activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: UserPlus,
                      text: "New expert verification request",
                      time: "5 minutes ago",
                      status: "pending",
                    },
                    {
                      icon: DollarSign,
                      text: "Payment dispute #4532",
                      time: "24 minutes ago",
                      status: "urgent",
                    },
                    {
                      icon: MessageSquare,
                      text: "Support ticket #8723",
                      time: "3 hours ago",
                      status: "pending",
                    },
                    {
                      icon: ShieldAlert,
                      text: "Content moderation flag",
                      time: "5 hours ago",
                      status: "resolved",
                    },
                    {
                      icon: CheckCircle2,
                      text: "System backup completed",
                      time: "6 hours ago",
                      status: "success",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className={`h-9 w-9 rounded-full flex items-center justify-center
                        ${activity.status === 'urgent' ? 'bg-red-100 text-red-600' :
                          activity.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                          activity.status === 'resolved' ? 'bg-blue-100 text-blue-600' :
                          'bg-green-100 text-green-600'}`}>
                        <activity.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.text}</p>
                        <p className="text-xs text-zinc-500">{activity.time}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Pending Verifications</CardTitle>
                <CardDescription>Expert verification requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Dr. John Smith", field: "Psychology", time: "2 hours ago" },
                    { name: "Sarah Williams", field: "Finance", time: "4 hours ago" },
                    { name: "Michael Brown", field: "Technology", time: "Yesterday" },
                  ].map((expert, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{expert.name}</p>
                        <p className="text-xs text-zinc-500">{expert.field} • {expert.time}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8 px-2">Reject</Button>
                        <Button size="sm" className="h-8 px-2 bg-black hover:bg-zinc-800">Approve</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button asChild variant="link" size="sm">
                    <Link href="/admin/experts/verification">View all requests</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Tickets</CardTitle>
                <CardDescription>Unresolved user support tickets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "#8723", subject: "Payment not processing", priority: "High", time: "3 hours ago" },
                    { id: "#8722", subject: "Expert no-show", priority: "Medium", time: "5 hours ago" },
                    { id: "#8721", subject: "Account access issue", priority: "Low", time: "Yesterday" },
                  ].map((ticket, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center">
                          <p className="text-sm font-medium">{ticket.id}</p>
                          <span className={`ml-2 text-xs px-2 py-0.5 rounded ${
                            ticket.priority === 'High' ? 'bg-red-100 text-red-700' :
                            ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {ticket.priority}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500">{ticket.subject} • {ticket.time}</p>
                      </div>
                      <Button size="sm" variant="outline" className="h-8">Respond</Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button asChild variant="link" size="sm">
                    <Link href="/admin/support">View all tickets</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Real-time platform performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Server Load", value: "23%", status: "normal" },
                    { name: "API Response Time", value: "187ms", status: "normal" },
                    { name: "Database Queries", value: "1.2k/min", status: "normal" },
                    { name: "Active Sessions", value: "347", status: "normal" },
                    { name: "Message Queue", value: "56", status: "normal" },
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <p className="text-sm font-medium">{metric.name}</p>
                      <div className="flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          metric.status === 'normal' ? 'bg-green-500' :
                          metric.status === 'warning' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`} />
                        <span className="text-sm">{metric.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-zinc-500 mr-1" />
                      <p className="text-xs text-zinc-500">Last updated: 2 minutes ago</p>
                    </div>
                    <Button size="sm" variant="ghost" className="h-8">Refresh</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center bg-white rounded-md">
          <div className="text-center">
            <BarChart className="h-16 w-16 mx-auto mb-4 text-zinc-300" />
            <h3 className="text-lg font-medium">Analytics Dashboard</h3>
            <p className="text-zinc-500 max-w-md">Detailed analytics including user growth, session statistics, revenue tracking, and expert performance metrics.</p>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="h-[400px] flex items-center justify-center bg-white rounded-md">
          <div className="text-center">
            <BarChart className="h-16 w-16 mx-auto mb-4 text-zinc-300" />
            <h3 className="text-lg font-medium">Reports Center</h3>
            <p className="text-zinc-500 max-w-md">Generate custom reports for financial analysis, user behavior, expert performance, and platform metrics.</p>
          </div>
        </TabsContent>

        <TabsContent value="logs" className="h-[400px] flex items-center justify-center bg-white rounded-md">
          <div className="text-center">
            <BarChart className="h-16 w-16 mx-auto mb-4 text-zinc-300" />
            <h3 className="text-lg font-medium">System Logs</h3>
            <p className="text-zinc-500 max-w-md">Access system logs for troubleshooting, security monitoring, and audit trail purposes.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
