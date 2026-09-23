export const blogPosts = [
  {
    id: 1,
    title: "Hospital computer system in Texas hit by cyberattack",
    image: "/images/blogPageImages/1.jpg",
    category: "In The News",
    excerpt:
      "(The Hill) - Hospitals and clinics in five states are facing disruptions due to a cyberattack Thursday...",
    author: "Tara Suter, The Hill",
    date: "August 08, 2023",
    link: "/blog/blogdetail",
  },
  {
    id: 2,
    title: "AI is revolutionizing the medical field in 2025",
    image: "/images/blogPageImages/1.jpg",
    category: "Technology",
    excerpt:
      "From diagnosis to robotic surgeries, AI is becoming the backbone of modern medicine...",
    author: "John Doe",
    date: "January 15, 2025",
    link: "/blog/ai-medicine",
  },
  {
    id: 3,
    title: "How climate change is reshaping cities",
    image: "/images/blogPageImages/1.jpg",
    category: "Environment",
    excerpt:
      "Urban planners are rethinking city infrastructure to adapt to rising temperatures and sea levels...",
    author: "Jane Smith",
    date: "March 22, 2025",
    link: "/blog/climate-cities",
  },
] as const;

export const blogOrderOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Featured", value: "featured" },
  { label: "Oldest First", value: "oldest" },
] as const;

export const blogCategoryOptions = [
  { label: "All", value: "All" },
  { label: "In The News", value: "In The News" },
  { label: "General Interest", value: "General Interest" },
] as const;
