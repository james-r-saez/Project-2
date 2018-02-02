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
      method: 'GET',
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
    $('#wordBtn').click(e => {
    	e.preventDefault();
    	const word = e.target.getAttribute('data-word');
      const definition = e.target.getAttribute('data-def');
    	$.ajax({
    		url: "/users/wordbank",
    		method: "POST",
    		data: {name: word, definition: definition},   //this object will be available to server as req.body (for post request)
    		success: function(data){
    			const newWordId = data.newWordId;
          alert('Word Saved!')
    		}
    	});
    });
  }

  function getData(data){
    $('#results').empty();
    $('#wordDef').empty();
    const dataWord = data[0].word;
    const dataDef = data[0].text;
    console.log(dataDef);
    $('#wordDef').append(`<p>Definitions for ${dataWord} <button id='wordBtn' data-word ="${dataWord}" data-def="${dataDef}" >Save this word</button> </p>`);
    data.forEach(function(element){
      let elText = element.text;
      $("#results").append(`<li> ${elText} </li> <br>`);
      counter++;
    });
    saveDef();
    moment().format('MMMM Do YYYY, h:mm:ss a')
  }


  $('.deleteBtn').click(e => {
  	e.preventDefault();
    const word = e.target.getAttribute('data-word');
  	$.ajax({
  		url: "/users/wordbank/",
  		method: "DELETE",
  		data: {name: word},
  		success: function(data){
  			const newWordId = data.newWordId;
        alert('Word Deleted!')
      }
    });
  });


})
