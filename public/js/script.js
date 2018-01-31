// const apiKey = process.env.API_KEY;
$(document).ready(function() {

  let counter = 0;
  console.log('loading up');

  $('#searchBtn').on('click', function(event){
     let chosenWord = $('#wordInput').val();
     searchWord(chosenWord);
     console.log(chosenWord);
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

  function saveDef (){
    // $(`#btn${counter}`).on('click', function(event){
    //   console.log($(`def${counter}`).text());
    }

  function getData(data){
    $('#results').empty();
    $('#wordDef').empty();
    const dataWord = data[0].word;
    $('#wordDef').append(`<p>Definitions for ${dataWord}</p>`);
    data.forEach(function(element){
      let elText = element.text;
      $("#results").append(`<li> ${elText} <button>Save this definition</button> </li> <br>`);
      saveDef();
      counter++;
    })
  }
})
