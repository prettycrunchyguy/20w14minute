(function(){
  function cmd(a){
    document.getElementById('c-input').value = a;
    document.getElementById('c-input').dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Enter',
      code: 'Enter',
      which: 13,
      keyCode: 13,
    }))
  }
  return setInterval(function(){
    cmd('execute as @a run warp ' + Math.random());
  },60000);
})()
