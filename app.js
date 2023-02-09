new Vue({
    el: "#app",
    data:{
        player_heal: 100,
        mounster_heal: 100,
        game_is_on: false,

    },
    methods :{
        start_game: function(){
            this.game_is_on=true;
        },
        attack: function(){
            var point =Math.ceil(Math.random() * 10)
            // this.mounster_heal = this.mounster_heal - point;
            this.mounster_heal -= point;
            this.mounster_attack();
            
        },
        special_attack: function(){
    
                var point =Math.ceil(Math.random() * 25)
                this.mounster_heal -= point;
                this.mounster_attack();
      

        },
        heal_up: function(){
            
            var point =Math.ceil(Math.random() * 20)
            this.player_heal += point;
            this.mounster_attack();
            
        },
        give_up: function(){
            this.player_heal= 0
            
        },
        mounster_attack: function(){
            var point =Math.ceil(Math.random() * 15)
            this.player_heal -= point;
      
        }
    },

    watch : {
        player_heal: function(value){
            if(value <= 0){
                this.player_heal=0;
                if(confirm("Oyunu KAYBETTİN.Tekrar denemek ister misin?")){
                    this.player_heal=100;
                    this.mounster_heal = 100;
                }
            }
            else if(value >=100){
                this.player_heal=100;
            }
        
        },
        mounster_heal: function(value){
        if(value<=0){
            this.mounster_heal = 0 ;
            if(confirm("Oyunu KAZANDIN.Tekrar denemek ister misin?")){
                this.player_heal=100;
                this.mounster_heal = 100;
            }
        }
     }
    }

})