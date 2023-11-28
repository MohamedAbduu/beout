const express = require('express');
const cors = require('cors');
const { Users, Guides, sequelize } = require('./models');
const { Op } = require('sequelize');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const SessionStore = require('express-session-sequelize')(session.Store);

const bcrypt = require('bcrypt');
const saltRounds = 10;



const sequelizeSessionStore = new SessionStore({
	db: sequelize,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
	session({
		secret: 'your-secret-key',
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 10800000 },
	})
);

app.use(cors({ credentials: true, origin: 'https://beout-frontend.onrender.com/' }));


const isLoggedIn = (req, res, next) => {
	if (req.session.user) {
		next();
	} else {
		res.redirect('/');
	}
};

app.get('/display/*', isLoggedIn);


//USERS
//create new user
app.post('/register', (req, res) => {
	const { firstName, email, password } = req.body;
	if (!email || !password || !firstName) {
		return res.json({
			error: 'email, password, or first name is must be entered ',
		});
	}
  

	let hashPassword = bcrypt.hashSync(password, saltRounds);

	Users.create({ firstName, email, password: hashPassword }).then(
		(new_user) => {
			res.redirect('/login');
		}
	);
});
app.get('/test', (req, res)=>{
  res.json('hello world')
});


// Logs in users
app.post('/login', (req, res) => {
	const { email, password } = req.body;

	Users.findOne({ where: { email } }).then((user) => {
		if (!user) {
			return res.json({ error: 'No user found' });
		}

		console.log(user);

		let comparison = bcrypt.compareSync(password, user.password);
		if (comparison == true) {
			req.session.user = user;
			res.redirect('/profile');
		} else {
			res.json({ success: false });
		}
	});
});

//get user information
app.get('/users', (req, res) => {
	// Users.findOne({ where: { id: req.params.id } }).then((user) => {
	// 	res.json(user);
	// });
	console.log(req.session.user)
	res.json(req.session.user);
});

//log out users
app.get('/logout', (req, res) => {
	req.session.destroy(() => {
		res.json({ message: 'session destroyed', session: req.session });
	});
});

//change user information
// app.put('/users/settings', (req, res) => {
// 	if (req.session.user) {
// 		const { firstName, lastName, userPhoto } = req.body;
// 		Users.update(
// 			{ firstName, lastName, userPhoto },
// 			{
// 				where: {
// 					id: req.session.user.id,
// 				},
// 			}
// 		)
// 			.then((result) => {
// 				console.log(result);
// 				res.json({});
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 				res.json({ error: 'There was a problem updating your information' });
// 			});
// 	} else {
// 		res.json({ success: false, message: 'please login' });
// 	}
// });



app.get('/guides/:countryId', (req, res) => {
	Guides.findAll({ where: { countryId: req.params.countryId } }).then((Guides) => {
		res.json(Guides);
	});
});



app.listen(5000, () => {
	console.log('App started in port 5000');
});
