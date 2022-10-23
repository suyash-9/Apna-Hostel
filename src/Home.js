import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'


// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home' display="flex" flex-drection="column">
            <Banner />
            
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://homversity.s3.ap-south-1.amazonaws.com/Property-Photos/46-Thumbnail_1.jpg"
                title="Vidhya Ashram Boys Hostel || IPIA"
                description="Mess facility | 
                Single and Sharing Rooms both available"
                price=" 12k/Month"
            />
            <Card
                src="https://homversity.s3.ap-south-1.amazonaws.com/Property-Photos/7-Bedroom_2.jpg"
                title="Naman Residency"
                description="Girls Hostel | Single and Sharing Rooms both available"
                price=" 11K/Month"
            />
            <Card
                src="https://homversity.s3.ap-south-1.amazonaws.com/Property-Photos/65-Thumbnail_1.JPG"
                title="Dhakar Residency"
                description="Boys Hostel | 0.9 Km from ALLEN Career Institute"
                price="11K/Month"
            />
            </div>
        </div>
    )
}

export default Home
