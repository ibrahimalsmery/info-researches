'use client';

import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '5 اتجاهات في تكنولوجيا التعليم تغيّر مستقبل التعلم في فلسطين',
      author: 'م. ليلى عبد الله',
      date: 'أكتوبر 2025',
      excerpt: 'استكشاف أحدث الاتجاهات في تكنولوجيا التعليم وكيفية تطبيقها في السياق الفلسطيني لتحسين جودة التعليم.',
      image: '/consulting-hero.jpg',
      category: 'التعليم الرقمي'
    },
    {
      id: '2',
      title: 'الاستثمار في التعليم الرقمي: كيف تبني شراكة مربحة ومؤثرة',
      author: 'د. زين الدين حمد',
      date: 'سبتمبر 2025',
      excerpt: 'دليل شامل للاستثمار في التعليم الرقمي وأفضل الممارسات لتحقيق عوائد مجتمعية واقتصادية.',
      image: '/consulting-hero.jpg',
      category: 'التعليم الرقمي'
    },
    {
      id: '3',
      title: 'تحليل الاتجاهات الاقتصادية في فلسطين 2025',
      author: 'د. محمد عواد',
      date: 'أغسطس 2025',
      excerpt: 'دراسة متعمقة للاتجاهات الاقتصادية الحالية والمستقبلية وتأثيرها على قطاع الأعمال الفلسطيني.',
      image: '/consulting-hero.jpg',
      category: 'الأبحاث والدراسات'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          مقالات ومعارف من خبرائنا
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-gold-600 hover:text-gold-700 font-semibold text-sm flex items-center gap-2">
                  اقرأ المقال
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;