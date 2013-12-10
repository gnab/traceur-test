function deferredTimeout (delay) {
  var deferred = new Deferred();

  setTimeout(function () {
    deferred.callback();
    //deferred.cancel();
  }, delay);

  return deferred;
}

function deferredLog(str) {
  console.log('before');
  await deferredTimeout(1000);
  console.log('after');
}

deferredLog().then(function () { console.log("Done!"); });
