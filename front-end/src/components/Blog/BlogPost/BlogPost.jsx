import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './BlogPost.module.css';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const BlogPost = ({
  title,
  paragraph,
  pictures = [], // Default value
  author = 'Dr. Abdelsattar Ahmed Nasr', // Default value
  timestamp,
  isLoggedIn,
  onDelete,
  onEdit
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (pictures.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
      }, 8000);
      return () => clearInterval(intervalId);
    }
  }, [pictures.length]);

  return (
    <article className={styles.blogPost}>
      <div className={styles.blogHeader}>
        <div className={styles.blogHeaderContent}>
          <h1 className={styles.blogTitle}>{title}</h1>
          {isLoggedIn && (
            <div className={styles.blogActions}>
              <button 
                className={styles.editButton}
                onClick={onEdit}
              >
                <FaRegEdit/>
              </button>
              <button 
                className={styles.deleteButton}
                onClick={onDelete}
              >
                <MdDeleteOutline />
              </button>
            </div>
          )}
        </div>
        <div className={styles.blogMeta}>
          <span className={styles.blogAuthor}>By {author} @ </span>
          <time className={styles.blogTimestamp} dateTime={timestamp}>
            {new Date(timestamp).toLocaleDateString()}
          </time>
        </div>
      </div>

      <div
        className={styles.blogParagraph}
        dangerouslySetInnerHTML={{ __html: paragraph }}
      ></div>

      {pictures.length > 0 && (
        <div className={styles.imageSlider}>
          <div className={styles.sliderWrapper}>
            <div
              className={styles.sliderContainer}
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {pictures.map((img, index) => (
                <div key={index} className={styles.sliderImageWrapper}>
                  <img
                    src={`http://localhost:5000${img}`}
                    alt={`Slide ${index + 1}`}
                    className={styles.sliderImage}
                  />
                </div>
              ))}
            </div>
          </div>
          {pictures.length > 1 && (
            <div className={styles.sliderDots}>
              {pictures.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.sliderDot} ${
                    index === currentImageIndex ? styles.activeDot : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
  timestamp: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default BlogPost;