'use client'

import { useState } from 'react'
import type { Skill, SkillCategory } from '@/types'
import { StaggerContainer, StaggerItem } from '@/components/ui/Animations'

interface SkillsProps {
  skillsData: { categories: SkillCategory[]; skills: Skill[] } | null
}

const Skills = ({ skillsData }: SkillsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Use Sanity data or fallback to default
  const skills = skillsData?.skills || []
  const categories = [
    { id: 'all', name: 'All Skills', color: 'gray', slug: { current: 'all' } },
    ...(skillsData?.categories || []),
  ]

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category?._ref === activeCategory || skill.category?._id === activeCategory || skill.category?.slug?.current === activeCategory)

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      gray: 'bg-gray-600',
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-600',
      red: 'bg-red-600',
      indigo: 'bg-indigo-600',
    };
    return colorMap[color] || 'bg-gray-600';
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the technologies I work with
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const categoryId = 'id' in category ? category.id : category._id
              const categorySlug = category.slug?.current || categoryId
              return (
                <button
                  key={categoryId}
                  onClick={() => setActiveCategory(categorySlug)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === categorySlug
                      ? `${getColorClasses(category.color || 'gray')} text-white shadow-lg transform scale-105`
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              )
            })}
          </div>

          {/* Skills Grid */}
          <StaggerContainer
            key={activeCategory}
            staggerDelay={0.05}
            className="flex flex-wrap gap-3 justify-center"
          >
            {filteredSkills.map((skill) => (
              <StaggerItem key={skill._id || skill.name}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border border-gray-300 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Skills Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Creating responsive, interactive user interfaces with modern frameworks and best practices
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Building robust APIs and server-side applications with scalable architecture
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Emerging Technologies</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Expanding into data engineering and DevOps to stay at the cutting edge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
