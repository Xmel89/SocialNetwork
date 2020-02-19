import React from 'react';
import './App.css';

const App = () => {
  return(
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://image.useinsider.com/sportmaster/defaultImageLibrary/Pop_up_card-6CXlzOs9Zysj7O4x5sUi1560864030.png'/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='http://cdn.sptmr.ru/upload/dip_content/2020/hp/8-week/images/slide3.jpg'/>
        </div>
        <div>
          ava+ descr
        </div>
        <div>
          ava+ descr
        </div>
          <div>
            My postr
            <div>
              New Post
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
