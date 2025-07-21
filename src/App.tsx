import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { 
  Smartphone, 
  Users, 
  TrendingUp, 
  Leaf, 
  Cloud, 
  Sun, 
  CloudRain,
  ArrowRight,
  Globe,
  Zap,
  BarChart3,
  Shield
} from 'lucide-react'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Farming App",
      description: "AI-powered mobile platform connecting farmers to digital agriculture solutions"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Weather Intelligence",
      description: "Real-time weather data and predictive analytics for optimal farming decisions"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Market Analytics",
      description: "Live market prices and demand forecasting to maximize farmer profits"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Crop Protection",
      description: "Early disease detection and pest management through satellite monitoring"
    }
  ]

  const partners = [
    "Vodacom", "Yara", "USAID", "Mastercard Foundation", "AgriProFocus", "TechnoServe"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center">
          <Leaf className="w-3 h-3 text-white" />
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/70 border-b border-white/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              M-Kulima
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
            <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">Impact</a>
            <a href="#partners" className="text-gray-700 hover:text-green-600 transition-colors">Partners</a>
            <Button 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y: y1 }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-400 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                Digital Farming
              </span>
              <br />
              <span className="text-gray-900">for Africa</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Empowering African farmers with AI-powered mobile technology, real-time market data, and sustainable farming solutions.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Download App
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-200 text-green-700 hover:bg-green-50 px-8 py-6 text-lg"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div>
                <div className="text-3xl font-bold text-green-600">2M+</div>
                <div className="text-gray-600">Vodacom Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">900K+</div>
                <div className="text-gray-600">Yara Farmers</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ y: y2 }}
          >
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sun className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <CloudRain className="w-8 h-8 text-white" />
              </motion.div>

              {/* Phone Mockup */}
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-medium text-gray-700">M-Kulima</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                          <Sun className="w-6 h-6 text-yellow-500" />
                          <div>
                            <div className="font-medium text-gray-900">Today's Weather</div>
                            <div className="text-sm text-gray-600">28°C, Sunny</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                          <TrendingUp className="w-6 h-6 text-green-500" />
                          <div>
                            <div className="font-medium text-gray-900">Maize Price</div>
                            <div className="text-sm text-gray-600">TSh 800/kg ↗️</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                          <Leaf className="w-6 h-6 text-green-500" />
                          <div>
                            <div className="font-medium text-gray-900">Crop Health</div>
                            <div className="text-sm text-gray-600">Excellent condition</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing <span className="text-green-600">Agriculture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides farmers with the tools they need to increase productivity, reduce costs, and build sustainable farming practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted Partners</h2>
            <p className="text-xl text-gray-600">Working with leading organizations to transform African agriculture</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="text-lg font-semibold text-gray-700">{partner}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join thousands of farmers already using M-Kulima to increase their yields and profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Download Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">M-Kulima</span>
              </div>
              <p className="text-gray-400">
                Empowering African farmers with digital technology for sustainable agriculture.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 M-Kulima by Addrone Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App