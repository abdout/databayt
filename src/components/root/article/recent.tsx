'use client';
import React, { useEffect } from 'react';
import { useArticle } from './context';
import Image from 'next/image';
import Link from 'next/link';
import Title from '@/components/atom/title';

const RecentArticles: React.FC = () => {
  const { articles, recentArticles } = useArticle();

  useEffect(() => {
    recentArticles();
  }, [recentArticles]);

  return (
    <div className='space-y-10'>
      <Title icon="material-symbols-light:article-outline" placeholder="المقالات الجديدة" />
      {articles.map((article) => {
        // Get the date object
        const date = new Date(article.updatedAt);
        
        // Format the day and year in English
        const day = date.getDate(); // No need for Intl.NumberFormat for day
        const year = date.getFullYear(); // Get the full year directly

        // Format the month in Arabic
        const month = date.toLocaleDateString('ar-EG', { month: 'long' });

        // Combine the formatted parts
        const formattedDate = `${day} ${month} ${year}`;

        return (
          <div key={article._id}>
            <Link href={`/article/${article._id}`}>
              <div className="flex gap-10 scroll">
                <Image
                  src={article.image || '/hero/history.webp'}
                  alt={article.title}
                  width={180}
                  height={150}
                  className="object-cover object-center w-44 h-36"
                />
                <div className="flex flex-col space-y-1">
                  <h4>{article.title}</h4>
                  <p className='text-lg font-light w-[28rem]'>{article.desc}</p>
                  <div className="flex gap-4 ">
                    <p className='font-light'>
                      {article.author}
                      <span className="text-3xl items-center" style={{ position: 'relative', top: '0.15em' }}> · </span>
                      {formattedDate}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecentArticles;
