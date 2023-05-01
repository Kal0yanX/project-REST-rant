const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="/images/404.jpg" alt="404 Page Image" />
                <div>
                Photo by <a href="https://unsplash.com/@californong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nong V</a> on <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                </div>
            </main>
        </Def>
    )
}

module.exports = error404