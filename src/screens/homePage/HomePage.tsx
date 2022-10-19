import './HomePage.css';
import { homePageHeadline, homePageHeadlineDescription, homePageButton } from '../../assets/strings'; 

const HomePage = () => {
  return (
    <div className='homePageContainer'>
        <span className='homePageHeadline'>{homePageHeadline}</span>
        <span className='homePageHeadlineDescription'>{homePageHeadlineDescription}</span>
        <div className='homePageHeadlineBottom'>
            <div className='homePageHeadlineActionButton'>
                <span className='homePageHeadlineActionButtonText'>{homePageButton}</span>
            </div>
        </div>
    </div>
  );
}

export default HomePage;