// components/ArticleById.tsx
import React, { useEffect } from "react";
import { useArticle } from "./context";
import Image from "next/image";
import { authors } from "./constant";

interface ArticleByIdProps {
  id: string;
}

const ArticleById: React.FC<ArticleByIdProps> = ({ id }) => {
  const { article, fetchArticle } = useArticle();

  useEffect(() => {
    if (id) {
      fetchArticle(id);
    }
  }, [id, fetchArticle]);

  if (!article) {
    return <div>Loading...</div>;
  }


  const updatedAt = new Date(article.updatedAt);
  const formattedDate = `${updatedAt.getDate()}/${updatedAt.getMonth() + 1}/${updatedAt.getFullYear()}`;

  const author = authors.find(a => a.value === article.author);
  const authorImage = author ? author.image : '/author/default.jpg';

  return (
    <div className='flex flex-col pt-6 md:px-20'>
      <div className='flex gap-2 text-4xl pb-2'>
        <h1 className="text-lg md:text-2xl truncate md:w-3/5">{article.title}</h1>
      </div>
      <p>{article.desc}</p>
      <div className='flex gap-4 items-center py-6'>
        <div className="rounded-full overflow-hidden border w-10 h-10 md:w-12 md:h-12 ">
          <Image
            src={authorImage || '/author/default.jpg'}
            alt={article.author}
            width={45}
            height={45}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col pl-4">
          <p className="md:font-bold text-sm">{article.author}</p>
          <p className='text-sm'>{formattedDate}</p>
        </div>
      </div>
      <hr className="border-t border-gray-500 mb-5 md:w-[700px]" />
      <Image
        src={article.image}
        alt='alt'
        width={700}
        height={330}
        className="object-cover object-center w-[50rem] md:h-[25rem]"
      />
      <div
        className='flex flex-col space-y-6 pt-8 md:ml-[9rem]'
        dangerouslySetInnerHTML={{ __html: article.body }} />
    </div>
  )
}

export default ArticleById;