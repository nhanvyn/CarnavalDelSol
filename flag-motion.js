var flags = document.querySelectorAll('.flag');

flags.forEach((flag, i) => {
  anime({
    targets: flag,
    translateX: {
      value: function() {
        return 320 * Math.cos(2 * Math.PI * i / flags.length);
      },
      duration: 120000,
      easing: 'linear',
      loop: true
    },
    translateY: {
      value: function() {
        return 320 * Math.sin(2 * Math.PI * i / flags.length);
      },
      duration: 120000,
      easing: 'linear',
      loop: true
    },
    rotate: {
      value: '1turn',
      duration: 120000,
      easing: 'linear',
      loop: true
    }
  });
});