'use client';
import React from 'react';
import { Card, Skeleton } from '@heroui/react';

const BlogCardSkeleton = () => {
    return (
        <div className="flex justify-center">
            <Card className="w-full max-w-[450px] bg-gradient-to-r from-[#A1E4D4] to-[#78D8E6] space-y-5 p-6 rounded-lg">
                <Skeleton isLoaded={false} className="rounded-lg h-[150px] w-full" />
                <div className="space-y-4">
                    <Skeleton isLoaded={false} className="h-5 w-4/5 rounded-lg" />
                    <Skeleton isLoaded={false} className="h-4 w-3/5 rounded-lg" />
                </div>
            </Card>
        </div>
    );
};

export default BlogCardSkeleton;
