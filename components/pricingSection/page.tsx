'use client';

import { ShineBorder } from '@/components/magicui/shine-border';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function PricingSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const plans = [
    {
      name: 'Herewegoal Basic',
      price: 'Free',
      features: ['Up to 6 active projects at the same time', 'Up to 3 projects folder at the same time'],
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const,
      colors: ['#4F46E5', '#06B6D4', '#10B981'], // 藍紫色系
    },
    {
      name: 'Herewegoal Pro',
      price: '$5',
      period: '/month',
      features: ['Unlimited projects', 'Unlimited projects folder'],
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'default' as const,
      popular: true,
      colors: ['#A07CFE', '#FE8FB5', '#FFBE7B'], // 漸變色系
    },
  ];

  if (!mounted) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500">
              Pricing
            </span>{' '}
            for Everyone
          </h2>
          <p className="text-muted-foreground text-lg">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="size-full">
              <ShineBorder className="relative size-full rounded-xl" color={plan.colors}>
                <div className="size-full p-8 bg-background/95">
                  {plan.popular && (
                    <div className="mb-4 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-500">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                  </div>
                  <ul className="mt-8 space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full" variant={plan.buttonVariant} size="lg">
                    {plan.buttonText}
                  </Button>
                </div>
              </ShineBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
