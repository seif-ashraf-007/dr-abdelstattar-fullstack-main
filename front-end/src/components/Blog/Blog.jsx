import './Blog.module.css';
import { useState, useRef, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import BlogPost from './BlogPost/BlogPost';
import { RiVidiconLine } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import { MdOutlineHealthAndSafety, MdMoreTime, MdMonitorHeart } from "react-icons/md";
import styles from './Blog.module.css'; // Import CSS module
import { useNavigate } from 'react-router-dom'; // Add this import

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]); // Initialize as empty array
    const [selectedPost, setSelectedPost] = useState(null); // Initialize as null
    const [loading, setLoading] = useState(true); // Add loading state
    const nodeRef = useRef(null); // Move useRef before any conditional returns
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state
    const navigate = useNavigate(); // Add this hook
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blogPosts');
                const data = await response.json();
                setBlogPosts(data);
                setSelectedPost(data[0]?._id); // Use _id from MongoDB and check if posts exist
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
                setLoading(false);
            }
        };
        
        fetchPosts();
    }, []);

    useEffect(() => {
        // Add check for user login status
        const checkLoginStatus = () => {
            const token = localStorage.getItem('token'); // Or however you store your auth token
            setIsLoggedIn(!!token);
        };

        checkLoginStatus();
    }, []);

    const handleDelete = async (postId) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/blogPosts/${postId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (response.ok) {
                    setBlogPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
                    setSelectedPost(blogPosts[0]?._id);
                } else {
                    throw new Error('Failed to delete post');
                }
            } catch (error) {
                console.error('Error deleting post:', error);
                alert('Failed to delete post');
            }
        }
    };

    const handleEdit = (postId) => {
        navigate(`/blog/edit/${postId}`);
    };

    // Update activePost to work with MongoDB data structure
    const activePost = blogPosts.find(post => post._id === selectedPost);

    if (loading) {
        return <div>Loading...</div>; // Add loading state handling
    }


    return (
        <>
            <div className={styles.blogContainer}>
                <div className={styles.titleBanner}>
                    <div className={styles.titleBannerContent}>
                        <div className={styles.titleBannerTitle}>Blog</div>
                        <div className={styles.titleBannerParagraph}>
                            Welcome to our blog section, where we share insights, updates, and information on our medical services and telemedicine solutions.
                        </div>
                    </div>

                    <div className={styles.features}>
                        <RiVidiconLine className={styles.featIcon} />
                        <GiElectric className={styles.featIcon} />
                        <MdOutlineHealthAndSafety className={styles.featIcon} />
                        <MdMoreTime className={styles.featIcon} />
                        <MdMonitorHeart className={styles.featIcon} />
                    </div>
                </div>

                <div className={styles.blogContent}>
                    {blogPosts.length === 0 ? (
                        <div className={styles.noPostsMessage}>
                            There are no blog posts for now.
                        </div>
                    ) : (
        <>
            <div className={styles.buttonGroupContainer}>
                <div className={styles.buttonGroup}>
                    {isLoggedIn && (
                        <button
                            className={styles.addButton} // Add a class for styling
                            onClick={() => navigate('/blog/new')}
                        >
                            +
                        </button>
                    )}
                    {blogPosts.map((post) => (
                        <button
                            key={post._id}
                            className={`${styles.blogButton} ${selectedPost === post._id ? styles.blogButtonActive : ''}`}
                            onClick={() => setSelectedPost(post._id)}
                        >
                            {post.title}
                        </button>
                    ))}
                </div>
                
            </div>

            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={selectedPost}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames={{
                        enter: styles.infoFadeEnter,
                        enterActive: styles.infoFadeEnterActive,
                        exit: styles.infoFadeExit,
                        exitActive: styles.infoFadeExitActive,
                    }}
                >
                    <div ref={nodeRef} className={styles.blogInfo}>
                        {activePost && (
                            <BlogPost
                                title={activePost.title}
                                paragraph={activePost.content}
                                pictures={activePost.image ? [activePost.image] : []}
                                author={activePost.author}
                                timestamp={activePost.date}
                                isLoggedIn={isLoggedIn}
                                onDelete={() => handleDelete(activePost._id)}
                                onEdit={() => handleEdit(activePost._id)}
                            />
                        )}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </>
    )}
</div>

            </div>
        </>
    );
}

export default Blog;