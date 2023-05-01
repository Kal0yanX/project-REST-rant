const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/fruit-drink.jpg" alt="Fruit Drink" />
                <div>
                Photo by <a href="https://unsplash.com/@nehadeshmukh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Neha Deshmukh</a> on <a href="https://unsplash.com/s/photos/chai-fruit-drink?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
                <a href="/places">
                  <button className="btn-primary">Places Page</button>
                </a>
          </main>
      </Def>
    )
  }
  

module.exports = home