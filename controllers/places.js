const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

//Post /places
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})



// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/tables.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/drinks.jpg'
      }]
      
      res.render('places/index', { places })

})
  
module.exports = router