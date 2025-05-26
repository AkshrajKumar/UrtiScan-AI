import React from "react";

const aboutData = {
  dermatographia: {
    title: "Dermatographia Urticaria",
    description:
      "Dermatographia Urticaria is a skin condition characterized by raised red lines or welts that appear after the skin is scratched or rubbed. It is a form of physical urticaria caused by an exaggerated release of histamine from skin cells. Symptoms include itching, redness, and swelling.",
    image:
      "../src/images/dermo.jpg",
  },
  diseasesCovered: {
    title: "Diseases Covered",
    items: [
      "Dermatographia Urticaria",
      "Atopic Dermatitis",
      "Psoriasis",
      "Contact Dermatitis",
      "Eczema",
      "Rosacea",
    ],
  },
  classification: {
    title: "Classification Working",
    description:
      "The project uses deep learning models, such as ResNet50, to classify skin disease images based on extracted features. The model analyzes the uploaded images and predicts the most likely disease with confidence scores.",
    image:
      "../src/images/res50.png",
  },
  segmentation: {
    title: "Segmentation Working",
    description:
      "Segmentation is performed to identify the affected skin areas precisely. U-Net based architectures are used to generate masks that highlight the lesion boundaries, assisting in detailed analysis and treatment planning.",
    image:
      "../src/images/resunet.png",
  },
  technologies: {
    title: "Technologies Used",
    frontend: ["React.js", "Tailwind CSS", "Vite.js"],
    backend: ["FastAPI", "TensorFlow", "Python"],
    others: ["Docker", "Git", "AWS"],
  },
};

export default function About() {
  return (
    <div className="scroll-smooth">
      {/* Block 1 - Dermatographia */}
      <section
        id="dermatographia"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-900 text-white px-10 md:px-20"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            {aboutData.dermatographia.title}
          </h1>
          <p className="text-xl leading-relaxed max-w-lg drop-shadow-md">
            {aboutData.dermatographia.description}
          </p>
        </div>
        <div className="md:w-1/2">
          <img
  src={aboutData.dermatographia.image}
  alt="Dermatographia Urticaria"
  className="rounded-3xl shadow-2xl object-cover border-8 border-white"
  style={{ width: "400px", height: "auto" }}
  loading="lazy"
/>

        </div>
      </section>

      {/* Block 2 - Diseases Covered */}
      <section
        id="diseases"
        className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100 flex flex-col items-center justify-center px-12 text-indigo-900"
      >
        <h2 className="text-6xl font-bold mb-12 tracking-wide">Diseases Covered</h2>
        <ul className="text-3xl list-disc list-inside max-w-3xl space-y-6">
          {aboutData.diseasesCovered.items.map((disease, i) => (
            <li key={i} className="hover:text-purple-600 transition-colors cursor-pointer">
              {disease}
            </li>
          ))}
        </ul>
      </section>

      {/* Block 3 - Classification */}
      <section
        id="classification"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-900 text-white px-10 md:px-20"
      >
        <div className="md:w-1/2 order-2 md:order-1">
          <img
            src={aboutData.classification.image}
            alt="Classification Working"
            className="rounded-3xl shadow-2xl max-w-full max-h-[500px] object-cover border-8 border-white"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 order-1 md:order-2 mb-10 md:mb-0 md:pl-16">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            {aboutData.classification.title}
          </h2>
          <p className="text-xl leading-relaxed max-w-lg drop-shadow-md">
            {aboutData.classification.description}
          </p>
        </div>
      </section>

      {/* Block 4 - Segmentation */}

      {/* Block 5 - Technologies */}
      <section
        id="technologies"
        className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100 flex flex-col items-center justify-center px-12 text-indigo-900"
      >
        <h2 className="text-6xl font-extrabold mb-14 tracking-wide">Technologies Used</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl w-full text-center">
          <div>
            <h3 className="text-4xl font-semibold mb-6 border-b-2 border-purple-600 pb-2">
              Frontend
            </h3>
            <ul className="text-2xl space-y-3">
              {aboutData.technologies.frontend.map((tech, i) => (
                <li key={i} className="hover:text-purple-700 cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-semibold mb-6 border-b-2 border-purple-600 pb-2">
              Backend
            </h3>
            <ul className="text-2xl space-y-3">
              {aboutData.technologies.backend.map((tech, i) => (
                <li key={i} className="hover:text-purple-700 cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-semibold mb-6 border-b-2 border-purple-600 pb-2">
              Others
            </h3>
            <ul className="text-2xl space-y-3">
              {aboutData.technologies.others.map((tech, i) => (
                <li key={i} className="hover:text-purple-700 cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        id="segmentation"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 text-white px-10 md:px-20"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            {aboutData.segmentation.title}
          </h2>
          <p className="text-xl leading-relaxed max-w-lg drop-shadow-md">
            {aboutData.segmentation.description}
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={aboutData.segmentation.image}
            alt="Segmentation Working"
            className="rounded-3xl shadow-2xl max-w-full max-h-[500px] object-cover border-8 border-white"
            loading="lazy"
          />
        </div>
      </section>
      <footer className="bg-black text-white mt-0 px-6 md:px-20 py-12">
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
