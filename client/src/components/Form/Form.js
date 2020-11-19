import React, {useState, useEffect} from 'react';
import FileBase from 'react-file-base64';
import "../../styles.css";
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from "../../actions/posts";
import {useSelector} from 'react-redux';

const Form = ({currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

    return(
        <div className="formWrapper" style={{background: 'white', width: '85%' }}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div className="create">Create a Post!</div>
                    <input
                        className="formInput"
                        name="creator"
                        type="text"
                        label="creator"
                        value={postData.creator}
                        onChange={(e) => 
                            setPostData({
                                ...postData, creator:e.target.value
                        })}
                        placeholder="creator"
                    />
                    <input
                        className="formInput"
                        name="title"
                        type="text"
                        label="title"
                        value={postData.title}
                        onChange={(e) => 
                            setPostData({
                                ...postData, title:e.target.value
                        })}
                        placeholder="title"
                    />
                    <input
                    style={{
                        height: '4vh'
                    }}
                        className="formInput"
                        name="message"
                        type="text"
                        label="message"
                        value={postData.message}
                        onChange={(e) => 
                            setPostData({
                                ...postData, message:e.target.value
                        })}
                        placeholder="message"
                    />
                    <input
                        className="formInput"
                        name="tags"
                        type="text"
                        label="tags"
                        value={postData.tags}
                        onChange={(e) => 
                            setPostData({
                                ...postData, tags:e.target.value
                        })}
                        placeholder="tags"
                    />
                    <div>
                        
                        <FileBase
                            id="fileImg"
                            type="file"
                            multiple={false}
                            onDone={({base64}) => 
                                setPostData({...postData, selectedFile:base64})}
                        />
                    </div>
                    <button 
                        style={{
                            backgroundColor: 'white',
                            padding: '3px 12px 3px',
                            marginRight: '16px',
                            cursor:'pointer',
                            color: 'black',
                            border: '1px solid rgb(189, 189, 189)',
                            marginBottom: '15px',
                            borderRadius: '3px',
                            marginTop: '20px',
                            transition: '.3s',
                            fontSize: '11px'
                        }}
                        id="submitBtn"
                        type="submit">
                        Submit
                    </button>
                    <button 
                        style={{
                            backgroundColor: 'white',
                            padding: '3px 12px 3px',
                            marginRight: '16px',
                            cursor:'pointer',
                            color: 'black',
                            border: '1px solid rgb(189, 189, 189)',
                            marginBottom: '15px',
                            borderRadius: '3px',
                            marginTop: '20px',
                            transition: '.3s',
                            fontSize: '11px'

                        }}
                        id="clearBtn"
                        onClick={clear}>
                        Clear
                    </button>
            </form>
        </div>
    )
}
export default Form;