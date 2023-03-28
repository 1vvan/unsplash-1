import React, { useState } from 'react';
import iconHeart from '../../assets/icons/iconHeart.png'
import iconHeartFilled from '../../assets/icons/iconHeartFilled.png'

const LikeButton = () => {

    const [liked, setLiked] = useState(false);
    const [likedCount, setLikedCount] = useState(128);

    const handleClick = () => {
        setLiked(!liked);
        if (liked === false) {
            setLikedCount(likedCount + 1);
        } else {
            setLikedCount(likedCount - 1);
        }
    };

    return (
        <div className="photos__buttons_like">
            <button
                className='like-btn'
                onClick={handleClick}
                >
                {liked ? (<img src={iconHeartFilled} alt="Like"/>)
                : (<img src={iconHeart} alt="Like"/>)}
            </button>
            <span>{likedCount}</span>
        </div>
    );
}

export default LikeButton;
