import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const user = useSelector(state => state.user.user)
    const [posts, setPosts] = useState()
    
    useEffect(() => {     
        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, [])

    const userImageInitial = (name) => {
        return name.substring(0, 1)
    }

  return (
    <>
        {user && 
        <div className="container-fluid">
            <div className="row mt-5 mb-3">
                <div className="col"><h3>{user.name}</h3></div>
            </div>
            <div className="row"><i>@{user.username} &mdash; {user.email}</i></div>
            <div className="row">
                <div className="col">
                    {`${user.address.street} st., ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                </div>
            </div>
            <hr />

            { posts && posts.map(post => 
                <div className="container-fluid d-flex justify-content-center" key={post.id}>
                    <div className='row text-start w-50'>
                        <div className="row">
                            <div className="col-3 d-flex  bg-secondary rounded-circle pl-5" style={{width: 50, height: 50}}>
                                <h1>{userImageInitial(user.name)}</h1>
                            </div>
                            <div className="col">
                                <p><b>{user.name}</b> <span>@{user.username}</span></p>
                                {/* <p>{post.title}</p> */}
                                <p>{post.body}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            )}
        </div>
        }
    </>
  )
}