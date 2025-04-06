import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero section */}
      <section className="py-16 md:py-24">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Connect with Top Experts in Minutes
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get personalized advice from verified professionals in various fields.
              Book sessions, chat in real-time, and solve your challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/experts">Find an Expert</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/become-expert">Become an Expert</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
              {['Verified Experts', 'Secure Payments', 'Money-back Guarantee'].map((item) => (
                <div key={item} className="flex items-center">
                  <Check className="text-green-500 mr-2 h-5 w-5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-1">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:shadow-2xl ">
                  <img
                    src="https://cdn.pixabay.com/photo/2019/04/23/04/50/consulting-4148449_1280.jpg"
                    alt="Expert consultation"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Consultation</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get professional advice tailored to your needs. Book a one-on-one session with an expert today.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Cunslt Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get the advice you need in three simple steps - find, book, and connect with experts in your field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Find Your Expert",
                description: "Browse through profiles of verified experts across multiple fields. Read reviews, check credentials, and find the perfect match."
              },
              {
                number: "2",
                title: "Book a Session",
                description: "Schedule a one-on-one consultation at a time that works for you. Choose between video, audio, or chat sessions."
              },
              {
                number: "3",
                title: "Connect and Solve",
                description: "Meet your expert and get personalized advice to solve your challenges. Follow up with questions and track your progress."
              }
            ].map((step) => (
              <div key={step.number} className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert categories section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Expert Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find specialists in various fields ready to provide personalized advice and solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Business", icon: "📊", link: "/experts/business" },
              { title: "Technology", icon: "💻", link: "/experts/technology" },
              { title: "Finance", icon: "💰", link: "/experts/finance" },
              { title: "Marketing", icon: "📱", link: "/experts/marketing" },
              { title: "Health", icon: "🩺", link: "/experts/health" },
              { title: "Education", icon: "🎓", link: "/experts/education" },
              { title: "Legal", icon: "⚖️", link: "/experts/legal" },
              { title: "Creative", icon: "🎨", link: "/experts/creative" },
            ].map((category) => (
              <Link
                key={category.title}
                href={category.link}
                className="bg-secondary hover:bg-secondary/80 border rounded-lg p-6 text-center transition-colors"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-medium">{category.title}</h3>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/experts">View All Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read testimonials from people who have transformed their challenges into opportunities with Cunslt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                text: "Working with a business consultant on Cunslt helped me restructure my operations and increase revenue by 30% in just three months.",
              },
              {
                name: "Michael Chen",
                role: "Software Developer",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                text: "The tech experts on Cunslt helped me solve a complex architecture problem I'd been struggling with for weeks, in just one session.",
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Manager",
                image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                text: "I was able to develop and launch a new campaign with guidance from a marketing expert on Cunslt. The results exceeded our expectations.",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">"{testimonial.text}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect with Experts?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of people who are solving their challenges with help from top professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/signup">Create an Account</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/experts">Browse Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
