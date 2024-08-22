import nexus from '../assets/nexus.png';
import tech from '../assets/techhaven.png';
import luminous from '../assets/luminous.png';
import threads from '../assets/threads.png';
import buddy from '../assets/buddy.jpeg';
import sentiment from '../assets/sentiment.jpeg';
import React, { useState } from "react";
import Footer from './Footer';
import { useWindowSize } from 'react-use';

const ProjectCard = ({ image, title, link, description, git, technologies }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { width } = useWindowSize();

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className="bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden w-full max-w-sm mx-auto"
            style={{
                height: '470px',
            }}
        >
            <a href={link}>
                <img className="w-full h-48 object-cover" src={image} alt={title} />
            </a>
            <div className="p-4">
                <a href={link}>
                    <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base text-gray-300 dark:text-gray-400">
                    {description.length > 100 ? (
                        <>
                            {description.substring(0, 100)}...{' '}
                            <button onClick={toggleExpand} className="text-blue-500 hover:underline">Read more</button>
                        </>
                    ) : description}
                </p>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className='flex flex-wrap gap-2 mb-2 sm:mb-0'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[12px] sm:text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 hover:text-green-500 duration-300 text-sm sm:text-base">GitHub</a>
            </div>
            {isExpanded && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-lg text-white p-4 flex flex-col justify-center items-center">
                    <p className="font-normal text-sm sm:text-base text-gray-300 dark:text-gray-400 overflow-y-auto max-h-[80%]">
                        {description}
                    </p>
                    <button onClick={toggleExpand} className="mt-4 text-blue-500 hover:underline">Show less</button>
                </div>
            )}
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center m-4 sm:m-8 lg:m-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        link={item.link}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'Scholar Nexus',
        description: 'An educational platform built using Next JS, Clerk, MongoDB, and Prisma. This project serves as an online platform that allows users to connect, share educational content, find relatable courses and trending topics based on their interests, interact with their educational notes efficiently with AI, manage notes and daily tasks and interact with other users through jobs, question boards, and notes seamlessly. This platform is designed to be user-friendly, easy-to-use, and accessible to all students.',
        image: nexus,
        link: 'https://scholar-nexus.vercel.app',
        git: 'https://github.com/Jose-henry/ScholarNexus',
        technologies: ['MongoDB', 'NextJS', 'Prisma', 'Tailwind CSS', 'TypeScript']
    },
    {
        title: 'Tech Haven',
        description: 'An ecommerce app built with Payload CMS, an open-source content management system integrated within the Next.js and TypeScript project.',
        image: tech,
        link: 'https://e-commerzze.payloadcms.app',
        git: 'https://github.com/Jose-henry/e-commerce',
        technologies: ['Next JS', 'MongoDB', 'Payload CMS', 'Express JS', 'TypeScript']
    },
    {
        title: 'Luminous Life',
        description: 'An NGO app built with Contentful CMS integrated within the Next.js and TypeScript project.',
        image: luminous,
        link: 'https://luminous-life-one.vercel.app',
        git: 'https://github.com/Jose-henry/LuminousLife',
        technologies: ['Next JS', 'Contentful', 'TypeScript']
    },
    {
        title: 'BookBuddy',
        description: 'A Book app for readers  who love to discuss about books with others and save memories. Built with Clerk, Next.js, Prisma, MongoDB, and TypeScript.',
        image: buddy,
        link: 'https://github.com/Jose-henry/BookBuddy',
        git: 'https://github.com/Jose-henry/BookBuddy',
        technologies: ['Next JS', 'Tailwind', 'TypeScript', 'Prisma', 'MongoDB']
    },
    {
        title: 'Threads-Clone',
        description: 'A clone of Threads App built with Next.js, Clerk, MongoDB, UploadThing and TypeScript.',
        image: threads,
        link: 'https://threads-clone-three-lovat.vercel.app',
        git: 'https://github.com/Jose-henry/Threads-clone',
        technologies: ['Next JS', 'MongoDB', 'TypeScript']
    },
    {
        title: 'Sentiment Analysis Model',
        description: (
            <span>
                An AI model with various methods trained to analyze sentiments in text integrated into a WebSocket API. Check more sentiment analysis models 
                <a href="https://github.com/Jose-henry/SentimentAnalysis" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> here</a>.
            </span>
        ),
        image: sentiment,
        link: 'https://github.com/Jose-henry/WebsocketAPI',
        git: 'https://github.com/Jose-henry/WebsocketAPI',
        technologies: ['JavaScript', 'HTML', 'CSS', 'Python', 'Jupyter']
    },
    // Add more projects here
]

export default Projects;
