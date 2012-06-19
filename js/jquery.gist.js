/* 
    Carregando os gists por ajax
    Author: Luís Dalmolin <luis@escape.ppg.br>     
*/ 

;(function ( $, window, undefined ) {
    // carregando os gists 
    $.fn.loadGists = function( options )
    {
        // sobreescrevendo os defaults 
        var opt  = $.extend( $.fn.loadGists.options, options );

        $( opt.element ).each(function(){
            var $this = $(this), 
                id    = $this.attr('data-gist'), 
                url   = 'https://gist.github.com/' + id + '.json';
            
            // mensagem de load 
            $this.html('Carregando gist ' + url + ' ...');

            // buscando o GIST 
            $.ajax({ 
                url      : url, 
                dataType : 'jsonp', 
                timeout  : 10000,
                success: function(response) {
                    if( response && response.div ) {
                        // adicionando o conteudo 
                        $this.html( response.div );
                    }
                },
                error: function(){
                    $this.html('Erro ao carregar o GIST ' + url);
                }
            }); 
        });
    }

    // defaults 
    $.fn.loadGists.options = {
        element : '[data-gist]'
    }
}(jQuery, window));