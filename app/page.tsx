"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Star,
  Users,
  Award,
  Droplets,
  Menu,
  X,
  ChevronDown,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  Quote,
  Factory,
  Beaker,
  Heart,
  ArrowRight,
  TrendingUp,
  Globe,
} from "lucide-react"

export default function SnijalAquaWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [counters, setCounters] = useState({
    customers: 0,
    bottles: 0,
    cities: 0,
    years: 0,
  })

  // Animated counters
  useEffect(() => {
    const targets = { customers: 10000, bottles: 500000, cities: 25, years: 1 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      return setInterval((interval) => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(intervals.find((i) => i === interval))
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, stepTime)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleWhatsAppOrder = (size: string) => {
    const message = encodeURIComponent(`Hi SNIJAL AQUA, I'm interested in the ${size} pack.`)
    window.open(`https://wa.me/919270212113?text=${message}`, "_blank")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "process", label: "Our Process" },
    { id: "about", label: "About Us" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Droplets className="h-10 w-10 text-[rgb(1,117,203)]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">SNIDESH INDIA</h1>
                <p className="text-xs text-[rgb(1,117,203)] font-medium">Premium Water Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-[rgb(1,117,203)] ${
                    activeSection === item.id ? "text-[rgb(1,117,203)]" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex flex-col items-end space-y-1 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[rgb(1,117,203)]" />
                  <span className="text-gray-700 font-medium">+91 9270212113</span>
                </div>
                <div className="text-gray-600 text-xs">admin@snideshinfo.com</div>
              </div>

              <Button
                size="sm"
                className="bg-[rgb(1,117,203)] hover:bg-[rgb(1,100,180)] text-white shadow-lg"
                onClick={() => handleWhatsAppOrder("premium pack")}
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Order Now</span>
              </Button>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-[rgb(1,117,203)] font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <Phone className="h-4 w-4 text-[rgb(1,117,203)]" />
                    <span>+91 9270212113</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">admin@snideshinfo.com</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>


      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23e0f2fe&quot; fillOpacity=&quot;0.3&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-[rgb(1,117,203)]/10 text-[rgb(1,117,203)] border-[rgb(1,117,203)]/20 px-4 py-2">
              ✨ Premium Quality Water Since 2024
            </Badge>
            <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Pure hydration from
              <span className="block text-[rgb(1,117,203)] relative">
                SNIJAL AQUA
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[rgb(1,117,203)] to-blue-400 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the purest form of hydration with our premium bottled water, sourced from the finest natural
              springs and processed with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-[rgb(1,117,203)] hover:bg-[rgb(1,100,180)] text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => handleWhatsAppOrder("premium pack")}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Order on WhatsApp
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[rgb(1,117,203)] text-[rgb(1,117,203)] hover:bg-[rgb(1,117,203)] hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open("tel:+919876543210")}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Stats Counter */}
   <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative overflow-hidden">
      {/* Background decorative elements */}
    
      {[
        {
          label: "Is Our First Priority",
          value: "Your Satisfaction",
          icon: "🤝",
          gradient: "from-emerald-400 to-cyan-500",
          shadow: "shadow-emerald-200/50"
        },
        {
          label: "Quality Assured",
          value: "In Every Bottle",
          icon: "💧",
          gradient: "from-blue-400 to-indigo-500",
          shadow: "shadow-blue-200/50"
        },
        {
          label: "Locally Rooted",
          value: "Serving Now",
          icon: "📍",
          gradient: "from-purple-400 to-pink-500",
          shadow: "shadow-purple-200/50"
        },
        {
          label: "Built on Trust",
          value: "New Beginnings",
          icon: "🚀",
          gradient: "from-orange-400 to-red-500",
          shadow: "shadow-orange-200/50"
        },
      ].map((stat, index) => (
        <div
          key={index}
          className={`bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl ${stat.shadow} rounded-3xl p-8 text-center transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-3xl hover:bg-white/90 group cursor-pointer relative overflow-hidden`}
        >
          {/* Card shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className={`mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} text-3xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
            {stat.icon}
          </div>
          
          <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2 transform transition-all duration-300 group-hover:scale-105">
            {stat.value}
          </h3>
          
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-3 transform transition-all duration-300 group-hover:w-24"></div>
          
          <p className="text-sm text-slate-600 font-medium tracking-wide uppercase transform transition-all duration-300 group-hover:text-slate-700">
            {stat.label}
          </p>
          
          {/* Floating particles effect */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
        </div>
      ))}
    </div>


          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-[rgb(1,117,203)]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose SNIJAL AQUA?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We don't just bottle water, we deliver purity, health, and trust in every drop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Pure",
                desc: "Advanced filtration ensures maximum purity",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Same-day delivery in major cities",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Award,
                title: "ISO Certified",
                desc: "International quality standards",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: Heart,
                title: "Health First",
                desc: "Essential minerals for your wellbeing",
                color: "bg-red-100 text-red-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Bottle Showcase */}
      <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[rgb(1,117,203)]/10 text-[rgb(1,117,203)] border-[rgb(1,117,203)]/20">
              Our Products
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Premium Water Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose from our range of premium bottled water, perfect for every occasion and lifestyle need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                size: "200 ml",
                quantity: "48 bottles per box",
                ideal: "Quick hydration",
                features: ["Perfect for travel", "Pocket-friendly", "Single serving"],
                popular: false,
              },
              {
                size: "500 ml",
                quantity: "24 bottles per box",
                ideal: "Daily use",
                features: ["Most popular", "Perfect for office", "Great value"],
                popular: true,
              },
              {
                size: "1 L",
                quantity: "12 bottles per box",
                ideal: "Family pack",
                features: ["Family sharing", "Home & office", "Best value"],
                popular: false,
              },
            ].map((bottle, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-4 relative ${bottle.popular ? "ring-2 ring-[rgb(1,117,203)] ring-opacity-50" : ""}`}
              >
                {bottle.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[rgb(1,117,203)] text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="mb-8">
                    <div className="w-32 h-48 mx-auto bg-gradient-to-b from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <Droplets className="h-20 w-20 text-[rgb(1,117,203)]" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{bottle.size}</h3>
                    <p className="text-[rgb(1,117,203)] font-bold text-2xl mb-2">{bottle.quantity}</p>
                    <p className="text-gray-600 font-medium">{bottle.ideal}</p>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {bottle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 justify-center">
                    <Button
                      className="bg-[rgb(1,117,203)] hover:bg-[rgb(1,100,180)] text-white flex-1 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      onClick={() => handleWhatsAppOrder(bottle.size)}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Order Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[rgb(1,117,203)] text-[rgb(1,117,203)] hover:bg-[rgb(1,117,203)] hover:text-white shadow-lg hover:shadow-xl"
                      onClick={() =>
                        window.open(`mailto:admin@snideshinfo.com?subject=Inquiry about ${bottle.size} bottles`)
                      }
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[rgb(1,117,203)] text-[rgb(1,117,203)] hover:bg-[rgb(1,117,203)] hover:text-white shadow-lg hover:shadow-xl"
                      onClick={() => window.open('tel:+919270212113')}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[rgb(1,117,203)]/10 text-[rgb(1,117,203)] border-[rgb(1,117,203)]/20">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">From Source to You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover how we ensure every drop meets the highest standards of purity and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Droplets,
                title: "Natural Sourcing",
                desc: "Pure water from protected natural springs",
                step: "01",
              },
              { icon: Beaker, title: "Advanced Filtration", desc: "Multi-stage purification process", step: "02" },
              { icon: Factory, title: "Quality Testing", desc: "Rigorous quality control at every stage", step: "03" },
              { icon: Truck, title: "Safe Delivery", desc: "Hygienic packaging and fast delivery", step: "04" },
            ].map((process, index) => (
              <div key={index} className="relative">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="absolute -top-4 left-4">
                      <div className="w-8 h-8 bg-[rgb(1,117,203)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {process.step}
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-blue-100 text-[rgb(1,117,203)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <process.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600">{process.desc}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-[rgb(1,117,203)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[rgb(1,117,203)]/10 text-[rgb(1,117,203)] border-[rgb(1,117,203)]/20">
              About Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Our Story & Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
              Started in Pune, 2024, SNIDESH INDIA PVT LTD has been committed to serving West & South India with the
              purest bottled water. Our mission is to provide premium quality hydration solutions that meet the highest
              standards of purity and taste, while building lasting relationships with our customers.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {[
                { icon: Award, label: "ISO Certified", desc: "International Standards" },
                { icon: Users, label: "10,000+ Customers", desc: "And Growing Daily" },
                { icon: Globe, label: "25+ Cities", desc: "Across India" },
                { icon: TrendingUp, label: "100% Growth", desc: "Year over Year" },
              ].map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-2xl">
                  <achievement.icon className="h-8 w-8 text-[rgb(1,117,203)]" />
                  <div className="text-left">
                    <div className="font-bold text-gray-900">{achievement.label}</div>
                    <div className="text-sm text-gray-600">{achievement.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "PRIYANKA BANSODE",
                position: "Director",
              },
              {
                name: "PALLAVI SHARMA",
                position: "Director",
              },
              {
                name: "ANJALI KULKARNI",
                position: "Director",
              },
              {
                name: "Swati Kalyankar",
                position: "Director",
              },
            ].map((director, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[rgb(1,117,203)] to-blue-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {director.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{director.name}</h3>
                  <p className="text-[rgb(1,117,203)] text-sm font-semibold mb-4">{director.position}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <Button size="icon" variant="outline" className="border-[rgb(1,117,203)] text-[rgb(1,117,203)] hover:bg-[rgb(1,117,203)] hover:text-white" onClick={() => window.open('https://wa.me/919270212113', '_blank')} title="WhatsApp">
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-[rgb(1,117,203)] text-[rgb(1,117,203)] hover:bg-[rgb(1,117,203)] hover:text-white" onClick={() => window.open('tel:+919270212113')} title="Call">
                      <Phone className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-[rgb(1,117,203)] text-[rgb(1,117,203)] hover:bg-[rgb(1,117,203)] hover:text-white" onClick={() => window.open('mailto:admin@snideshinfo.com')} title="Email">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[rgb(1,117,203)]/10 text-[rgb(1,117,203)] border-[rgb(1,117,203)]/20">
              Get In Touch
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions about our products or want to place a bulk order? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Enhanced Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <Input
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-gray-200 focus:border-[rgb(1,117,203)] focus:ring-[rgb(1,117,203)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-gray-200 focus:border-[rgb(1,117,203)] focus:ring-[rgb(1,117,203)]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-gray-200 focus:border-[rgb(1,117,203)] focus:ring-[rgb(1,117,203)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Concern</label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-gray-200 focus:border-[rgb(1,117,203)] focus:ring-[rgb(1,117,203)] min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[rgb(1,117,203)] hover:bg-[rgb(1,100,180)] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info and Map */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[rgb(1,117,203)]/10 rounded-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-[rgb(1,117,203)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Address</p>
                        <p className="text-gray-600">Snidesh Info Pvt. Ltd,  Business District, City Pune, Maharashtra 411001</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[rgb(1,117,203)]/10 rounded-xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-[rgb(1,117,203)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Phone</p>
                        <p className="text-gray-600">+91 9270212113</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[rgb(1,117,203)]/10 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-[rgb(1,117,203)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                        <p className="text-gray-600">admin@snideshinfo.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[rgb(1,117,203)]/10 rounded-xl flex items-center justify-center">
                        <Clock className="h-6 w-6 text-[rgb(1,117,203)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Business Hours</p>
                        <p className="text-gray-600">Mon - Sun: 9:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Map */}
              <Card className="border-0 shadow-xl">
  <CardContent className="p-0">
    <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d507.98212749373306!2d73.90583747606473!3d18.59115006118564!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7ec34385aa5%3A0xa488cd8a41764232!2sSnidesh%20info%20india%20private%20limited!5e1!3m2!1sen!2sin!4v1750428382233!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </CardContent>
</Card>

            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Droplets className="h-10 w-10 text-[rgb(1,117,203)]" />
                <div>
                  <h3 className="font-bold text-2xl">SNIDESH INDIA</h3>
                  <p className="text-sm text-gray-400">Premium Water Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Premium quality bottled water serving West & South India with the purest hydration solutions. Your
                health and satisfaction are our top priorities.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => handleWhatsAppOrder("any product")}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-black hover:bg-gray-800 hover:text-white"
                  onClick={() => window.open("tel:+919876543210")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="hover:text-white transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 9270212113</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>admin@snideshinfo.com</span>
                </p>
                <p className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>Pune, Maharashtra</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SNIDESH INDIA PVT LTD. All rights reserved. | Made with ❤️ for pure hydration</p>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 "
          onClick={() => handleWhatsAppOrder("any product")}
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
        
      </div>
    </div>
  )
}
