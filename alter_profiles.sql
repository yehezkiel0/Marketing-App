-- Add subscription tracking columns to the profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS subscription_tier text DEFAULT 'free',
ADD COLUMN IF NOT EXISTS subscription_status text DEFAULT 'active';

-- Update RLS to ensure these are readable
-- (Existing SELECT policy should cover this, but good to verify)
