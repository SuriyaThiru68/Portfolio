import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag as TagIcon } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'Building Scalable React Applications',
        excerpt: 'Learn best practices for architecting large-scale React applications with proper state management and code organization.',
        date: 'Feb 10, 2024',
        readTime: '8 min read',
        tags: ['React', 'Architecture', 'Best Practices'],
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
        link: '#'
    },
    {
        id: 2,
        title: 'Mastering Competitive Programming',
        excerpt: 'Tips and strategies to improve your problem-solving skills and excel in coding competitions like Codeforces and LeetCode.',
        date: 'Feb 5, 2024',
        readTime: '10 min read',
        tags: ['Competitive Programming', 'Algorithms', 'DSA'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
        link: '#'
    },
    {
        id: 3,
        title: 'Introduction to IoT with Python',
        excerpt: 'Dive into the world of Internet of Things and learn how to build smart devices using Python and Raspberry Pi.',
        date: 'Jan 28, 2024',
        readTime: '12 min read',
        tags: ['IoT', 'Python', 'Hardware'],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
        link: '#'
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20 md:py-32 bg-gradient-to-b from-black to-zinc-900 text-white px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                        BLOG<span className="text-zinc-700">.</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Thoughts, tutorials, and insights on web development, competitive programming, and technology.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-all shadow-lg hover:shadow-indigo-500/50 group"
                    >
                        <span>View All Posts</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const BlogCard = ({ post, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20"
        >
            {/* Blog Image */}
            <div className="relative h-48 overflow-hidden">
                <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
            </div>

            {/* Blog Content */}
            <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                        <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-medium"
                        >
                            <TagIcon size={10} />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Read More Link */}
                <a
                    href={post.link}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium group/link transition-colors"
                >
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.article>
    );
};

export default Blog;
