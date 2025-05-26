import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex items-center px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          
          {/* LEFT: Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-tight">
              Welcome to <span className="text-blue-500">UrticaScan AI</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              An AI-powered solution to detect Dermatographia Urticaria using image classification and segmentation.
              Instantly upload, detect, and receive treatment guidance — all from your browser.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/predict"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT: Hero Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/src/images/bg.png"
              alt="AI skin analysis illustration"
              className="w-[500px] md:w-[600px] lg:w-[600px] xl:w-[700px] transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Slider Component */}
      <ImageSlider />

      {/* Info Block Below Slider */}
      <div className="mt-16 w-full px-6 md:px-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[900px]">
          
          {/* Left: Project Info */}
          <div>
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Exploring the intersection of Dermatographia Urticaria and Deep Learning:<br /> An edge-cutting approach to condition detection
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Dermatographia, also known as dermographism or skin writing, is a skin condition where scratching or rubbing the skin causes raised, itchy, and sometimes painful lines. It's a type of inducible urticaria, meaning it's triggered by physical contact or pressure on the skin. The condition is common, affecting about 2% to 5% of the population, according to the National Institutes of Health (NIH). 
            </p>
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              onClick={() => alert("Demo coming soon!")}
            >
              Demo
            </button>
          </div>

          {/* Right: Images Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <img
              src="/images/s1.jpg"
              alt="Sample 1"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/s2.jpg"
              alt="Sample 2"
              className="w-full h-40 object-cover rounded-lg shadow-md mt-0"
            />
            <img
              src="/images/s3.png"
              alt="Sample 3"
              className="absolute right-0 bottom-0 w-[60%] h-36 object-cover rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Flowchart Section */}
<div className="mt-16 w-full px-6 md:px-20">
  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left: Flowchart Image */}
    <div className="flex justify-center">
      <img
        src="../src/images/flowchart.png"  // <-- put your flowchart image in public/images/
        alt="Project Flowchart"
        className="w-full max-w-md object-contain rounded-lg shadow-lg"
      />
    </div>

    {/* Right: Description Text */}
    <div>
      <h2 className="text-4xl font-bold text-blue-700 mb-4">How UrticaScan AI Works</h2>
      <p className="text-gray-700 text-lg">
        Our system uses state-of-the-art deep learning techniques for image classification and segmentation to detect Dermatographia Urticaria.
        Upload a skin image, and the AI analyzes it to provide instant detection results, along with treatment recommendations.
      </p>
    </div>
  </div>
</div>
      <footer className="bg-black text-white mt-20 px-6 md:px-20 py-12">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
    
    {/* Branding */}
    <div>
      <h2 className="text-2xl font-bold mb-4">UrticaScan AI</h2>
      <p className="text-sm text-gray-400">
        Revolutionizing skin disease detection with AI-powered image analysis.
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Navigation</h3>
      <ul className="space-y-2 text-gray-300">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/about" className="hover:text-white">About</a></li>
        <li><a href="/predict" className="hover:text-white">Predict</a></li>
        <li><a href="/team" className="hover:text-white">Team</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>Email: akshraj54325@gmail.com</li>
        <li>Phone: +91 98765 43210</li>
        <li>Address: Graphic Era Hill University, Clement Town, Dehradun - 248001</li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
      <ul className="space-y-2 text-gray-300">
        <li><a href="#" className="hover:text-white">GitHub</a></li>
        <li><a href="#" className="hover:text-white">LinkedIn</a></li>
        <li><a href="#" className="hover:text-white">Twitter</a></li>
      </ul>
    </div>

  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} UrticaScan AI. All rights reserved.
  </div>
</footer>
    </div>
    
  );
}
