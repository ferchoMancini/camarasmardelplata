module.exports = function(app) {

    /* Categoria */
    //Web routes
    var categorias = require('./controllers/categorias');
    app.get('/categorias', categorias.webIndex);
    app.get('/categorias/new', categorias.webNew);
    app.post('/categorias/new', categorias.webNewPost);
    app.get('/categorias/edit/:id', categorias.webEdit);
    app.post('/categorias/edit/:id', categorias.webEditPost);
    app.delete('/categorias/delete/:id', categorias.webDelete);

    //Data endpoints
    app.get('/data/categorias', categorias.findAll);
    app.get('/data/categorias/:id', categorias.findById);
    app.get('/data/categorias-import', categorias.import);
    app.post('/data/categorias', categorias.add);
    app.put('/data/categorias/:id', categorias.update);
    app.delete('/data/categorias/:id', categorias.delete);

    /* Producto */
    //Web routes
    var productos = require('./controllers/productos');
    app.get('/productos', productos.webIndex);
    app.get('/productos/new', productos.webNew);
    app.post('/productos/new', productos.webNewPost);
    app.get('/productos/edit/:id', productos.webEdit);
    app.post('/productos/edit/:id', productos.webEditPost);
    app.delete('/productos/delete/:id', productos.webDelete);

    //Data endpoints
    app.get('/data/productos', productos.findAll);
    app.get('/data/productos/:id', productos.findById);
    app.get('/data/productos-import', productos.import);
    app.post('/data/productos', productos.add);
    app.put('/data/productos/:id', productos.update);
    app.delete('/data/productos/:id', productos.delete);
}
