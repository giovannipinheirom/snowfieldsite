import { MetadataRoute } from 'next';
import { languagesData } from '@/content/idiomas';
import { coursesData } from '@/content/cursos';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.snowfieldlanguages.com.br';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/metodologia`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ingles-regular`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/aulas-em-condominios`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/aulas-corporativas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/intensivo-para-viagens`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/preparatorios`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cursos`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/teste-de-nivel`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const languageRoutes: MetadataRoute.Sitemap = languagesData.map((lang) => ({
    url: `${baseUrl}/idiomas/${lang.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const courseRoutes: MetadataRoute.Sitemap = coursesData.map((course) => ({
    url: `${baseUrl}/cursos/${course.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...languageRoutes, ...courseRoutes];
}
