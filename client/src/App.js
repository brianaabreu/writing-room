import React from 'react';
import AllPosts from './components/AllPosts/AllPosts';
import AllPostsTemp from './components/AllPosts/allPostsTemp';

import FrontPage from './frontPage';
import {
    BrowserRouter as Router,
    Switch,
    Route

} from 'react-router-dom';
import Contact from './components/Contact/Contact';

const App = () => {

    return(
    <Router>
        <div>
            <Switch> 
                    <Route path='/allposts' component={AllPostsTemp} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/' component={FrontPage} />
            </Switch>
        </div>
    </Router>
    )
}

export default App;