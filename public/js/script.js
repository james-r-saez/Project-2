$(document).ready(function() {
    console.log('loading up');
    const $userDataCounterButton = $('#user-data-counter-button');
    $userDataCounterButton.click((e) => {
      e.preventDefault();
      $.ajax({
        url: "counter",
        type: "POST"
      })
      .done(function(data){
        console.log('done with ajax, data: ', data);
        const $userDataCounter = $('#user-data-counter');
        $userDataCounter.text(data.counter);
      });
    });
});
