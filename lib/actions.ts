'use server'

import { supabase } from './supabase'
import { z } from 'zod'

const waitingListSchema = z.object({
  gmail: z.string().email('Please enter a valid Gmail address').min(1, 'Gmail address is required'),
})

export async function joinWaitingList(formData: FormData) {
  const rawData = {
    gmail: formData.get('gmail'),
  }

  const validatedData = waitingListSchema.safeParse(rawData)

  if (!validatedData.success) {
    return {
      success: false,
      error: validatedData.error.issues[0].message,
    }
  }

  const { gmail } = validatedData.data

  try {
    const { data, error } = await supabase
      .from('waiting_list')
      .insert([{ gmail }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return {
        success: false,
        error: 'Failed to join waiting list, please try again later',
      }
    }

    return {
      success: true,
      message: 'Successfully joined waiting list! We will notify you when the product is ready',
      data,
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      success: false,
      error: 'System error, please try again later',
    }
  }
}