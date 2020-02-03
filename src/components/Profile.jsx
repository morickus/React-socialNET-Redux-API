import React from 'react';

function Profile() {
    return (
        <main className='content'>
            <div>
                <img alt='banner' src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </main>
    );
}

export default Profile;