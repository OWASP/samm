const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user_manage',
  {
    vsamm_uname: {
      type: Sequelize.STRING
    },
    id: {
      type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    firstname: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    vsamm_pswd: {
      type: Sequelize.STRING
    },
    role: {
     type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)
