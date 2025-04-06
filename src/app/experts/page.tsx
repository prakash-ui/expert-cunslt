"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Filter,
  Search,
  Star,
  ChevronDown,
  Clock,
  DollarSign,
  Briefcase,
  BookOpen,
  FileCheck,
  Languages,
  MapPin,
  Check
} from "lucide-react"

const categoryFilters = [
  { id: "all", name: "All Categories" },
  { id: "business", name: "Business" },
  { id: "technology", name: "Technology" },
  { id: "finance", name: "Finance" },
  { id: "marketing", name: "Marketing" },
  { id: "health", name: "Health" },
  { id: "education", name: "Education" },
  { id: "legal", name: "Legal" },
  { id: "creative", name: "Creative" },
]

const priceFilters = [
  { id: "all", name: "Any Price" },
  { id: "under50", name: "Under $50" },
  { id: "50to100", name: "$50 to $100" },
  { id: "100to200", name: "$100 to $200" },
  { id: "over200", name: "Over $200" },
]

const ratingFilters = [
  { id: "all", name: "Any Rating" },
  { id: "4plus", name: "4.0 & Up" },
  { id: "4.5plus", name: "4.5 & Up" },
  { id: "5", name: "5.0 Only" },
]

const mockExperts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Business Strategy Consultant",
    category: "business",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    rating: 4.9,
    reviews: 48,
    hourlyRate: 150,
    experience: "12+ years",
    availability: "Next available: Today",
    bio: "Ex-McKinsey consultant with MBA from Harvard Business School. Specializing in growth strategy, market entry, and organizational design for businesses of all sizes.",
    location: "New York, NY",
    languages: ["English", "French"],
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Software Architect",
    category: "technology",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    rating: 4.8,
    reviews: 36,
    hourlyRate: 200,
    experience: "15+ years",
    availability: "Next available: Tomorrow",
    bio: "Former tech lead at Google with expertise in scalable architecture, cloud solutions, and complex system design. Helping companies build robust and efficient technology solutions.",
    location: "San Francisco, CA",
    languages: ["English", "Mandarin"],
    featured: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Marketing Specialist",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    rating: 4.7,
    reviews: 29,
    hourlyRate: 120,
    experience: "8+ years",
    availability: "Next available: Thursday",
    bio: "Digital marketing expert with experience working with Fortune 500 companies and startups. Specializing in growth marketing, SEO, and social media strategy.",
    location: "Chicago, IL",
    languages: ["English", "Spanish"],
    featured: false,
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Financial Advisor, CFA",
    category: "finance",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    rating: 4.9,
    reviews: 42,
    hourlyRate: 175,
    experience: "10+ years",
    availability: "Next available: Friday",
    bio: "Certified Financial Analyst with experience in investment management, retirement planning, and wealth management. Previously worked at Goldman Sachs.",
    location: "Boston, MA",
    languages: ["English"],
    featured: false,
  },
  {
    id: 5,
    name: "Dr. Robert Kim",
    title: "Clinical Psychologist",
    category: "health",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    rating: 5.0,
    reviews: 52,
    hourlyRate: 160,
    experience: "14+ years",
    availability: "Next available: Monday",
    bio: "Licensed clinical psychologist specializing in anxiety, depression, and stress management. Using evidence-based approaches to help individuals achieve better mental wellbeing.",
    location: "Los Angeles, CA",
    languages: ["English", "Korean"],
    featured: true,
  },
  {
    id: 6,
    name: "Alex Thompson",
    title: "Legal Consultant",
    category: "legal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    rating: 4.6,
    reviews: 31,
    hourlyRate: 180,
    experience: "9+ years",
    availability: "Next available: Wednesday",
    bio: "Corporate lawyer with expertise in contract law, intellectual property, and business formation. Helping entrepreneurs and businesses navigate legal complexities.",
    location: "Washington, DC",
    languages: ["English"],
    featured: false,
  },
]

export default function ExpertsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [filtersVisible, setFiltersVisible] = useState(false)

  // Apply filters to experts
  const filteredExperts = mockExperts.filter(expert => {
    // Search filter
    if (searchQuery && !expert.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !expert.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !expert.bio.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Category filter
    if (categoryFilter !== "all" && expert.category !== categoryFilter) {
      return false
    }

    // Price filter
    if (priceFilter === "under50" && expert.hourlyRate >= 50) return false
    if (priceFilter === "50to100" && (expert.hourlyRate < 50 || expert.hourlyRate > 100)) return false
    if (priceFilter === "100to200" && (expert.hourlyRate < 100 || expert.hourlyRate > 200)) return false
    if (priceFilter === "over200" && expert.hourlyRate <= 200) return false

    // Rating filter
    if (ratingFilter === "4plus" && expert.rating < 4) return false
    if (ratingFilter === "4.5plus" && expert.rating < 4.5) return false
    if (ratingFilter === "5" && expert.rating < 5) return false

    return true
  })

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Find an Expert</h1>
          <p className="text-zinc-600 mt-2">Connect with verified professionals in various fields</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setFiltersVisible(!filtersVisible)}
          >
            <Filter className="h-4 w-4" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${filtersVisible ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input
            className="pl-10"
            placeholder="Search by expert name, specialty, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filtersVisible && (
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categoryFilters.map((filter) => (
                    <label key={filter.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === filter.id}
                        onChange={() => setCategoryFilter(filter.id)}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <span className="text-sm">{filter.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceFilters.map((filter) => (
                    <label key={filter.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceFilter === filter.id}
                        onChange={() => setPriceFilter(filter.id)}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <span className="text-sm">{filter.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {ratingFilters.map((filter) => (
                    <label key={filter.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={ratingFilter === filter.id}
                        onChange={() => setRatingFilter(filter.id)}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <span className="text-sm">{filter.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="mr-2"
                onClick={() => {
                  setCategoryFilter("all")
                  setPriceFilter("all")
                  setRatingFilter("all")
                }}
              >
                Reset Filters
              </Button>
              <Button
                size="sm"
                className="bg-black hover:bg-zinc-800"
                onClick={() => setFiltersVisible(false)}
              >
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperts.length > 0 ? (
          filteredExperts.map((expert) => (
            <Card key={expert.id} className={`overflow-hidden ${expert.featured ? 'border-blue-200 bg-blue-50/30' : ''}`}>
              {expert.featured && (
                <div className="bg-blue-600 text-white text-xs px-3 py-1 flex items-center justify-center">
                  <Check className="h-3 w-3 mr-1" /> Featured Expert
                </div>
              )}
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-between items-end">
                      <h3 className="text-white font-medium truncate">{expert.name}</h3>
                      <div className="flex items-center bg-white text-yellow-500 text-xs rounded px-2 py-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="ml-1 text-zinc-800 font-medium">{expert.rating}</span>
                        <span className="ml-1 text-zinc-500">({expert.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-sm text-zinc-600 mb-3">{expert.title}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs">
                      <DollarSign className="h-3 w-3 text-zinc-500 mr-2" />
                      <span className="font-medium">${expert.hourlyRate}</span>
                      <span className="text-zinc-500 ml-1">/ hour</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Briefcase className="h-3 w-3 text-zinc-500 mr-2" />
                      <span>{expert.experience}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Clock className="h-3 w-3 text-zinc-500 mr-2" />
                      <span>{expert.availability}</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <MapPin className="h-3 w-3 text-zinc-500 mr-2 mt-0.5" />
                      <span>{expert.location}</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <Languages className="h-3 w-3 text-zinc-500 mr-2 mt-0.5" />
                      <span>{expert.languages.join(", ")}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 mb-4 line-clamp-3">
                    {expert.bio}
                  </p>

                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={`/experts/${expert.id}`}>View Profile</Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1 bg-black hover:bg-zinc-800">
                      <Link href={`/experts/${expert.id}/book`}>
                        <Calendar className="h-3 w-3 mr-1" />
                        Book
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-3 py-12 text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
              <Search className="h-12 w-12 text-zinc-300" />
            </div>
            <h3 className="text-lg font-medium mb-2">No experts found</h3>
            <p className="text-zinc-500 max-w-md mx-auto mb-6">
              We couldn't find any experts matching your criteria. Try adjusting your filters or search query.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setCategoryFilter("all")
                setPriceFilter("all")
                setRatingFilter("all")
              }}
            >
              Reset All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
