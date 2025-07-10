import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black" id="faq">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900 dark:text-white">FAQ</h2>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-6 px-4 text-lg font-medium text-left text-gray-900 dark:text-white hover:no-underline cursor-pointer">
            How is this different from Notion ?
          </AccordionTrigger>
          <AccordionContent className="pb-6 px-4 text-base text-gray-700 dark:text-gray-300 space-y-2">
            <strong>Notion</strong> is highly flexible, but often requires users to build their own task or project
            system from scratch. For many, it becomes overwhelming instead of productive.
            <div className="mt-2">
              <p>
                <strong>Herewegoal is built for founders.</strong>
                <br />
                From day one, it gives you a ready-to-use task flow designed for going from 0 to 1:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 my-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Fast setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>No overthinking</span>
                </div>
              </div>
              <p className="italic text-gray-600 dark:text-gray-400">
                Less time building systems. More time building your product.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="py-6 px-4 text-lg font-medium text-left text-gray-900 dark:text-white hover:no-underline cursor-pointer">
            Can I use this for personal productivity?
          </AccordionTrigger>
          <AccordionContent className="pb-6 px-4 text-base text-gray-700 dark:text-gray-300">
            Absolutely. Whether you&apos;re managing your side project, your day-to-day schedule, or your semester goals
            — Herewegoal helps you stay focused, without the complexity of traditional project management tools.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="py-6 px-4 text-lg font-medium text-left text-gray-900 dark:text-white hover:no-underline cursor-pointer">
            Is Herewegoal free?
          </AccordionTrigger>
          <AccordionContent className="pb-6 px-4 text-base text-gray-700 dark:text-gray-300">
            Yes! We offer a free Herewegoal Basic plan which is great for getting started. It includes:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Manage up to 3 active projects simultaneously</li>
              <li>Create up to 3 project folders</li>
              <li>Task views: Day / Week</li>
            </ul>
            <p className="mt-2">
              For users needing more, we have Herewegoal Pro at $5/month, offering unlimited projects and folders, plus
              monthly task views. The core features for individual task management remain accessible in the free plan.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className="py-6 px-4 text-lg font-medium text-left text-gray-900 dark:text-white hover:no-underline cursor-pointer">
            What platforms do you support?
          </AccordionTrigger>
          <AccordionContent className="pb-6 px-4 text-base text-gray-700 dark:text-gray-300">
            Herewegoal is currently web-based and works great on both desktop browsers. Native apps for iOS and Android
            are actively in development — stay tuned!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
