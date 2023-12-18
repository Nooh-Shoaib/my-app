import React from 'react';
import BlogCard from '../components/BlogCard';

const RelatedBlogsSection = ({ relatedBlogs }) => {
        if (!relatedBlogs || relatedBlogs.length === 0) {
                return null; // Or you can render a message like "No related blogs found."
        }

        return (
                <div>
                        <h2 className='flex justify-center my-12 text-4xl font-semibold'>Related Blogs</h2>
                        <div className='lg:max-w-[1320px] mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-y-7 gap-x-12 md:px-20'>
                                {relatedBlogs.map((blog, index) => (
                                        <BlogCard key={index} blog={blog} />
                                ))}
                        </div>
                </div>
        );
};

export default RelatedBlogsSection;
