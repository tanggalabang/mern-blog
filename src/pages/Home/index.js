import react from 'react';
import {Button, BlogItem, Gap} from '../../components'
import './home.scss';

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
        <Gap height={20} />
      </div>
    </div>
  )
}

export default Home; 
