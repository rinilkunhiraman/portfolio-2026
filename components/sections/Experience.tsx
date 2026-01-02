import type { Experience } from '@/types'
import {
  FadeInUp,
  AnimatedCounter,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/Animations'
import { PortableText } from '@portabletext/react'

interface ExperienceSectionProps {
  experiences: Experience[] | null
}

const ExperienceSection = ({ experiences: sanityExperiences }: ExperienceSectionProps) => {
  const experiences = sanityExperiences || []

  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'project':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'freelance':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'personal':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

    if (months < 12) {
      return `${months} month${months !== 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      if (remainingMonths === 0) {
        return `${years} year${years !== 1 ? 's' : ''}`;
      } else {
        return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
                My journey through practical projects, freelance work, and continuous learning
              </p>
            </div>
          </FadeInUp>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            {/* Experience items */}
            <StaggerContainer staggerDelay={0.2}>
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <StaggerItem key={experience._id}>
                    <div className="relative flex items-start">
                      {/* Timeline dot */}
                      <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                      {/* Content */}
                      <div className="ml-20 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{experience.title}</h3>
                            {experience.company && (
                              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{experience.company}</p>
                            )}
                          </div>
                          <div className="text-right">
                            {experience.type && (
                              <span
                                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getTypeColor(experience.type)}`}
                              >
                                {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                              </span>
                            )}
                            <div className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                              {formatDate(experience.startDate)} -{' '}
                              {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-500">
                              {calculateDuration(experience.startDate, experience.endDate)}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        {experience.description && (
                          <div className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed prose dark:prose-invert max-w-none">
                            <PortableText value={experience.description} />
                          </div>
                        )}

                        {/* Technologies */}
                        {experience.technologies && experience.technologies.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <span
                                  key={tech._id}
                                  className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm border border-gray-300 dark:border-gray-600 rounded"
                                >
                                  {tech.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Achievements */}
                        {experience.achievements && experience.achievements.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {experience.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-400">
                                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Summary Stats */}
          <FadeInUp delay={0.3}>
            <div className="mt-16 grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  <AnimatedCounter end={3} />+
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                  <AnimatedCounter end={25} />+
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  <AnimatedCounter end={15} />+
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                  <AnimatedCounter end={100} />%
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
