'use client'

import { PortableText } from '@portabletext/react'
import type { PersonalInfo } from '@/types'
import { blocksToText } from '@/sanity/lib/utils'

interface AboutProps {
  personalInfo: PersonalInfo | null
}

const About = ({ personalInfo }: AboutProps) => {
  const bioText = personalInfo?.bio ? blocksToText(personalInfo.bio) : ''
  const bioParagraphs = bioText.split('\n\n').filter(Boolean)

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {personalInfo?.tagline ||
                'Passionate developer with a journey from full-stack development to exploring the frontiers of data engineering and DevOps'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              {personalInfo?.bio ? (
                <div className="prose dark:prose-invert max-w-none">
                  <PortableText value={personalInfo.bio} />
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      My Journey
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      I&apos;m a dedicated full-stack developer with hands-on experience in building modern
                      web applications using React.js, Next.js, and Node.js. My expertise spans from creating
                      intuitive frontend interfaces to developing robust backend systems with Express and
                      MongoDB.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      What sets me apart is my practical approach to learning and problem-solving. I&apos;ve
                      worked extensively with headless CMS solutions like Sanity, enabling content-driven
                      applications that scale efficiently. My projects demonstrate real-world application of
                      modern development practices and technologies.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Currently, I&apos;m expanding my skill set into the exciting realms of Data Engineering
                      and DevOps. I&apos;m diving deep into Python, Pandas, Apache Spark for data processing,
                      and exploring cloud infrastructure with Docker, AWS, and CI/CD pipelines. This evolution
                      reflects my commitment to staying at the forefront of technology trends.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Stats & Highlights */}
            <div className="space-y-8">
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {personalInfo?.projectsCompleted || '15'}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {personalInfo?.yearsOfExperience || '3'}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    {personalInfo?.availability === 'available' ? '✓' : '24/7'}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {personalInfo?.availability === 'available' ? 'Available' : 'Learning Mode'}
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Core Values</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Clean, maintainable code</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">User-centered design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Continuous improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Collaborative teamwork</span>
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              {personalInfo?.resumeFile?.asset?.url && (
                <div className="text-center">
                  <a
                    href={personalInfo.resumeFile.asset.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Resume
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
