
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface LoadingSkeletonProps {
  count?: number;
  type?: 'card' | 'blog' | 'featured';
}

const LoadingSkeleton = ({ count = 6, type = 'card' }: LoadingSkeletonProps) => {
  if (type === 'featured') {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="w-full max-w-sm">
            <CardHeader className="p-4">
              <Skeleton className="w-full h-48 rounded-lg" />
              <div className="mt-2 text-center space-y-2">
                <Skeleton className="h-3 w-20 mx-auto" />
                <Skeleton className="h-4 w-32 mx-auto" />
                <Skeleton className="h-5 w-16 mx-auto" />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {Array.from({ length: count }).map((_, index) => (
          <Card key={index}>
            <CardHeader className="p-2">
              <Skeleton className="w-full h-48 rounded-lg" />
              <div className="mt-2 text-center space-y-1">
                <Skeleton className="h-3 w-16 mx-auto" />
                <Skeleton className="h-4 w-20 mx-auto" />
                <Skeleton className="h-4 w-12 mx-auto" />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Skeleton className="w-24 h-32 rounded" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
