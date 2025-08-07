'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'
import { joinWaitingList } from '@/lib/actions'
import ParticlesWrapper from '@/components/particles-wrapper'
import type { Locale } from '@/lib/i18n'

type Props = {
  locale: Locale;
  dict: {
    waitingList: {
      title: string;
      subtitle: string;
      emailPlaceholder: string;
      submit: string;
      success: string;
      error: string;
    };
  };
};

const getFormSchema = (dict: Props['dict']) => z.object({
  gmail: z.string().email(dict.waitingList.error).min(1, dict.waitingList.error),
})

export default function WaitingListSection({ locale, dict }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formSchema = getFormSchema(dict);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gmail: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    const formData = new FormData()
    formData.append('gmail', values.gmail)
    
    try {
      const result = await joinWaitingList(formData)
      
      if (result.success) {
        toast.success(dict.waitingList.success)
        form.reset()
      } else {
        toast.error(dict.waitingList.error)
      }
    } catch {
      toast.error(dict.waitingList.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section 
      id="waiting-list"
      data-section="waiting-list"
      className="relative w-full h-screen overflow-hidden"
      style={{ scrollSnapAlign: 'start' }}
    >
      <ParticlesWrapper />
      
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="mb-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {dict.waitingList.title}
          </h2>
        </div>

        <div className="mb-10 max-w-3xl text-center">
          <p className={`text-lg tracking-normal sm:text-xl md:text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {dict.waitingList.subtitle}
          </p>
        </div>

        <div className="w-full max-w-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="gmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={`text-lg font-medium ${
                      isDark ? 'text-white' : 'text-black'
                    }`}>
                      {locale === 'zh-TW' ? '電子郵件地址' : 'Gmail Address'}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={dict.waitingList.emailPlaceholder}
                        type="email"
                        className={`h-12 text-lg ${
                          isDark 
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-black placeholder-gray-500'
                        }`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                size="lg"
                className={`w-full h-12 text-lg px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-white text-black hover:bg-gray-100' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (locale === 'zh-TW' ? '加入中...' : 'Joining...') : dict.waitingList.submit}
              </Button>
            </form>
          </Form>
        </div>

        <div className="mt-10 max-w-3xl text-center">
          <p className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {locale === 'zh-TW' ? '當 Herewegoal 準備好時，我們會通知您。' : "We'll notify you when Herewegoal is ready to transform how your team builds features."}
          </p>
        </div>
      </div>
    </section>
  );
}