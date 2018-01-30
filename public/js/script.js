$(document).ready(function() {

  console.log('loading up');

  $('#searchBtn').on('click', function(event){
     var chosenWord = $('#wordInput').val();
     searchWord(chosenWord);
     console.log('jkjljlf ', chosenWord);
     $('#searchBtn').val('');
   });

  function searchWord(chosenWord){
    $.ajax({
      type: 'GET',
      url: `http://api.wordnik.com:80/v4/word.json/${chosenWord}/definitions?limit=200&includeRelated=true&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=de46d050b4e484050513f6e18e8051329c1ad1448e704f362`,
      success: function(responseData){
        console.log(responseData);
        getData(responseData);
      },
      error: function(responseData){
        console.log('ERROR');
      }
    })
  }

  function getData(data){
    data.forEach(function(element){
      $("#results").append(element.text);
    })
  }
})
