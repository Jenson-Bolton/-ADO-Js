import { createClient } from './@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient("https://spjwennllghupnqqsgpb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDY3MjMyMSwiZXhwIjoxOTUwMjQ4MzIxfQ.p5hgaTPl-5UTAbO2lS3_7m8VYcExBU5fEbwyWkTdla0")

const { user, session, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})