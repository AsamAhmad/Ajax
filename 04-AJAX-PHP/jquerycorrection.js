$(function() {

// Jquery est maintenant chargé !
console.log('Jquery is Ready');

// -- J'écoute la soumission
$('#newsletter').submit(function(event) {


    // Ma fonction anonyme sera déclenché lors de la soumission du formulaire.
    

    // -- Bloquer la redirection du formulaire
    event.preventDefault();

    // -- Réinitialiser les erreurs pour éviter que les message d'erreur se répète
    $('#newsletter .is-invalid').removeClass('is-invalid');
    $('#newsletter .invalid-feedback').remove();
    $('#newsletter .alert-danger').remove();


    // -- Bloquer la redirection du formulaire
    const email = $('#email');
    const firstName = $('#firstName');
    const lastName = $('#lastName');


    // -- Vérification dans la console
    console.log( email.val()); // Affiche la valeur du champ email.
    console.log( firstName.val()); // Affiche la valeur du champ nom
    console.log( lastName.val()); // Et prénom

    // -- Vérification des champs
    if( email.val().length === 0 ) {

        // -- L'utilisateur n'a rien saisie dans le champs.
        email.addClass('is-invalid');
        $(`
        <div class="invalid-feedback">
        Vérifier votre email.
        </div>
        `).appendTo( email.parent());
    }

    if( firstName.val().length === 0 ) {

        // -- L'utilisateur n'a rien saisie dans le champs.
        firstName.addClass('is-invalid');
        $(`
        <div class="invalid-feedback">
        Vérifier votre Nom.
        </div>
        `).appendTo( firstName.parent());
    }

    if( lastName.val().length === 0 ) {

        // -- L'utilisateur n'a rien saisie dans le champs.
        lastName.addClass('is-invalid');
        $(`
        <div class="invalid-feedback">
        Vérifier votre Nom.
        </div>
        `).appendTo( lastName.parent());
    }

    if ($('#newsletter').find('.is-invalid').length === 0 ) {

        // -- Si je n'ai pas de classe 'is-invalid' parmi les enfants de ma newsletter, 
        // alors il n'y a pas d'erreur et je peux procéder à la suite de mon traitement.

        // console.log ( $('#newsletter').serialize() );
        console.log ( $(this));

        $.ajax ({
            type : $(this).attr('method'),
            url : $(this).attr('action'),
            data : $(this).serialize(),
            dataType : 'JSON',
            timeout : 5000
        })
        .done(function(resultat){
           // console.clear();
           // console.log(resultat.success);

            if(resultat.success) {
                // Retour positif du fichier PHP

                                $('#newsletter').replaceWith(`
                <div class="alert alert-success">
                Merci, votre e-mail a bien ajouté. <br>
                <u> A très vite </u>
                </div>
                `);

            } else {

                // Sinon, il y a eu un problème, nous allons vérifier d'où viens le soucis.
                
                    // A. Email déjà présent dans la base ?
                    if( resultat.errors.isEmailInDb ) {
                        
                        $('#newsletter').prepend(`
                            <div class="alert alert-danger">
                                Attention, votre adresse email est
                                <u>déjà présente dans nos listes.</u>
                            </div>
                        `);

                        email.addClass('is-invalid');
                        $(`<div class="invalid-feedback">
                                Cet email existe déjà.    
                            </div>`).appendTo( email.parent() );

                    } // fin if( resultat.errors.isEmailInDb )

                    // B. Email est invalid ?
                    if( resultat.errors.isEmailInvalid ) { }

                    // C. Email est vide ?
                    if( resultat.errors.isEmailEmpty ) { }
            }
        });
    } else {
        //sinon, il y a des erreurs dans le formulaire. Je peux afficher une 
        //message d'erreur

        $('#newsletter').prepend(`
            <div class="alert alert-danger">
                Attention, nous n'avons pas été en mesure de traiter
                votre demande.<br>
                <u> Verifiez vos informations </u>
            </div>
        `);    
    } // else | find ('is.invalid')
}); // $('#newsletter').submit
}); // $(function())