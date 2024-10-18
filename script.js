// fetch and display when the button is clicked
document.getElementById('GetWaifu').onclick = function() {
  
  // using fetch to get random image
  fetch('https://api.waifu.pics/sfw/waifu')
      
      // converting to JSON
      .then(myjson => myjson.json())
      
      // assign argument
      .then(mywaifus => {
          
          // inserting image inside div
          document.getElementById('WaifuBox').innerHTML = `<div class="waifu"><img src="${mywaifus.url}"></div>`;
      })
      
      // if an error occurs during fetching message will pop up
      .catch(error => console.log('OPPS', error));
};
