
;(function(window){

    'use strict';

    function extend( a, b ) {
        for( var key in b ) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }


    function MobileNavigation(options){
        this.options = extend({},this.options);
        extend(this.options, options)

        this._init();

    }

    MobileNavigation.prototype = {
        _init: function(){
            this.trigger    =   document.querySelector(this.options.openBtn);
            this.btn_close  =   document.querySelector(this.options.closeBtn);
            this.wrapper    =   document.querySelector(this.options.wrapper);
            this.isMenuOpen =   false;


            this._initEvents();
        },
        _initEvents: function(){
            var self = this;

            this.trigger.addEventListener('click', function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                self._open();
            });

            this.btn_close.addEventListener('click', function(evt){
                evt.stopPropagation();
                evt.preventDefault();
                self._close();
            });
        },
        _open: function(){
            if( this.isMenuOpen ) return;
            classie.add( this.wrapper, this.options.openClass);
            this.isMenuOpen = true;
        },
        _close: function(){
            if( !this.isMenuOpen ) return;
            classie.remove( this.wrapper, this.options.openClass );
            this.isMenuOpen = false;
        },
        options: {
            openBtn:    '.c-menuIcon',
            closeBtn:   '.c-dismissIcon',
            wrapper:    '.p-page',
            openClass:  'is-open'
        }
    };


    window.MobileNavigation = MobileNavigation;

})(window);
