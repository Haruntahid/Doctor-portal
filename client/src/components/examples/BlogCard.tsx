import BlogCard from '../BlogCard';
import { AppProvider, useApp } from '@/lib/AppContext';
import { ThemeProvider } from '@/lib/ThemeProvider';

function BlogCardDemo() {
  const { blogPosts } = useApp();
  return (
    <div className="p-6">
      <BlogCard post={blogPosts[0]} />
    </div>
  );
}

export default function BlogCardExample() {
  return (
    <ThemeProvider>
      <AppProvider>
        <BlogCardDemo />
      </AppProvider>
    </ThemeProvider>
  );
}
