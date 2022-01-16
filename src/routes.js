import { Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import ScrollToTop from './utils/ScrollToTop';

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { EmailConfirm } from './pages/EmailConfirm';

const BaseRouter = () => {
    return(
        <div>
            <AnimatePresence>
                <ScrollToTop>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />  
                    <Route exact path="/confirmemail" component={EmailConfirm} />   
                </ScrollToTop>
            </AnimatePresence>
        </div>
    )
}

export default BaseRouter;