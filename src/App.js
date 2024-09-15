import './App.css';
import logo from './images/shared/logo.svg';
import keyboardImg from './images/desktop/image-keyboard.jpg';
import keyboardImgTwo from './images/desktop/image-phone-and-keyboard.jpg';
import keyboardImgThree from './images/desktop/image-glass-and-keyboard.jpg';
import compatible from './images/shared/icon-compatible.svg';
import bluetooth from './images/shared/icon-bluetooth.svg';
import battery from './images/shared/icon-battery.svg';
import light from './images/shared/icon-light.svg';

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="" />
        <button type='submit'>PRE-ORDER NOW</button>
      </header>

      <div className='section1'>
        <div className='section1-content'>
          <h1>TYPEMASTER KEYBOARD</h1>
          <p>Improve your productivity and gaming without breaking the bank.
             Upgrade to a high quality mechanical typing experience.</p>
          <div className='pre-order'>
            <button>PRE-ORDER NOW</button>
            <p>RELEASE ON 5/27</p>
          </div>
        </div>

        <div className='section1-img'>
          <img src={keyboardImg} alt="" />
        </div>
      </div>

      <div className='section2'>
        <div className='section2Img'>
          <div className='keyboardImgTwo-container'>
            <img className='keyboardImgTwo' src={keyboardImgTwo} alt="" />
          </div>
          <img className='keyboardImgThree' src={keyboardImgThree} alt="" />
        </div>
        <div className='section2-content'>
          <h3>MECHANICAL WIRELESS KEYBOARD</h3>
          <p>The Typemaster keyboard boasts top-notch build and practical
             design. It offers a wide variety of switches and keycaps, 
             along with reliable wireless connectivity.</p>
        </div>
      </div>

      <div className='section3'>
        <div className='functionality'>
          <div className='s3Img'>
            <img src={compatible} alt="" />
          </div>
          <h3>HIGHLY COMPATIBLE</h3>
          <p>Easy to use and works well with all major computer brands,
             gaming consoles and mobile devices. Plug & play, no installation
             or driver needed.</p>
        </div>
        <div className='functionality'>
          <div className='s3Img'>
            <img src={bluetooth} alt="" />
          </div>
          <h3>WIRELESS <br /> WITH BLUETOOTH</h3>
          <p>Powerful 2.4G RF technology allows you to connect the cordless
             keyboard from up to 30ft away. Simply plug the unifying receiver
             into your computer.</p>
        </div>
        <div className='functionality'>
          <div className='s3Img'>
            <img src={battery} alt="" />
          </div>
          <h3>HIGH CAPACITY BATTERY</h3>
          <p>Equipped with a long-lasting built-in battery, you’ll never
             have to spend a dime on replaceable ones. Enjoy 40 hours of 
             usage time between charges.</p>
        </div>
        <div className='functionality'>
          <div className='s3Img'>
            <img src={light} alt="" />
          </div>
          <h3>RGB BACKLIT MODES</h3>
          <p>Choose from 4 backlight brightness levels and adjustable 
            breathing speed. Each key glows intensely in the dark and helps
            you type in low light conditions.</p>
        </div>
      </div>

      <div className='section4'>
        <p><span>Typemaster 2021</span> | All Rights Reserved</p>
      </div>

    </>
  );
}

export default App;
