import React from 'react';
import { useQuery } from '@apollo/client';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';
import { QUERY_SINGLE_AD } from '../../utils/queries';

const SingleAd = ({ adId }) => {
    console.log(adId)
    const { loading, data } = useQuery(QUERY_SINGLE_AD, {
        // pass URL parameter
        variables: { adId: adId },
    });

    const ad = data?.ad || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="singleAd bb">
            <h3 className="card-header singAd text-light p-2 m-0">
                {ad.adAuthor} <br />
                <span style={{ fontSize: '1rem' }}>
                    had this ad on {ad.createdAt}
                </span>
            </h3>
            <div className="bg-light py-4">
                <blockquote
                    className="p-4"
                    style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        border: '2px solid #1a1a1a',
                        lineHeight: '1.5',
                    }}
                >
                    {ad.title}
                    {ad.adText}
                </blockquote>

                <h4 className='contact p-4 ml-4' >contact me at : {ad.email}</h4>

            </div>

            <div className="my-5">
                <CommentList comments={ad.comments} />
            </div>
            <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <CommentForm adId={ad._id} />
            </div>
        </div>
    );
};

export default SingleAd;
