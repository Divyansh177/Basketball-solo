let home_score = document.getElementById ("home-score");
let guest_score = document.getElementById ("guest-score");
let home_score_count = 0, guest_score_count = 0



function add_point_ (a, b) {
    
    if (b=="h") {
        
        home_score_count = home_score_count + a;
        home_score.textContent = home_score_count;
        
    }
    
    else {
        
        guest_score_count = guest_score_count + a;
        guest_score.textContent = guest_score_count;
        
    }

}



function reset (a, b) {
    
    if (a==1) {
        
        home_score_count = 0;
        home_score.textContent = 0;
        
    }
    
    if (b==1) {
        
        guest_score_count = 0;
        guest_score.textContent = 0;
        
    }
    
}