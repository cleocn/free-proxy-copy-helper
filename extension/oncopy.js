

'use strict';

window.addEventListener('load', function (ev) {
  
  if (location.href.indexOf('www.kuaidaili.com') >= 0) {
    console.log('copy proxy success:');

    var a = document.getElementById("list").getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    a = [].slice.call(a)
    var proxy = a.map( (aa) => aa.getElementsByTagName("td")[3].innerHTML + "://"+aa.getElementsByTagName("td")[0].innerHTML + ":" + aa.getElementsByTagName("td")[1].innerHTML).join("\n");

    localStorage.setItem('proxies', (localStorage.getItem('proxies') || '') + '\n'+ proxy)
    // you can set clipboard data here, e.g.
    // you need to prevent default behaviour here, otherwise browser will overwrite your content with currently selected 
    console.log(proxy);
    ev.preventDefault();

    // next page
    for (var i=0; i<document.links.length;i++){
      if (document.links[i].className === 'active' && parseInt(document.links[i].text) < 100 ) {
        setTimeout(() => {
          document.links[i+1].click();
        }, 1500);
        break;
      }
    }
  }
  
});


window.addEventListener('copy', function (ev) {
  
  if (location.href.indexOf('www.kuaidaili.com') >= 0) {
    console.log('copy proxy success:');

    var proxy = localStorage.getItem('proxies');
    // you can set clipboard data here, e.g.
    ev.clipboardData.setData('text/plain', proxy );
    // you need to prevent default behaviour here, otherwise browser will overwrite your content with currently selected 
    console.log(proxy);
    localStorage.removeItem('proxies');

    ev.preventDefault();

    
  }
  
});
