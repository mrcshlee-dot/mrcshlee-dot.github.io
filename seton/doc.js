// 세트온 개인정보처리방침·이용약관: 브라우저 언어가 한국어면 한국어, 아니면 영어로 보여준다.
// ?lang=ko / ?lang=en 이나 오른쪽 위 버튼으로 바꿀 수 있다
(function () {
  var param = new URLSearchParams(location.search).get('lang');
  var lang = param === 'ko' || param === 'en' ? param : (/^ko\b/i.test(navigator.language || '') ? 'ko' : 'en');
  document.documentElement.lang = lang;
  document.querySelector('article[lang="' + lang + '"]').hidden = false;
  document.title = document.querySelector('article[lang="' + lang + '"] h1').textContent + (lang === 'ko' ? ' · 세트온' : ' · SET ON');
  var other = lang === 'ko' ? 'en' : 'ko';
  var link = document.getElementById('switch');
  link.textContent = other === 'en' ? 'English' : '한국어';
  link.href = '?lang=' + other;
})();
