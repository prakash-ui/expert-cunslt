import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  DollarSign,
  MessageSquare,
  Star,
  TrendingUp,
  Users
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-zinc-500">Welcome back, John! Here's an overview of your account.</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard/experts">Find an Expert</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard/sessions/new">Book a Session</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-zinc-500">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
            <Clock className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-zinc-500">Next session in 2 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-zinc-500">From 2 conversations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Spent This Month</CardTitle>
            <DollarSign className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$350</div>
            <p className="text-xs text-zinc-500">+$150 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
            <CardDescription>You have 3 upcoming sessions scheduled.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  expert: "Dr. Sarah Johnson",
                  title: "Business Strategy Consultation",
                  date: "April 7, 2025",
                  time: "10:00 AM - 11:00 AM",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                },
                {
                  expert: "Michael Chen",
                  title: "Tech Architecture Review",
                  date: "April 10, 2025",
                  time: "2:00 PM - 3:30 PM",
                  image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
                },
                {
                  expert: "Emma Rodriguez",
                  title: "Marketing Strategy Session",
                  date: "April 15, 2025",
                  time: "11:00 AM - 12:00 PM",
                  image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56"
                },
              ].map((session, index) => (
                <div key={index} className="flex items-center space-x-4 rounded-md border p-4">
                  <div className="h-10 w-10 rounded-full bg-zinc-200 overflow-hidden">
                    <img
                      src={`${session.image}?w=160&h=160&auto=format&q=80`}
                      alt={session.expert}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{session.expert}</p>
                      <div className="flex items-center gap-1 text-zinc-500">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">{session.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500">{session.title}</p>
                    <div className="flex items-center gap-1 text-zinc-500">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{session.time}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Join</Button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button asChild variant="link" size="sm">
                <Link href="/dashboard/sessions">View all sessions</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Recently Used Experts</CardTitle>
            <CardDescription>Experts you've worked with recently.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Business Strategy Consultant",
                  rating: 5,
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                },
                {
                  name: "Michael Chen",
                  role: "Software Architect",
                  rating: 4.8,
                  image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
                },
                {
                  name: "Emma Rodriguez",
                  role: "Marketing Specialist",
                  rating: 4.9,
                  image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56"
                },
              ].map((expert, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-zinc-200 overflow-hidden">
                    <img
                      src={`${expert.image}?w=160&h=160&auto=format&q=80`}
                      alt={expert.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{expert.name}</p>
                    <p className="text-xs text-zinc-500">{expert.role}</p>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="ml-1 text-xs text-zinc-600">{expert.rating}</span>
                  </div>
                  <Button variant="outline" size="sm">Book</Button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button asChild variant="link" size="sm">
                <Link href="/dashboard/experts">Find more experts</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Activity</CardTitle>
            <CardDescription>Your platform usage over time.</CardDescription>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center">
            <div className="flex flex-col items-center text-center text-zinc-500">
              <TrendingUp className="h-10 w-10 mb-2" />
              <p>Activity chart will be displayed here</p>
              <p className="text-xs">Sessions, messages, and resource usage</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>Based on your interests and past sessions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Financial Planning Workshop",
                  expert: "James Wilson, CFA",
                  category: "Finance",
                  participants: 24
                },
                {
                  title: "Digital Marketing Masterclass",
                  expert: "Sophia Lee",
                  category: "Marketing",
                  participants: 42
                },
              ].map((event, index) => (
                <div key={index} className="flex items-center space-x-4 rounded-md border p-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    {event.category.charAt(0)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-zinc-500">By {event.expert}</p>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-zinc-400" />
                      <span className="text-xs text-zinc-500">{event.participants} enrolled</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
