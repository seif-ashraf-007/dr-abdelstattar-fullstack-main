import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EditBlogPost.module.css';

function EditBlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: null
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/blogPosts/${id}`);
                if (!response.ok) throw new Error('Post not found');
                
                const post = await response.json();
                setFormData({
                    title: post.title,
                    content: post.content,
                    image: null
                });
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('content', formData.content);
            if (formData.image) {
                formDataToSend.append('image', formData.image);
            }

            const response = await fetch(`http://localhost:5000/api/blogPosts/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: formDataToSend
            });

            if (!response.ok) throw new Error('Failed to update post');

            navigate('/blog'); // Or wherever your blog page is
        } catch (err) {
            setError(err.message);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData(prev => ({
                ...prev,
                image: files[0]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <div className={styles.formGroup}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                />
            </div>


            <div className={styles.formGroup}>
                <label htmlFor="image">New Image (optional):</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    accept="image/*"
                />
            </div>

            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>
                    Update Post
                </button>
                <button 
                    type="button" 
                    className={styles.cancelButton}
                    onClick={() => navigate('/blog')}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default EditBlogPost; 