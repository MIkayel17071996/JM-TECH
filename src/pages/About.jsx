import CallToAction from '../components/CallToAction.jsx';

const About = () => {
  return (
    <>
      <title>About  | JM TECH</title>

      <div className="page max-w-6xl mx-auto px-6 py-16 text-white font-['Inter',_sans-serif] bg-[#0D0D0D] rounded-lg shadow-2xl relative overflow-x-hidden">
        <div className="aurora-container fixed inset-0 z-[-1]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-10 text-[#FBBF24] text-center tracking-tight">
            About JM TECH
          </h1>

          <p className="mb-10 text-xl leading-relaxed text-gray-200 text-center max-w-4xl mx-auto text-balance">
            <strong>JM TECH</strong> is a newly established technology company born from a shared vision among experienced professionals who have spent years delivering high-quality software solutions across industries. While the brand is new, the expertise behind it is anything but.
          </p>

          <div className="border-t border-gray-700/50 my-12"></div>

          <section className="mb-14">
            <h2 className="text-4xl font-bold mb-6 text-[#FBBF24] text-center">Why We Started</h2>
            <p className="text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto text-center text-balance">
              After years of working in different organizations, collaborating on complex projects, and contributing to successful products around the world, we recognized a common desire: to do more. To build solutions with greater freedom, deeper care, and a stronger focus on long-term impact. That’s why we created JM TECH — not just to be another service provider, but to become a team that clients can rely on for clarity, consistency, and technical excellence.
            </p>
          </section>

          <div className="border-t border-gray-700/50 my-12"></div>

          <section className="mb-14">
            <h2 className="text-4xl font-bold mb-6 text-[#FBBF24] text-center">Who We Are</h2>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-200 text-balance">
                  We are developers, engineers, designers, testers, and managers — but more importantly, we are <strong>creators</strong>. Our team includes experts in <strong>frontend development</strong>, <strong>backend systems</strong>, <strong>full-stack architecture</strong>, <strong>mobile applications</strong>, <strong>UI/UX design</strong>, <strong>automated and manual QA</strong>, <strong>DevOps engineering</strong>, and <strong>project & release management</strong>.
                </p>
                <p className="text-lg leading-relaxed text-gray-200 text-balance">
                  Each team member has over <strong>7 years of hands-on industry experience</strong>, and together we bring a <strong>combined legacy of solving real-world challenges</strong> in fast-paced, high-demand environments.
                </p>
              </div>
              <div className="group relative bg-transparent p-8 rounded-lg shadow-lg border border-yellow-500/20 hover:shadow-xl hover:border-yellow-500 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                <p className="text-xl font-semibold text-[#FBBF24] mb-4 group-hover:text-white relative z-10">Our Diverse Expertise:</p>
                <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 text-gray-200 group-hover:text-white relative z-10">
                  <li>E-commerce Solutions</li>
                  <li>Fintech Innovations</li>
                  <li>Healthcare Systems</li>
                  <li>Logistics & Supply Chain</li>
                  <li>Educational Platforms</li>
                </ul>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-8 text-gray-200 text-center max-w-4xl mx-auto text-balance">
              We’ve worked across various sectors, and now, united under one brand, we’re building a company where innovation is expected, quality is guaranteed, and every line of code matters.
            </p>
          </section>

          <div className="border-t border-gray-700/50 my-12"></div>

          <section className="mb-14">
            <h2 className="text-4xl font-bold mb-8 text-[#FBBF24] text-center">What We Do</h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-200 max-w-3xl mx-auto text-center text-balance">
              At JM TECH, we specialize in full-cycle <strong>web</strong> and <strong>mobile development</strong> — from early-stage design and architecture to deployment, optimization, and ongoing support. Whether you're launching a startup MVP or scaling an enterprise system, our team is equipped to help you every step of the way.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                ['Frontend Development', 'Clean, responsive, and accessible UI built with the latest technologies.'],
                ['Backend Development', 'Scalable APIs, secure infrastructure, and cloud-ready services.'],
                ['Mobile Development', 'Seamless apps for iOS and Android using native and cross-platform frameworks.'],
                ['UI/UX Design', 'Intuitive and modern design that prioritizes usability and engagement.'],
                ['QA & Testing', 'Manual and automated testing that ensures every feature works as intended.'],
                ['DevOps', 'Deployment pipelines, monitoring, and cloud infrastructure for reliability and speed.'],
                ['Project & Release Management', 'Agile, transparent, and delivery-focused process management.'],
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  className={`group relative bg-transparent p-6 rounded-lg shadow-lg border border-yellow-500/20 hover:shadow-xl hover:border-yellow-500 transition-all duration-300 ${i === 6 ? 'col-span-full md:col-start-2 md:col-end-3 lg:col-start-2 lg:col-end-3' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                  <h3 className="text-2xl font-semibold text-[#FBBF24] mb-3 group-hover:text-white relative z-10">{title}</h3>
                  <p className="text-gray-200 group-hover:text-white relative z-10">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-gray-700/50 my-12"></div>

          <section className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-[#FBBF24]">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-200 max-w-2xl mx-auto text-balance">
              Our mission at JM TECH is simple:
              <br />
              <em className="italic block mt-4 text-3xl font-extrabold text-[#FBBF24]">
                “To deliver high-quality software solutions that solve real problems and exceed client expectations.”
              </em>
            </p>
            <p className="mt-8 text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto text-balance">
              We believe in clear communication, long-term thinking, and doing things the right way — even when it’s harder. We're here not just to write code, but to build partnerships and drive success through every project we take on.
            </p>
          </section>

          <CallToAction />
        </div>
      </div>
    </>
  );
}

export default About;