import { Safari } from '@/components/magicui/safari';
import image from '@/public/safariDemo.png';
import image2 from '@/public/safariDemoProjectTask.png';
import { Particles } from '@/components/magicui/particles';

export function SafariDemo() {
  return (
    <section className="relative w-full bg-black text-white py-28">
      <Particles className="absolute inset-0 z-0" quantity={100} ease={100} color="#ffffff" refresh />
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 gap-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">
          Intuitive tools for maximum productivity
        </h2>

        {/* First Safari Demo */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4 px-4">
            <h3 className="text-2xl font-bold">Start with a dashboard that makes sense</h3>
            <p className="text-gray-400 text-lg">
              Get a clear overview of all your tasks and projects at a glance. No complexity, just clarity.
            </p>
          </div>
          <div className="order-1 md:order-2 transform transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <Safari url="app.herewegoal.com" className="size-full rounded-lg" imageSrc={image.src} />
          </div>
        </div>

        {/* Second Safari Demo */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <div className="transform transition-all duration-700 hover:scale-105 hover:rotate-[-1deg] shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <Safari url="app.herewegoal.com/projects" className="size-full rounded-lg" imageSrc={image2.src} />
          </div>
          <div className="space-y-4 px-4">
            <h3 className="text-2xl font-bold">Project management reimagined</h3>
            <p className="text-gray-400 text-lg">
              Organize your work with powerful yet simple project views that adapt to your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafariDemo;
