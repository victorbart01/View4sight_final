import React from 'react';
import { use } from 'react';
import { articles } from '@/data/blogs';
import Header from '@/components/view4sight/Header';
import Footer from '@/components/view4sight/Footer';
import BreadCumb from '@/components/view4sight/blog/BreadCumb';
import Blogs2 from '@/components/view4sight/blog/Blogs2';
import { getTranslations } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale, category } = use(params);
  const t = getTranslations(locale);
  
  return {
    title: `${t('blog.category')} ${category} - View4Sight`,
    description: t('blog.categoryDescription'),
  };
}

export default function BlogCategoryPage({ params }) {
  const { locale, category } = use(params);
  const t = getTranslations(locale);
  
  // Filter articles by category
  const filteredArticles = articles.filter(
    article => article.category.toLowerCase() === category.toLowerCase()
  );

  const breadcrumbItems = [
    { label: t('nav.home'), href: `/${locale}` },
    { label: t('nav.resources'), href: `/${locale}/ressources` },
    { label: t('nav.blog'), href: `/${locale}/ressources/blog` },
    { label: category, href: `/${locale}/ressources/blog/category/${category}` }
  ];

  return (
    <>
      <Header />
      <main>
        <BreadCumb 
          title={`${t('blog.category')} : ${category}`}
          breadcrumbItems={breadcrumbItems}
        />
        <Blogs2 
          articles={filteredArticles} 
          locale={locale}
          showPagination={true}
        />
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  // Get all unique categories from articles
  const categories = [...new Set(articles.map(article => article.category))];
  
  // Generate params for all locale/category combinations
  const locales = ['fr', 'en'];
  const params = [];
  
  locales.forEach(locale => {
    categories.forEach(category => {
      params.push({
        locale,
        category: category.toLowerCase()
      });
    });
  });
  
  return params;
} 