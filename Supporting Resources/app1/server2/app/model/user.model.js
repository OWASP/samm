module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
	  name: {
		  type: Sequelize.STRING
    },
    lname: {
      type: Sequelize.STRING
    },
	  username: {
		  type: Sequelize.STRING
    },
	  email: {
		  type: Sequelize.STRING
	  },
	  password: {
		  type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.INTEGER
    },
    role: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    groupname: {
      type: Sequelize.STRING
    },
    company: {
      type: Sequelize.STRING
    },
    empid: {
      type: Sequelize.STRING
    },

	});

	return User;
}
