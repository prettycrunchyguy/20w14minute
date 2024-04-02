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
    if (crunchyi % 5 == 0){
      cmd('execute as @a run warp isolation');
      setTimeout(function(){
        cmd('execute at @p run spawnpoint @a');
      },15000);
    }else{
      cmd('execute as @a in minecraft:the_overworld run tp @a ~ ~ ~');
      setTimeout(function(){
        cmd('execute at @p run spawnpoint @a');
      },15000);
    }
    crunchyi++;
  },120000);
})()
