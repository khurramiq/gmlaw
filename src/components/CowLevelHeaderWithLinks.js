import headerLogo from '../assets/images/gmlawLogo.png';
import { Link } from 'react-router-dom';

const CowLevelHeaderWithLinks = ({ fullpageApi, open, setOpen }) => {
  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto sm:p-5 xs:p-3 flex justify-between items-center">
        <div>
          <Link to="/" onClick={() => fullpageApi.moveTo(1)}>
            <img
              className="sm:w-[200px]  xs:w-[50px]"
              src={headerLogo}
              alt="headerLogo"
            />
          </Link>
        </div>
        {/* <ul className="sm:flex xs:hidden text-[#BCBDBD] text-[18px]">
          <li className="pl-5 pr-5">
            <Link to={'/'} className="hover:text-black">
              Home
            </Link>
          </li>
          <li className="pl-5 pr-5">
            <Link to={'/about'} className="hover:text-black">
              About
            </Link>
          </li>
          <li className="pl-5 pr-5">
            <Link to={'/form'} className="text-black hover:text-black">
              Form
            </Link>
          </li>
          <li className="pl-5 pr-5">
            <Link to={'/contact'} className="hover:text-black">
              Contact Us
            </Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default CowLevelHeaderWithLinks;
