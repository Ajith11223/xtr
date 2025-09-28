'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // To get the 'slug' from the URL
import axios from 'axios';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState<any>(null);

  useEffect(() => {
    const fetchCaseStudyData = async () => {
      try {
        const { data } = await axios.get(`https://api.dentobees.com/case-landing/${slug}`);
        setCaseStudy(data);
        if (data?.caseStudyTitle) {
          document.title = `${data.caseStudyTitle}`;
        }
      } catch (error) {
        console.error('Error fetching CaseStudy data:', error);
      }
    };

    if (slug) {
      fetchCaseStudyData();
    }
  }, [slug]);

  return (
    <div>


      <main>{children}</main>
    </div>
  );
};

export default Layout;
