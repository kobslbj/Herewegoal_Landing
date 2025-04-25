import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black text-black dark:text-white" id="faq">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-black dark:text-white">FAQ</h2>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-6 px-4 text-lg font-medium text-left hover:no-underline cursor-pointer">
            How is this different from Notion, Todoist, or Trello?
          </AccordionTrigger>
          <AccordionContent className="pb-6 px-4 text-base">
            Unlike those tools, Herewegoal combines task timelines with project views — so you can see what&apos;s due
            today and where it belongs. Plus, you can share tasks with anyone via a link — no sign-up or login required.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="py-6 px-4 text-lg font-medium text-left hover:no-underline cursor-pointer">
            Can I use this for personal productivity?
          </AccordionTrigger>
          <AccordionContent className="pb-6 px-4 text-base">
            Absolutely. Whether you&apos;re managing your side project, your day-to-day schedule, or your semester goals
            — Herewegoal helps you stay focused, without the complexity of traditional project management tools.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="py-6 px-4 text-lg font-medium text-left hover:no-underline cursor-pointer">
            Do I need an account to assign tasks to someone else?
          </AccordionTrigger>
          <AccordionContent className="pb-6 px-4 text-base">
            Nope! That&apos;s one of our best features 🙌 You can create a task and share it with a client, teammate, or
            classmate — all they need is the link.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="py-6 px-4 text-lg font-medium text-left hover:no-underline cursor-pointer">
            Is Herewegoal free?
          </AccordionTrigger>
          <AccordionContent className="pb-6 px-4 text-base">
            Yes! We offer a free Herewegoal Basic plan which is great for getting started. It includes:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Manage up to 3 active projects simultaneously</li>
              <li>Create up to 3 project folders</li>
              <li>Task views: Day / Week</li>
            </ul>
            For users needing more, we have Herewegoal Pro at $5/month, offering unlimited projects and folders, plus
            monthly task views. The core features for individual task management remain accessible in the free plan.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className="py-6 px-4 text-lg font-medium text-left hover:no-underline cursor-pointer">
            What platforms do you support?
          </AccordionTrigger>
          <AccordionContent className="pb-6 px-4 text-base">
            Herewegoal is currently web-based, and works great on desktop and mobile browsers. Native apps are in the
            roadmap!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
