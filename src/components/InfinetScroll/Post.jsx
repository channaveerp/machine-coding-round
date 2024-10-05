import React, { useEffect } from 'react';

const Post = ({ data, setPage }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((params) => {
      if (params[0].isIntersecting) {
        observer.unobserve(params[0].target);
        // setPage((page) => page + 1);
      }
    });

    const lastImg = document.querySelector('.post-img:last-child');

    if (lastImg) {
      observer.observe(lastImg);
    }

    return () => {
      const lastImgCleanup = document.querySelector('.post-img:last-child');
      if (lastImgCleanup) {
        observer.unobserve(lastImgCleanup);
      }
      observer.disconnect();
    };
  }, [data, setPage]);

  return (
    <div className='post-img-conatoner'>
      {data.map((item) => (
        <div key={item.id}>
          <img className='post-img' src={item.download_url} alt='dfsdf' />
        </div>
      ))}
    </div>
  );
};

export default Post;
