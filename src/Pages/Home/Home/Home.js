import React from 'react';
import Article from '../Article/Article';
import Banner from '../Cover/Banner';
import Services from '../Services/Services';


// home js file


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Article></Article>
        </div>
    );
};

export default Home;