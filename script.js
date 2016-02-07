var Game = {

      /**
       * It will generate game cards
       * @param  {[int]} limit
       * @return {[array]} [list of number which is a part of image link]
       */

      random: function (limit) {

          var data = Math.floor(Math.random() * (67 - 1 + 1)) + 1;
          var array = [];
            for (var i = 0; i < 5000; i++) {

                if (array.indexOf(i) !== undefined) {
                    array = i;
                }

                if (array.length == limit) {
                    break;
                }
            }

          return array;
      },

      /**
       * Get all cards and ready for outpt
       * @param  {[array]} array
       * @return {[HTML]}
       */

      generate: function (array) {

        var output = '';
        var i = 1;

        while ( i <= array.length ) {

          output += '<div class="row">';
          output += '<div class="card"><img src="cards/0.png" alt="" class="image" id="image_'+i+'" main_card="'+i+'"/></div>';
          output += '<div class="card"><img src="cards/0.png" alt="" class="image" id="image_'+(++i)+'" main_card="'+ (++i) +'"/></div>';
          output += '<div class="card"><img src="cards/0.png" alt="" class="image" id="image_'+(2+i)+'" main_card="'+(2+i)+'"/></div>';
          output += '</div>';

          i+2;
        }

        return output;

      },

      /**
       * @param  {[markup]} output [description]
       */

      render: function (output) {

          document.getElementById('game').innerHTML = output;
      },

      /**
       * The app will give this ammount of time to memorize those cards
       * @return {[txt]} [time]
       */

      memoryTime: function (timerEnds) {

          var second = parseInt(document.getElementById('second'));

          var timer = setTimeout(function () {

              if (id == timerEnds) {

                  clearInterval(timer);
                  break;

              } else {
                  // increment
                  document.getElementById('second').innerHTML = ++second;
              }

          } , 1000);
      },

      /**
       * Flip all cards and show the blank part
       */

      flipWholeBlank: function (array) {

            for (var i = 0; i < array.length; i++) {

                  var id = 'image_'+i+;
                  document.getElementById(id).getAttribute('src');

            }
      },

      /**
       * Flip all cards . show thier real face
       */

      flipWholeCard: function () {


      },

      flipSingleCard: function () {

      },

      flipBlankCard: function () {



      }
};


var Game = Object.create(Game);
Game.memoryTime(30);
