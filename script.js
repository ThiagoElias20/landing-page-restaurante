function reton() {
  
  document.getElementById('del').style.backgroundColor = '#D5D5D5';
  document.getElementById('ret').style.backgroundColor = '#fff';

  document.getElementById('del').style.color = '#585858';
  document.getElementById('ret').style.color = '#9A2727';

  document.getElementById('del').style.height = '100px';
  document.getElementById('del').style.marginTop = '25px';

  document.getElementById('ret').style.height = '125px';
  document.getElementById('ret').style.marginTop = '0px';

  //

  document.getElementById('delivery').style.display = 'none'
  document.getElementById('retirada').style.display = 'inline'

}


function delon() {
  document.getElementById('del').style.backgroundColor = '#fff';
  document.getElementById('ret').style.backgroundColor = '#D5D5D5';

  document.getElementById('del').style.color = '#9A2727';
  document.getElementById('ret').style.color = '#585858';

  document.getElementById('del').style.height = '125px';
  document.getElementById('del').style.marginTop = '0px';

  document.getElementById('ret').style.height = '100px';
  document.getElementById('ret').style.marginTop = '25px';

  //

  document.getElementById('delivery').style.display = 'inline'
  document.getElementById('retirada').style.display = 'none'
}