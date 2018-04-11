const baseResource = require('../base/base');

const _public = {};

_public.build = (app, collection) => {

  app.get(`/${collection}/:id?`, (req, res) => {
    baseResource.get(collection, req.params.id, req.query).then(result => {
      res.send(result);
    }, err => {
      res.send(err);
    });
  });

  app.post(`/${collection}`, (req, res) => {
    baseResource.post(collection, req.body).then(result => {
      res.send(result);
    }, err => {
      res.send(err);
    });
  });

  app.put(`/${collection}/:id`, (req, res) => {
    baseResource.put(collection, req.params.id, req.body).then(result => {
      res.send(result);
    }, err => {
      res.send(err);
    });
  });

  app.delete(`/${collection}/:id`, (req, res) => {
    baseResource.remove(collection, req.params.id).then(result => {
      res.send(result);
    }, err => {
      res.send(err);
    });
  });

  return app;

};

module.exports = _public;