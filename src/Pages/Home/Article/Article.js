import React from 'react';
import tour1 from '../../../images/tour1.jpg';
import tour2 from '../../../images/tour2.jpg';
import tour3 from '../../../images/tour3.jpg';
import './Article.css';


const Article = () => {
    return (
        <div className=" article">
            <h1 className="mb-3">Health Tips</h1>
            
            <div>
                <div className="card-group">
                    <div className="card me-2 bg-white">
                        <img src={tour1} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">How Vitamin C can protect against the risk of coronavirus</h5>
                            <p className="card-text">by
                            Dr. Nyjon Eccles
                            in Article</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 50 mins ago</small>
                        </div>
                    </div>
                    <div className="card me-2 bg-white">
                        <img src={tour2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Natural medicine – a growing force in world healthcare</h5>
                            <p className="card-text">by
                            Dr. Nyjon Eccles
                            in Article</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 2 hours ago</small>
                        </div>
                    </div>
                    <div className="card bg-white">
                        <img src={tour3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Don’t risk being another cancer statistic</h5>
                            <p className="card-text">by
                            Dr. Nyjon Eccles
                            in Cancer Patient Support</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 5 hours ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;