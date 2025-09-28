import { Metadata } from 'next';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const slug = await Promise.resolve(params?.slug);

  try {
    const res = await fetch(`https://api.dentobees.com/landing/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch blog metadata");

    const data = await res.json();
    const imageUrl = data.image.startsWith('http')
      ? data.image
      : `https://dentobees.com/${data?.image}`;

    return {
      title: data?.articleTitle,
      description: data?.shortDescription,
      openGraph: {
        title: data?.articleTitle,
        description: data?.shortDescription,
        url: `https://dentobees.com/blogs/${slug}`,
        images: [
          {
            url: imageUrl,
            alt: data?.articleTitle,
            type: 'image/jpeg',
            width: 1200,
            height: 630,

          },
        ],
      },
    };
  } catch (error) {
    return {
      title: 'Blog not found',
      description: 'This blog post could not be loaded.',
    };
  }
}

const Layout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default Layout;
