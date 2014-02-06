Package.describe({
    summary: "packaging canvasResize for meteor JS."
});

Package.on_use(function(api) {
    api.use('jquery', 'client');
    api.add_files('lib/canvasResize.js', 'client');
    api.add_files('lib/jquery.canvasResize.js', 'client');
});
