import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import Home from '../Home/Home';
import NewPost from '../NewPost/NewPost'
import Error from '../Error/Error';
import PostOne from '../PostOne/PostOne';

import { Link, Route, Routes } from 'react-router-dom'

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className='Blog'>
                <header style={{backgroundColor: 'navy', color: 'white'}}>
                    <nav>
                        <ul>
                            <li><Link style={{color: 'white'}} to='/'>Home</Link></li>
                            <li><Link style={{color: 'white'}} to='/posts'>Posts</Link></li>
                            <li><a style={{color: 'white'}} href='/new-post'>New Post</a></li>
                        </ul> 
                    </nav>
                </header>
                {/* v.5 -> <Route path='/' component={Home} render={<div>HOME COMPONENT</div>} /> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/posts/*' element={<Posts />} /> */}
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:PostOne' element={<PostOne />} />
                    <Route path='/new-post' element={<NewPost />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </div>
        );
    }
}

export default Blog;