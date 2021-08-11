const User= require(`../models/User`);

exports.home = (req, res) => {
    User.find().sort('id').exec((err, users) => {
        res.render('index', { users: users });
      });
};

exports.search = (req, res) => {
  console.log(req.params.id);
    User.findOne({ id: req.query.id }).exec((err, user) => {
      res.render('index', { users: [user] });
    });
}
