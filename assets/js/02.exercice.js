$(document).ready(function () {
            $.getJSON('https://ipapi.co/json/', function (data) {
                console.log(data)


                const ul = $('<p class="lead" >');
                $(`
            
                        <p>
                            IP : ${data.ip} <br>
                            Code postal :${data.postal}<br>
                            Region : ${data.region}
                        </p>
                            
                
                    
            `).appendTo(ul);

                ul.appendTo($('body'));
            })
});


// Correction


        $(function() {
            // 2 façons possible de procéder :

            // 1. Une requète AJAX simple :
            $.ajax('https://ipapi.co/json/').done(function(data) {
                console.log( data );
                console.log( data.ip );
                console.log( data.city );
            });

            // 2. GetJSON, encore plus simple !
            $.getJSON('https://ipapi.co/json/', function(data) {
                // console.log( data );
                $(`
                    <p>
                        Votre IP est surveillée : ${data.ip}
                        <br> ${data.city} - ${data.region}
                    </p>
                `)
                .css({'background':'yellow', 'color':'red'})
                .appendTo( $('form') );
            });

        });

