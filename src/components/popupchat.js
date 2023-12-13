import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faThumbsUp, faThumbsDown, faSmile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PopupChat = () => {
        const [isChatOpen, setChatOpen] = useState(false);
        const [hoveredButton, setHoveredButton] = useState(null);
        const [isEmojiOpen, setEmojiOpen] = useState(false);

        const toggleChat = () => {
                setChatOpen(!isChatOpen);
        };

        const toggleEmoji = () => {
                setEmojiOpen(!isEmojiOpen);
        };




        return (
                <div className='fixed bottom-0 right-5'>
                        {!isChatOpen && (
                                <button onClick={toggleChat} className='py-6 flex justify-start bg-amber-500 w-32 pl-4 font-medium text-sm text-white rounded-t-md'>
                                        Online
                                </button>
                        )}

                        {isChatOpen && (
                                <div className="absolute bottom-0 right-3 bg-white w-80 rounded-t-md">
                                        <div className='bg-gray-100'>
                                                <div className="bg-amber-500 mb-60 px-4 py-6">
                                                        <button onClick={toggleChat}>
                                                                <FontAwesomeIcon icon={faTimes} className="text-white absolute top-0 right-0 px-3 py-2" />
                                                        </button>
                                                        <p className='text-sm text-white'>Sire Printing - Custom Packaging Support

                                                        </p>
                                                </div>
                                                <div className='flex justify-between pl-4'>
                                                        <hr className='w-48 relative h-3 font-bold' />
                                                        <div className='text-sm text-gray-500 absolute top-80 right-5'>New message</div>
                                                </div>
                                                <div className='py-4 flex'>
                                                        <img src='https://embed.tawk.to/_s/v4/assets/images/default-profile.svg' alt='' className='w-12' />
                                                        <p className='bg-amber-500 text-sm text-start w-52 pl-3 rounded-lg'>Hi there, Looking for custom printed boxes? Lets chat, i can get you instant pricing</p>
                                                </div>
                                        </div>
                                        <div className="">
                                                <Link to='https://www.tawk.to/?utm_source=tawk-messenger&utm_medium=link&utm_campaign=referral&utm_term=5fd0ef5e920fc91564cf1056' target='_blank' className='text-xs tracking-widest flex justify-center py-3'>
                                                        Add free<strong>&nbsp;live chat&nbsp;</strong>to your site
                                                </Link>
                                                <div className="flex justify-between mt-2">
                                                        <input
                                                                type='chat'
                                                                className='p-2 placeholder:text-xs focus outline-none focus:ring-0'
                                                                placeholder="Write a message..."
                                                        />
                                                        <button
                                                                className={`mr-2 ${hoveredButton === 'like' ? 'text-green-500' : ''}`}
                                                                onMouseEnter={() => setHoveredButton('like')}
                                                                onMouseLeave={() => setHoveredButton(null)}
                                                        >
                                                                <FontAwesomeIcon icon={faThumbsUp} />
                                                        </button>
                                                        <button
                                                                className={`mr-2 ${hoveredButton === 'dislike' ? 'text-red-500' : ''}`}
                                                                onMouseEnter={() => setHoveredButton('dislike')}
                                                                onMouseLeave={() => setHoveredButton(null)}
                                                        >
                                                                <FontAwesomeIcon icon={faThumbsDown} />
                                                        </button>
                                                        <button onClick={toggleEmoji}>
                                                                <FontAwesomeIcon icon={faSmile} className=" bg-white text-gray-600 px-2" />
                                                        </button>
                                                </div>
                                                {isEmojiOpen && (
                                                        <div className="mt-2">
                                                                😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎😀😍😎
                                                        </div>
                                                )}
                                        </div>
                                </div>
                        )}
                </div>
        );
};

export default PopupChat;