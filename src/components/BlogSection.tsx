
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { fetchBlogFromSheet, SheetBlogPost } from '@/utils/googleSheets';

interface BlogSectionProps {
  posts?: SheetBlogPost[];
  showFullPosts?: boolean;
}

const BlogSection = ({ posts: propPosts, showFullPosts = false }: BlogSectionProps) => {
  const [posts, setPosts] = useState<SheetBlogPost[]>(propPosts || []);
  const [selectedPost, setSelectedPost] = useState<SheetBlogPost | null>(null);
  const [loading, setLoading] = useState(!propPosts);

  useEffect(() => {
    if (!propPosts) {
      const loadPosts = async () => {
        setLoading(true);
        try {
          const fetchedPosts = await fetchBlogFromSheet();
          setPosts(fetchedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        } catch (error) {
          console.error('Failed to load blog posts:', error);
        } finally {
          setLoading(false);
        }
      };
      loadPosts();
    }
  }, [propPosts]);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-xl text-gray-500">Loading blog posts...</div>
      </div>
    );
  }

  if (selectedPost && showFullPosts) {
    return (
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => setSelectedPost(null)}
          className="mb-6"
        >
          ← Back to Blog
        </Button>
        
        <article className="prose prose-lg max-w-none">
          <img 
            src={selectedPost.image} 
            alt={selectedPost.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(selectedPost.date)}
            </div>
            {selectedPost.content && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {getReadingTime(selectedPost.content)}
              </div>
            )}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
          
          <div className="text-xl text-gray-600 mb-8">{selectedPost.excerpt}</div>
          
          {selectedPost.content && (
            <div className="whitespace-pre-wrap">
              {selectedPost.content}
            </div>
          )}
        </article>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No blog posts available.</p>
          <p className="text-gray-400 mt-2">Check back soon for collecting tips and insights!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={(e) => {
                    // Fallback image if post image fails to load
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600';
                  }}
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                  {post.content && (
                    <>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      {getReadingTime(post.content)}
                    </>
                  )}
                </div>
                
                <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                
                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={() => showFullPosts ? setSelectedPost(post) : window.open(`#blog/${post.slug}`, '_blank')}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSection;
