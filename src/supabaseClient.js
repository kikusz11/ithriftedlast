import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rvqkupuesguslnqiscgd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cWt1cHVlc2d1c2xucWlzY2dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NDc2MzcsImV4cCI6MjA3MDUyMzYzN30.O6vijCRREqFyNw0gWT1YXmJi693U0JyiHOmWFBpEdK8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
