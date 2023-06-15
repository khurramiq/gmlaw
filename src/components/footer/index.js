/* eslint-disable react/jsx-no-target-blank */
import footerflower from '../../assets/images/footerflower.png';
import footerlogo from '../../assets/images/footerlogo.png';
import footer_animation from '../../assets/images/footer_animation.gif';
import fb from '../../assets/images/fb.png';
import tw from '../../assets/images/tw.png';
import yt from '../../assets/images/yt.png';
import li from '../../assets/images/li.png';

const Footer = () => {
  return (
    <div className="absolute top-[100%] h-full w-screen overflow-hidden bg-[#262629]">
      <div className="relative h-[250px] md:ml-20 md:block xs:flex xs:justify-center">
        <img
          className="absolute footer_cow_nose  xs:w-[70%]"
          src={footerflower}
          alt="footerflower"
        />
      </div>
      <div className="absolute md:bottom-[90px] xs:bottom-[40px] left-0 right-0">
        <div className="sm:flex sm:items-end  xs:block xs:w-[90%] w-[1200px] mx-auto">
          <div className="sm:w-[50%] xs:w-[100%] text-white">
            <div>
              <img
                className="md:w-[80px] xs:w-[50px]"
                src={footerlogo}
                alt="footerlogo"
              />
            </div>
            <ul className="sm:text-[14px] xs:text-xs md:mt-3 xs:mt-2">
              <li>CONTACT</li>
              <li>PRIVACY POLICY</li>
              <li>COOKIES</li>
              <li>TERMS & CONDITIONS</li>
            </ul>
            <p className="sm:text-[14px] xs:text-xs font-bold md:mt-3 xs:mt-1 leading-tight">
              COW LEVEL AG
            </p>
            <p className="leading-tight sm:text-base xs:text-xs">
              Blegistrasse 1, 6343 Rotkreuz, Switzerland
              <br />
              <span className="sm:text-[14px] xs:text-xs hover:text-[#cf2e2e] cursor-pointer">
                info@cowlevel.ch
              </span>
            </p>

            <div className="flex md:mt-5 sm:mb-1 xs:mt-1">
              <a href="https://de-de.facebook.com/CowLevelAG/" target="_blank">
                <img
                  className="md:w-[40px] xs:w-[20px] mr-2"
                  src={fb}
                  alt="fb"
                />
              </a>
              <a href="https://twitter.com/CowLevel1" target="_blank">
                <img
                  className="md:w-[40px] xs:w-[20px] mr-2"
                  src={tw}
                  alt="tw"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCX6ZAFWb80J7B7CqQi00JmA/featured"
                target="_blank"
              >
                <img
                  className="md:w-[40px] xs:w-[20px] mr-2"
                  src={yt}
                  alt="yt"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/cow-level-ag/"
                target="_blank"
              >
                <img
                  className="md:w-[40px] xs:w-[20px] mr-2"
                  src={li}
                  alt="li"
                />
              </a>
            </div>
          </div>
          <div className="sm:w-[50%] xs:w-[100%] xs:mt-2 xs:block sm:flex justify-end items-center">
            <div className="text-white pr-5">
              <h3 className="md:text-[28px] xs:text-xs xs:mt-0">
                JOIN THE HERD
              </h3>
              <p className="md:text-[18px] xs:text-xs md:mt-2 xs:mt-0">
                Apply for &nbsp;
                <span className="hover:text-[#cf2e2e] cursor-pointer">
                  <a href="mailto:info@cowlevel.ch">info@cowlevel.ch</a>
                </span>
              </p>
            </div>
            <div className="xs:w-[100%] xs:mt-2 sm:w-[50%]">
              <img
                className="sm:w-full xs:w-[50%] m-auto"
                src={footer_animation}
                alt="footer_animation"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-[30px] md:py-[20px] xs:py-3 text-[18px] bg-[#1D242D]">
        <p className="md:text-[13px] xs:text-[8px] max-w-[1200px] mx-auto text-gray-400">
          All Rights Reserved. (c) 2023 Cow Level AG
        </p>
      </div>
    </div>
  );
};

export default Footer;
