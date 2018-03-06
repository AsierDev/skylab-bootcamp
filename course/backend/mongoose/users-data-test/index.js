const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

const zildjian = new Cat({ name: 'Zildjian' });
zildjian.save().then(() => console.log('meow'));

const kitty = new Cat({ name: 'Kitty' });
kitty.save().then(() => console.log('meow'));


