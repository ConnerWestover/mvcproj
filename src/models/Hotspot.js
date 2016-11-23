const mongoose = require('mongoose');
const _ = require('underscore');

mongoose.Promise = global.Promise;

let HotspotModel = {};

const convertId = mongoose.Types.ObjectId;
const setName = name => _.escape(name).trim();

const HotspotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Downtown',
    set: setName,
  },

  date: {
    type: Date,
    required: true,
    default: new Date(),
  },

  category: {
    type: String,
    required: true,
    default: 'Party',
  },

  hotspotCreator: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },

  description: {
    type: String,
    required: true,
    default: 'THE Hotspot this week',
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

HotspotSchema.statics.toAPI = doc => ({
  name: doc.name,
});

HotspotSchema.statics.findByCreator = (ownerId, callback) => {
  const search = {
    hotspotCreator: convertId(ownerId),
  };

  return HotspotModel.find(search).select('name date category description hotspotCreator').exec(callback);
};

HotspotSchema.statics.findByCategory = (categoryType, callback) => {
  const search = {
    category: categoryType,
  };

  return HotspotModel.find(search).select('name date category description hotspotCreator').exec(callback);
};

HotspotModel = mongoose.model('Hotspot', HotspotSchema);

module.exports.HotspotModel = HotspotModel;
module.exports.HotspotSchema = HotspotSchema;
