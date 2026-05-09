(function () {
  const cursor = document.createElement('img');
  cursor.id = 'stylus-cursor';
  cursor.src = '/assets/images/stylus-cursor.png';
  cursor.width = 50;
  cursor.height = 50;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', function (e) {
    // hotspot: 니들 팁 위치 (10, 8) 오프셋
    cursor.style.transform = 'translate(' + (e.clientX - 10) + 'px,' + (e.clientY - 8) + 'px)';
  });

  document.addEventListener('mouseleave', function () {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1';
  });
})();
