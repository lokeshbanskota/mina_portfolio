import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">NutriConsult</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#quotes" className="text-gray-700 hover:text-green-600 transition-colors">Inspiration</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
            <a href="#blog" className="text-gray-700 hover:text-green-600 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Life Through Nutrition</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl">Personalized virtual diet consultations to help you achieve your health and wellness goals</p>
          <a 
            href="#contact" 
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors"
          >
            Book a Consultation
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-500 shadow-xl">
                <Image 
                  src="/placeholder.svg?height=400&width=400" 
                  alt="Nutrition Consultant" 
                  width={400} 
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Hi, I'm Sarah Johnson</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As a certified nutritionist with over 8 years of experience, I'm passionate about helping people transform their relationship with food and achieve their health goals. I believe that nutrition is not just about eating the right foods, but understanding how your body responds to them.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                My approach is personalized and holistic. I don't believe in one-size-fits-all diet plans. Instead, I work closely with each client to develop customized nutrition strategies that fit their lifestyle, preferences, and health objectives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With my virtual consultation services, I've helped hundreds of clients worldwide achieve sustainable weight management, improve their energy levels, manage chronic conditions, and develop healthier eating habits that last a lifetime.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <span className="block text-green-600 font-bold text-xl">500+</span>
                  <span className="text-sm text-gray-600">Happy Clients</span>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <span className="block text-green-600 font-bold text-xl">8+</span>
                  <span className="text-sm text-gray-600">Years Experience</span>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <span className="block text-green-600 font-bold text-xl">5</span>
                  <span className="text-sm text-gray-600">Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Nutritional Inspiration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <svg className="w-10 h-10 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-4 italic">
                "Let food be thy medicine and medicine be thy food."
              </p>
              <p className="text-green-600 font-semibold">- Hippocrates</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <svg className="w-10 h-10 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-4 italic">
                "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison."
              </p>
              <p className="text-green-600 font-semibold">- Ann Wigmore</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <svg className="w-10 h-10 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-4 italic">
                "Take care of your body. It's the only place you have to live."
              </p>
              <p className="text-green-600 font-semibold">- Jim Rohn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">My Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="/placeholder.svg?height=600&width=800" 
                  alt="Virtual Diet Consultation" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Virtual Diet Consultation</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  My comprehensive virtual consultations provide personalized nutrition guidance from the comfort of your home. Through video calls, we'll discuss your health history, lifestyle, goals, and dietary preferences to create a tailored nutrition plan that works for you.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Initial 60-minute comprehensive assessment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Customized nutrition plan
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Meal planning assistance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Follow-up sessions for progress tracking
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Book Consultation
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="/placeholder.svg?height=600&width=800" 
                  alt="Meal Planning Service" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Personalized Meal Planning</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Struggling with what to eat each day? My personalized meal planning service takes the guesswork out of healthy eating. I'll create weekly meal plans tailored to your nutritional needs, food preferences, and lifestyle.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Weekly customized meal plans
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Grocery shopping lists
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Simple, delicious recipes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Accommodations for dietary restrictions
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Superfoods for Energy" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">Nutrition</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">10 Superfoods to Boost Your Energy Naturally</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Discover the top 10 nutrient-dense superfoods that can help increase your energy levels throughout the day without relying on caffeine or sugar.
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">Read More →</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Meal Prep Tips" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">Meal Planning</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">The Ultimate Guide to Meal Prep for Busy Professionals</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Learn how to efficiently prepare healthy meals for the entire week in just a few hours, saving you time and helping you stay on track with your nutrition goals.
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">Read More →</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Mindful Eating" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">Wellness</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">Mindful Eating: How to Develop a Healthier Relationship with Food</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Explore the practice of mindful eating and how it can help you enjoy your food more, recognize hunger cues, and make better nutritional choices.
                </p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">Read More →</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-block border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              View All Blog Posts
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">What My Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mr-4">
                  J
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Jennifer L.</h4>
                  <p className="text-sm text-gray-500">Weight Management Client</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working with Sarah has been life-changing. Her personalized approach helped me lose 20 pounds and keep it off. The virtual consultations fit perfectly into my busy schedule!"
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Michael T.</h4>
                  <p className="text-sm text-gray-500">Sports Nutrition Client</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Sarah's nutrition plan helped me improve my athletic performance significantly. Her knowledge of sports nutrition is impressive, and she tailored everything to my training schedule."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461\

\

