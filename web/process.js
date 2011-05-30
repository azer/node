function EventEmitter(){

}

module.exports = {
  'EventEmitter':EventEmitter
};

window.process = module.exports; // FIXME
