import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Calendar,
  Clock,
  DollarSign,
  MessageSquare,
  Star,
  Users,
} from "lucide-react"

export default function ExpertDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Expert Dashboard</h1>
          <p className="text-zinc-500">Welcome, Dr. Sarah! Here's an overview of your expert activity.</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/expert/availability">Manage Schedule</Link>
          </Button>
          <Button asChild size="sm" className="bg-black hover:bg-zinc-800">
            <Link href="/expert/messages">Check Messages</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-zinc-500">Next session in 35 minutes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-zinc-500">From 5 different clients</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Earnings This Month</CardTitle>
            <DollarSign className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,340</div>
            <p className="text-xs text-zinc-500">+$540 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Profile Rating</CardTitle>
            <Star className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.9/5</div>
            <p className="text-xs text-zinc-500">Based on 48 reviews</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="clients">Recent Clients</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled sessions for today and tomorrow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-zinc-500">Today, April 5, 2025</h3>
                  <div className="space-y-3">
                    {[
                      {
                        client: "John Smith",
                        title: "Business Strategy Consultation",
                        time: "11:00 AM - 12:00 PM",
                        status: "upcoming",
                      },
                      {
                        client: "Emily Rodriguez",
                        title: "Marketing Plan Review",
                        time: "2:00 PM - 3:00 PM",
                        status: "upcoming",
                      },
                      {
                        client: "Michael Chen",
                        title: "Startup Mentoring Session",
                        time: "4:30 PM - 5:30 PM",
                        status: "upcoming",
                      },
                      {
                        client: "Jessica Wong",
                        title: "Quarterly Business Review",
                        time: "6:00 PM - 7:00 PM",
                        status: "upcoming",
                      },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center space-x-4 rounded-md border p-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                          {session.client.charAt(0)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{session.client}</p>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 text-zinc-500 mr-1" />
                              <span className="text-xs text-zinc-500">{session.time}</span>
                            </div>
                          </div>
                          <p className="text-sm text-zinc-500">{session.title}</p>
                        </div>
                        <Button size="sm">Join</Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-zinc-500">Tomorrow, April 6, 2025</h3>
                  <div className="space-y-3">
                    {[
                      {
                        client: "David Lee",
                        title: "Financial Planning Strategy",
                        time: "9:00 AM - 10:00 AM",
                        status: "upcoming",
                      },
                      {
                        client: "Sarah Johnson",
                        title: "Career Development Coaching",
                        time: "1:00 PM - 2:00 PM",
                        status: "upcoming",
                      },
                      {
                        client: "Robert Martinez",
                        title: "Management Consultation",
                        time: "4:00 PM - 5:00 PM",
                        status: "upcoming",
                      },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center space-x-4 rounded-md border p-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                          {session.client.charAt(0)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{session.client}</p>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 text-zinc-500 mr-1" />
                              <span className="text-xs text-zinc-500">{session.time}</span>
                            </div>
                          </div>
                          <p className="text-sm text-zinc-500">{session.title}</p>
                        </div>
                        <Button variant="outline" size="sm">Reschedule</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link href="/expert/sessions">View All Sessions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Clients</CardTitle>
              <CardDescription>Clients you've worked with recently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "John Smith",
                    sessions: 5,
                    lastSession: "Yesterday",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                  },
                  {
                    name: "Emily Rodriguez",
                    sessions: 3,
                    lastSession: "2 days ago",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  },
                  {
                    name: "Michael Chen",
                    sessions: 8,
                    lastSession: "1 week ago",
                    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
                  },
                  {
                    name: "Jessica Wong",
                    sessions: 2,
                    lastSession: "2 weeks ago",
                    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
                  },
                  {
                    name: "David Lee",
                    sessions: 4,
                    lastSession: "3 weeks ago",
                    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6",
                  },
                ].map((client, index) => (
                  <div key={index} className="flex items-center space-x-4 p-2 hover:bg-zinc-50 rounded-md transition-colors">
                    <div className="h-10 w-10 rounded-full bg-zinc-200 overflow-hidden">
                      <img
                        src={`${client.image}?w=160&h=160&auto=format&q=80`}
                        alt={client.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{client.name}</p>
                      <div className="flex items-center text-xs text-zinc-500">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{client.sessions} sessions</span>
                        <span className="mx-2">•</span>
                        <span>Last: {client.lastSession}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 px-2">Message</Button>
                      <Button size="sm" className="h-8 px-2 bg-black hover:bg-zinc-800">Schedule</Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link href="/expert/clients">View All Clients</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings Overview</CardTitle>
              <CardDescription>Your earnings history and upcoming payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center text-center text-zinc-500">
                  <BarChart className="h-16 w-16 mb-2" />
                  <p>Earnings chart will be displayed here</p>
                  <p className="text-xs">Monthly breakdown of your earnings</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium mb-4">Upcoming Payments</h3>
                <div className="space-y-3">
                  {[
                    {
                      amount: "$840",
                      date: "April 15, 2025",
                      sessions: 8,
                      status: "processing",
                    },
                    {
                      amount: "$1,500",
                      date: "May 1, 2025",
                      sessions: 12,
                      status: "scheduled",
                    },
                  ].map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-md">
                      <div>
                        <p className="text-lg font-bold">{payment.amount}</p>
                        <p className="text-xs text-zinc-500">For {payment.sessions} sessions</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{payment.date}</p>
                        <p className={`text-xs ${
                          payment.status === 'processing' ? 'text-blue-600' : 'text-zinc-500'
                        }`}>
                          {payment.status === 'processing' ? 'Processing' : 'Scheduled'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t pt-4">
                  <h3 className="text-sm font-medium mb-4">Payment History</h3>
                  <div className="space-y-3">
                    {[
                      {
                        amount: "$1,500",
                        date: "March 30, 2025",
                        sessions: 15,
                      },
                      {
                        amount: "$1,200",
                        date: "February 28, 2025",
                        sessions: 12,
                      },
                      {
                        amount: "$900",
                        date: "January 30, 2025",
                        sessions: 9,
                      },
                    ].map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                          <p className="text-lg font-bold">{payment.amount}</p>
                          <p className="text-xs text-zinc-500">For {payment.sessions} sessions</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{payment.date}</p>
                          <p className="text-xs text-green-600">Paid</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button asChild variant="outline">
                    <Link href="/expert/earnings">View Detailed Report</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
