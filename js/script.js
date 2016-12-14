/*
#	WWF Global Earth Hour MicroSite
#	---
#	Developed by Ethos Digital
#
*/
/*
# -- GLOBAL VARIABLES -- #
*/
wwf.currentSection = 0;

wwf.isAnimated = false;

wwf.footerIsUp = false;





/*
# -- APP FUNCTIONS -- #
*/



// 打开菜单
wwf.goFooter = function () {
  console.log('打开菜单');
  wwf.footerIsUp = true;
  $('footer').animate({
    'padding-top': 0
  }, 100);
  return $('footer .lets-change').fadeOut(function () {
    var wh;
    wh = $(window).height() - 90;
    $('footer .page').fadeIn().animate({
      height: wh
    }, 1500, 'easeOutQuint');
    $('footer .page .inner').fadeIn();
    $('footer').addClass('active');
    return $('.logo-white').fadeIn(function () {
      return $('.logo-color').fadeOut();
    });
  });
};

// 关闭菜单
wwf.closeFooter = function () {
  $('footer .page').fadeIn().animate({
    height: 10
  }, 1500, 'easeOutQuint', function () {
    return wwf.footerIsUp = false;
  });
  $('footer .page .inner').fadeOut(function () {
    return $('footer .lets-change').fadeIn();
  });
  $('footer').removeClass('active');
  return $('.logo-color').fadeIn(function () {
    return $('.logo-white').fadeOut();
  });
};

// 调整大小
wwf.resize = function () {
  if (wwf.footerIsUp) return $('footer .page').height($(window).height() - 90);
};

wwf.addZero = function (n) {
  if (n < 10) {
    return '0' + n;
  } else {
    return n;
  }
};
// 倒计时功能
wwf.countdown = function () {
  var goTimer, remainder, self;
  self = this;
  self.target = new Date(2017, 1, 1, 1, 1);
  self.now = new Date();
  if (self.now <= self.target) {
    remainder = self.target - self.now;
    goTimer = function () {
      var days, hours, minutes, seconds;
      self.difference = remainder;
      days = Math.floor(self.difference / 1000 / 60 / 60 / 24);
      self.difference -= days * 1000 * 60 * 60 * 24;
      hours = Math.floor(self.difference / 1000 / 60 / 60);
      self.difference -= hours * 1000 * 60 * 60;
      minutes = Math.floor(self.difference / 1000 / 60);
      self.difference -= minutes * 1000 * 60;
      seconds = Math.floor(self.difference / 1000);
      $('footer .timer .days .value').text(wwf.addZero(days));
      $('footer .timer .hours .value').text(wwf.addZero(hours));
      $('footer .timer .mins .value').text(wwf.addZero(minutes));
      $('footer .timer .secs .value').text(wwf.addZero(seconds));
      remainder -= 1000;
      return setTimeout(goTimer, 1000);
    };
    return goTimer();
  }
};

wwf.template = function () {
  $(".slider").slider();
  $('#next').mouseover(function () {
    return $(this).stop().animate({
      width: 98
    }, 100);
  });
  $('#next').mouseout(function () {
    return $(this).stop().animate({
      width: 88
    }, 100);
  });
  $('#prev').mouseover(function () {
    return $(this).stop().animate({
      width: 98
    }, 100);
  });
  $('#prev').mouseout(function () {
    return $(this).stop().animate({
      width: 88
    }, 100);
  });
  $('footer').mouseenter(function () {
    if (!wwf.footerIsUp) {
      return $(this).stop().animate({
        'padding-top': 10
      }, 100);
    }
  });
  $('footer').mouseleave(function () {
    if (!wwf.footerIsUp) {
      return $(this).stop().animate({
        'padding-top': 0
      }, 100);
    }
  });
  $('footer').click(function () {
    if (!wwf.footerIsUp) return wwf.goFooter();
  });
  // 关闭菜单
  $('#close').click(function () {
    if (wwf.footerIsUp) return wwf.closeFooter();
  });
  $('footer .tweet-now').click(function () {
    var oh, ow, sl, st, x, y;
    st = window.screenY;
    sl = window.screenX;
    oh = window.outerHeight;
    ow = window.outerWidth;
    x = sl + ((ow / 2) - 250);
    y = st + ((oh / 2) - 200);
    return window.open('http://twitter.com/home?status=Go%20beyond%20the%20%23earthhour%20%26%20ask%20%40DefraGovUK%20to%20lead%20%26%20tackle%20food%20sustainability%20%26%20global%20hunger.%20http%3A%2F%2Fbit.ly%2FFoodStory%20Pls%20RT', '_blank', 'left=' + x + ',top=' + y + 'location=no, menubar=no, status=no, directories=no, width=500, height=400, scrollbars=yes, resizable=no');
  });
  $('footer .facebook').click(function () {
    var oh, ow, sl, st, x, y;
    st = window.screenY;
    sl = window.screenX;
    oh = window.outerHeight;
    ow = window.outerWidth;
    x = sl + ((ow / 2) - 250);
    y = st + ((oh / 2) - 200);
    return window.open('http://www.facebook.com/sharer/sharer.php?u=http://wwf.org.uk/foodstory/', '_blank', 'left=' + x + ',top=' + y + 'location=no, menubar=no, status=no, directories=no, width=500, height=400, scrollbars=yes, resizable=no');
  });
  return $('footer .google').click(function () {
    var oh, ow, sl, st, x, y;
    st = window.screenY;
    sl = window.screenX;
    oh = window.outerHeight;
    ow = window.outerWidth;
    x = sl + ((ow / 2) - 250);
    y = st + ((oh / 2) - 200);
    return window.open('https://plusone.google.com/_/+1/confirm?hl=en&url=http://wwf.org.uk/foodstory/', '_blank', 'left=' + x + ',top=' + y + 'location=no, menubar=no, status=no, directories=no, width=500, height=400, scrollbars=yes, resizable=no');
  });
};



wwf.init = function () {
  wwf.closeFooter();
  wwf.template();
  return wwf.countdown();


};

/*
# -- 实用功能 -- #
*/

wwf.getPageWidth = function () {
  return $(window).width();
};

wwf.direction = function (before, after) {
  if (after - before > 0) {
    return 'forward';
  } else {
    return 'back';
  }
};



$(function () {
  wwf.init();
  $('#next').click(function () {
    return wwf.next();
  });
  $('#prev').click(function () {
    return wwf.prev();
  });
  return $(window).resize(function () {
    return wwf.resize();
  });
});
