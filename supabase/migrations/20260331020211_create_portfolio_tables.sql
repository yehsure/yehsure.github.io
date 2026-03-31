/*
  # Create Portfolio Tables

  1. New Tables
    - `projects` - Store cybersecurity projects and labs
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `description` (text) - Project description
      - `category` (text) - Category (e.g., "Lab", "Malware Analysis", "Detection Rules")
      - `technologies` (text array) - Technologies used
      - `link` (text) - Link to project/repository
      - `image_url` (text) - Project image
      - `featured` (boolean) - Featured project
      - `created_at` (timestamp)

    - `blog_posts` - Store blog articles
      - `id` (uuid, primary key)
      - `title` (text) - Article title
      - `slug` (text, unique) - URL-friendly slug
      - `content` (text) - Article content (markdown)
      - `excerpt` (text) - Short preview
      - `category` (text) - Category (e.g., "DFIR", "Threat Hunting", "Security Research")
      - `published` (boolean) - Published status
      - `featured` (boolean) - Featured article
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - All users can read published content
    - No write/delete permissions (admin-only via application logic)
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  technologies text[] NOT NULL DEFAULT '{}',
  link text,
  image_url text,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  category text NOT NULL,
  published boolean DEFAULT false,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);
