import './HomePage.css';
import { homePageHeadline, homePageHeadlineDescription, homePageButton, homePageSubtitle } from '../../assets/strings'; 

const HomePage = () => {
  return (
    <div className='homePageContainer'>
        <span className='homePageHeadline'>{homePageHeadline}</span>
        <span className='homePageHeadlineDescription'>{homePageHeadlineDescription}</span>
        <div className='homePageHeadlineBottom'>
            <span className='homePageHeadlineSubtitle'>{homePageSubtitle}</span>
            <div className='homePageHeadlineActionButton'>
                <span className='homePageHeadlineActionButtonText'>{homePageButton}</span>
            </div>
        </div>
    </div>
  );
}

export default HomePage;