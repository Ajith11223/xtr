'use client'

import React from 'react'
import { Skeleton } from "@heroui/react"

const ContentSkelton = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto space-y-6">
      {/* Breadcrumbs */}
      <Skeleton className="w-1/3 h-4 rounded bg-default-200" />

      {/* Tag, Share, Title Layout */}
      <div className="flex justify-between items-start w-full">
        {/* Tag */}
        <Skeleton className="w-[100px] h-4 rounded bg-default-200" />

        {/* Share icon */}
        <Skeleton className="w-6 h-6 rounded-full bg-default-300" />
      </div>

      {/* Centered Title */}
      <Skeleton className="w-2/3 h-6 mx-auto rounded bg-default-300" />

      {/* Image Skeleton */}
      <Skeleton className="rounded-[20px] overflow-hidden">
        <div className="h-[350px] w-full bg-default-300" />
      </Skeleton>

      {/* Author and Date */}
      <div className="flex justify-between text-sm text-gray-400">
        <Skeleton className="w-1/4 h-4 rounded bg-default-200" />
        <Skeleton className="w-1/5 h-4 rounded bg-default-200" />
      </div>

      {/* Short Description */}
      <div className="space-y-3">
        <Skeleton className="w-full h-4 rounded bg-default-200" />
        <Skeleton className="w-11/12 h-4 rounded bg-default-200" />
      </div>

      {/* Long Description */}
      <div className="space-y-3">
        <Skeleton className="w-full h-4 rounded bg-default-200" />
        <Skeleton className="w-[95%] h-4 rounded bg-default-200" />
        <Skeleton className="w-[90%] h-4 rounded bg-default-200" />
        <Skeleton className="w-[85%] h-4 rounded bg-default-200" />
      </div>
    </div>
  )
}

export default ContentSkelton
