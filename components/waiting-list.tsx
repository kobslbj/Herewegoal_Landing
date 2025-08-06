'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
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

const formSchema = z.object({
  gmail: z.string().email('Please enter a valid Gmail address').min(1, 'Gmail address is required'),
})

export default function WaitingList() {
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        toast.success(result.message)
        form.reset()
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error('System error, please try again later')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Join the Waitlist</h2>
        <p className="text-muted-foreground">
          Be the first to experience our product when it's ready
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="gmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gmail Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </form>
      </Form>
      
      <div className="text-center text-sm text-muted-foreground">
        We promise not to share your personal information with third parties
      </div>
    </div>
  )
}