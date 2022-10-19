import './MyStory.css';
import { myStoryTitle, myStoryDescription, myStoryImageDescription } from '../../assets/strings'; 
import { myStoryImage } from '../../assets/svgImages'; 

const MyStory = () => { 
    return ( 
        <div className='myStoryContainer'>
            <span className='myStoryTitle'>{myStoryTitle}</span>
            <div className='myStoryImageAndTextContainer'>
                <img className='myStoryImage' src={myStoryImage} alt={myStoryImageDescription}/> 
                <span className='myStoryText'>{myStoryDescription}</span>
            </div>
        </div>
    )
}

export default MyStory;