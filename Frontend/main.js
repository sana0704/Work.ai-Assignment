import Navbar from './Navbar';
import CandidateTable from './Candidate';
import ReferralForm from './ReferralForm';
// import Profile from './components/Profile';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Profile from './components/Profile';

const Main = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<><Navbar/><CandidateTable/></>
        },
        {
            path:"/referral",
            element:<><Navbar/><ReferralForm/></>
        },
        {
            path:"/profile",
            element:<><Navbar/><Profile/></>
        }
    ]);
  return <RouterProvider router={router}/>;
}

export default Main;
