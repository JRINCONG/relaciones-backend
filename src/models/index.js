const Cite = require('./Cite')
const Country = require('./Country')



Cite.belongsTo(Country)
Country.hasMany(Cite)