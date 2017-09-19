function createDividePage (_currentNum, _totalNum, _elem) {
  function addLi(_begin, _lis, _count, _currentNum) {
    for(var i=_begin; i<=_count; i++) {
      var $li = $('<li>'+i+'</li>');
      if(_currentNum == i) {
        $li.addClass('select');
      }
      _lis.push($li);
    }
  }
  var $ul = $('<ul class="w-divide-page clear-fix"></ul>');
  var $lis = [];
  if(_totalNum > 1) {
    if(_currentNum != 1 ) {
      $lis.push($('<li class="forward-page">上一页</li>'));
    }
    if(_totalNum <= 6) {
      addLi(1, $lis, _totalNum, _currentNum);
    }else {
      if(_currentNum <= 4) {
        addLi(1, $lis, _currentNum, _currentNum);
      }else {
        $lis.push($('<li>1</li>'));
        $lis.push($('<li class="dot">· · ·</li>'));
        addLi(_currentNum-2, $lis, _currentNum, _currentNum);
      }
      if(_totalNum-_currentNum <= 3) {
        addLi(_currentNum+1, $lis, _totalNum, _currentNum);
      }else {
        addLi(_currentNum+1, $lis, _currentNum+2, _currentNum);
        $lis.push($('<li class="dot">· · ·</li>'));
        $lis.push($('<li>'+_totalNum+'</li>'));
      }
    }
    if(_currentNum != _totalNum) {
      $lis.push($('<li class="next-page">下一页</li>'));
    }
  }
  $ul.append($lis);
  _elem.html($ul);
};

module.exports = createDividePage;