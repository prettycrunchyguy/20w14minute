let crunchyi = 0;
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
    if (crunchyi % 10 == 0){
      cmd('execute as @a run warp rooms');
      setTimeout(function(){
        cmd('execute at @p run spawnpoint @a');
      },15000);
    }else{
      cmd('execute as @a run warp ' + Math.random());
      setTimeout(function(){
        cmd('execute at @p run spawnpoint @a');
      },15000);
    }
    crunchyi++;
  },120000);
})()
