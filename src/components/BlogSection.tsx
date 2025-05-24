
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type SheetBlogPost } from "@/utils/googleSheets";

interface BlogSectionProps {
  posts: SheetBlogPost[];
  isLoading?: boolean;
}

const LoadingSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 3 }, (_, i) => (
      <Card key={i} className="animate-pulse bg-white/85 backdrop-blur-sm">
        <CardHeader className="p-0">
          <div className="w-full h-48 bg-gray-300 rounded-t-lg" />
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-4 bg-gray-300 rounded mb-2" />
          <div className="h-3 bg-gray-200 rounded mb-3" />
          <div className="h-3 bg-gray-200 rounded mb-3" />
          <div className="h-8 bg-gray-300 rounded" />
        </CardContent>
      </Card>
    ))}
  </div>
);

const BlogSection = ({ posts, isLoading = false }: BlogSectionProps) => {
  return (
    <div className="space-y-6">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className="hover:shadow-xl transition-all duration-300 border-green-200/50 hover:border-green-400 bg-white/85 backdrop-blur-sm transform hover:-translate-y-2"
            >
              <CardHeader className="p-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <CardDescription className="mb-3">{post.excerpt}</CardDescription>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                  Read More
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
