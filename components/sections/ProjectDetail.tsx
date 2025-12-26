'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import type { Project } from '@/types'
import { urlFor } from '@/sanity/lib/image'
import { formatDateRange } from '@/sanity/lib/utils'

interface ProjectDetailProps {
  project: Project
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>

          {/* Meta information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            {project.category && (
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                {project.category}
              </span>
            )}
            {project.startDate && (
              <span>{formatDateRange(project.startDate, project.endDate)}</span>
            )}
            {project.client && <span>Client: {project.client}</span>}
            {project.myRole && <span>Role: {project.myRole}</span>}
          </div>
        </div>

        {/* Main Image */}
        {project.mainImage?.asset?._ref && (
          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={urlFor(project.mainImage.asset._ref).width(1200).height(600).url()}
              alt={project.mainImage.alt || project.title}
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        {/* Project Links */}
        {(project.liveUrl || project.githubUrl || project.demoUrl) && (
          <div className="flex flex-wrap gap-4 mb-12">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View on GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Demo
              </a>
            )}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Long Description */}
            {project.longDescription && (
              <div className="prose dark:prose-invert max-w-none">
                <PortableText value={project.longDescription} />
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}




            {/* Challenges & Solutions */}
            {project.challenges && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Challenges</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <PortableText value={project.challenges} />
                </div>
              </div>
            )}

            {project.solutions && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Solutions</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <PortableText value={project.solutions} />
                </div>
              </div>
            )}

            {/* Results */}
            {project.results && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <PortableText value={project.results} />
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={urlFor(image.asset._ref).width(600).height(400).url()}
                        alt={image.alt || `${project.title} - Image ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech._id}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Stats */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Info</h3>
              <div className="space-y-3">
                {project.duration && (
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                    <p className="text-gray-900 dark:text-white font-semibold">{project.duration}</p>
                  </div>
                )}
                {project.teamSize && (
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Team Size</p>
                    <p className="text-gray-900 dark:text-white font-semibold">{project.teamSize} members</p>
                  </div>
                )}
                {project.status && (
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                    <p className="text-gray-900 dark:text-white font-semibold capitalize">{project.status}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-600">
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "{project.testimonial.quote}"
                </p>
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {project.testimonial.author}
                  </p>
                  {project.testimonial.role && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
