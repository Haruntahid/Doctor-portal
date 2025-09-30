import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useApp } from '@/lib/AppContext';
import BlogCard from '@/components/BlogCard';
import { useToast } from '@/hooks/use-toast';

export default function AdminBlog() {
  const { blogPosts, addBlogPost, deleteBlogPost } = useApp();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image: '',
    author: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleAddPost = () => {
    //todo: remove mock functionality
    if (newPost.title && newPost.content && newPost.author) {
      addBlogPost(newPost);
      toast({ title: 'Success', description: 'Blog post added successfully' });
      setOpen(false);
      setNewPost({ title: '', content: '', image: '', author: '', date: new Date().toISOString().split('T')[0] });
    }
  };

  const handleDelete = (id: string, title: string) => {
    deleteBlogPost(id);
    toast({ title: 'Success', description: `"${title}" deleted successfully` });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Blog Management</h1>
          <p className="text-muted-foreground">Create and manage blog posts</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button data-testid="button-add-blog">
              <Plus className="h-4 w-4 mr-2" />
              Add Blog Post
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Blog Post</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  placeholder="Post title"
                  data-testid="input-blog-title"
                />
              </div>
              <div className="space-y-2">
                <Label>Content</Label>
                <Textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  placeholder="Post content..."
                  className="min-h-32"
                  data-testid="input-blog-content"
                />
              </div>
              <div className="space-y-2">
                <Label>Author</Label>
                <Input
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  placeholder="Dr. John Smith"
                  data-testid="input-blog-author"
                />
              </div>
              <div className="space-y-2">
                <Label>Image URL</Label>
                <Input
                  value={newPost.image}
                  onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                  placeholder="https://..."
                  data-testid="input-blog-image"
                />
              </div>
              <Button onClick={handleAddPost} className="w-full" data-testid="button-submit-blog">
                Add Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <div key={post.id} className="relative">
            <BlogCard post={post} />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => handleDelete(post.id, post.title)}
              data-testid={`button-delete-blog-${post.id}`}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
