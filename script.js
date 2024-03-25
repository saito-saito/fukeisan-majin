function make_question(word){
    $("p").text(word);
    make_select(word);
}
let answer = 0;
let tsumo_flg = false;
let han = 1;
let oya = 0;
let ko = 0;
let fu = 20;

function score(){
    fu = Math.ceil(fu / 10) * 10;
    if(tsumo_flg){
        if(answer == 6){
            answer = 6 * fu * Math.pow(2, han + 2);
            if(answer > 12000){
                answer = 12000;
            }
            ko = Math.ceil(answer / 300) * 100;
            alert(ko + " all");
        }else{
            answer = 4 * fu * Math.pow(2, han + 2);
            if(answer > 8000){
                answer = 8000;
            }
            oya = Math.ceil(answer / 200) * 100;
            ko = Math.ceil(answer / 400) * 100;
            alert(ko + " - " + oya);
        }
    }else{
        if(answer == 6){
            answer = 6 * fu * Math.pow(2, han + 2);
            answer = Math.ceil(answer / 100) * 100;
            if(answer > 12000){
                answer = 12000;
            }
            alert(answer);
        }else{
            answer = 4 * fu * Math.pow(2, han + 2);
            answer = Math.ceil(answer / 100) * 100;
            if(answer > 8000){
                answer = 8000;
            }
            alert(answer);
        }
    }
}
function make_select(word){
    $(".yes").off("click");
    $(".no").off("click");
    switch(word){
        case "親ですか？":
            $(".yes").on("click", function(){
                answer = 6;
                make_question("ツモですか？");
            });
            $(".no").on("click", function(){
                answer = 4;
                make_question("ツモですか？");
            })
            break;

        case "ツモですか？":
            $(".yes").on("click", function(){
                tsumo_flg = true;
                make_question("役満ですか？");
            });
            $(".no").on("click", function(){
                tsumo_flg = false;
                make_question("役満ですか？");
            })
            break;

        case "役満ですか？":
            $(".yes").on("click", function(){
                if(tsumo_flg){
                    if(answer == 6){
                        alert("16000 all");
                    }else{
                        alert("8000 - 16000");
                    }
                }else{
                    if(answer == 6){
                        alert("48000");
                    }else{
                        alert("32000");
                    }
                }
            });
            $(".no").on("click", function(){
                make_question("5翻以上ですか？");
            })
            break;

        case "5翻以上ですか？":
            $(".yes").on("click", function(){
                make_question("6翻以上ですか？");
            });
            $(".no").on("click", function(){
                make_question("4翻ですか？");
            })
            break;

        case "6翻以上ですか？":
            $(".yes").on("click", function(){
                make_question("8翻以上ですか？");
            });
            $(".no").on("click", function(){
                if(tsumo_flg){
                    if(answer == 6){
                        alert("4000 all");
                    }else{
                        alert("2000 - 4000");
                    }
                }else{
                    if(answer == 6){
                        alert("12000");
                    }else{
                        alert("8000");
                    }
                }
            })
            break;

        case "8翻以上ですか？":
            $(".yes").on("click", function(){
                make_question("11翻以上ですか？");
            });
            $(".no").on("click", function(){
                if(tsumo_flg){
                    if(answer == 6){
                        alert("6000 all");
                    }else{
                        alert("3000 - 6000");
                    }
                }else{
                    if(answer == 6){
                        alert("18000");
                    }else{
                        alert("12000");
                    }
                }
            })
            break;

        case "11翻以上ですか？":
            $(".yes").on("click", function(){
                make_question("13翻以上ですか？");
            });
            $(".no").on("click", function(){
                if(tsumo_flg){
                    if(answer == 6){
                        alert("8000 all");
                    }else{
                        alert("4000 - 8000");
                    }
                }else{
                    if(answer == 6){
                        alert("24000");
                    }else{
                        alert("16000");
                    }
                }
            })
            break;

        case "13翻以上ですか？":
            $(".yes").on("click", function(){
                if(tsumo_flg){
                    if(answer == 6){
                        alert("16000 all");
                    }else{
                        alert("8000 - 16000");
                    }
                }else{
                    if(answer == 6){
                        alert("48000");
                    }else{
                        alert("32000");
                    }
                }
            });
            $(".no").on("click", function(){
                if(tsumo_flg){
                    if(answer == 6){
                        alert("12000 all");
                    }else{
                        alert("6000 - 12000");
                    }
                }else{
                    if(answer == 6){
                        alert("36000");
                    }else{
                        alert("24000");
                    }
                }
            })
            break;

        case "4翻ですか？":
            $(".yes").on("click", function(){
                han = 4;
                make_question("平和ですか？");
            });
            $(".no").on("click", function(){
                make_question("3翻ですか？");
            })
            break;
        
        case "3翻ですか？":
            $(".yes").on("click", function(){
                han = 3;
                make_question("平和ですか？");
            });
            $(".no").on("click", function(){
                make_question("2翻ですか？");
            })
            break;

        case "2翻ですか？":
            $(".yes").on("click", function(){
                han = 2;
                make_question("平和ですか？");
            });
            $(".no").on("click", function(){
                han = 1;
                make_question("平和ですか？");
            })
            break;

        case "平和ですか？":
            $(".yes").on("click", function(){
                if(tsumo_flg){
                    if(answer == 6){
                        answer = 6 * 20 * Math.pow(2, han + 2);
                        ko = Math.ceil(answer / 300) * 100;
                        alert(ko + " all");
                    }else{
                        answer = 4 * 20 * Math.pow(2, han + 2);
                        oya = Math.ceil(answer / 200) * 100;
                        ko = Math.ceil(answer / 400) * 100;
                        alert(ko + " - " + oya);
                    }
                }else{
                    answer = answer * 30 * Math.pow(2, han + 2);
                    answer = Math.ceil(answer / 100) * 100;
                    alert(answer);
                }
            });
            $(".no").on("click", function(){
                make_question("七対子ですか？");
            })
            break;

        case "七対子ですか？":
            $(".yes").on("click", function(){
                if(tsumo_flg){
                    if(answer == 6){
                        answer = 6 * 25 * Math.pow(2, han + 2);
                        ko = Math.ceil(answer / 300) * 100;
                        alert(ko + " all");
                    }else{
                        answer = 4 * 25 * Math.pow(2, han + 2);
                        oya = Math.ceil(answer / 200) * 100;
                        ko = Math.ceil(answer / 400) * 100;
                        alert(ko + " - " + oya);
                    }
                }else{
                    answer = answer * 25 * Math.pow(2, han + 2);
                    answer = Math.ceil(answer / 100) * 100;
                    alert(answer);
                }
            });
            $(".no").on("click", function(){
                make_question("面前ですか？");
            })
            break;

        case "面前ですか？":
            $(".yes").on("click", function(){
                if(tsumo_flg){
                    fu += 2;
                }else{
                    fu += 10;
                }
                make_question("雀頭は役牌ですか？");
            });
            $(".no").on("click", function(){
                if(tsumo_flg){
                    fu += 2;
                }
                make_question("雀頭は役牌ですか？");
            })
            break;

        case "雀頭は役牌ですか？":
            $(".yes").on("click", function(){
                fu += 2;
                make_question("雀頭は連風牌(ダブ東,ダブ南)ですか？");
            });
            $(".no").on("click", function(){
                make_question("待ちはペンチャン,カンチャン,タンキ,ノベタンのいずれかですか？");
            })
            break;

        case "雀頭は連風牌(ダブ東,ダブ南)ですか？":
            $(".yes").on("click", function(){
                fu += 2;
                make_question("待ちはペンチャン,カンチャン,タンキ,ノベタンのいずれかですか？");
            });
            $(".no").on("click", function(){
                make_question("待ちはペンチャン,カンチャン,タンキ,ノベタンのいずれかですか？");
            })
            break;

        case "待ちはペンチャン,カンチャン,タンキ,ノベタンのいずれかですか？":
            $(".yes").on("click", function(){
                fu += 2;
                make_question("刻子または槓子はありますか？");
            });
            $(".no").on("click", function(){
                make_question("刻子または槓子はありますか？");
            })
            break;

        case "刻子または槓子はありますか？":
            $(".yes").on("click", function(){
                make_question("刻子はありますか？");
            });
            $(".no").on("click", function(){
                if(fu == 20){
                    fu = 30;
                }
                score();
            })
            break;

        case "刻子はありますか？":
            $(".yes").on("click", function(){
                make_question("1・9・字牌の刻子はありますか？");
            });
            $(".no").on("click", function(){
                make_question("1・9・字牌の槓子はありますか？");
            })
            break;

        case "1・9・字牌の刻子はありますか？":
            $(".yes").on("click", function(){
                make_question("1・9・字牌の明刻はありますか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の明刻はありますか？");
            })
            break;

        case "1・9・字牌の明刻はありますか？":
            $(".yes").on("click", function(){
                make_question("1・9・字牌の明刻は1つですか？");
            });
            $(".no").on("click", function(){
                make_question("1・9・字牌の暗刻は1つですか？");
            })
            break;

        case "1・9・字牌の明刻は1つですか？":
            $(".yes").on("click", function(){
                fu += 4;
                make_question("1・9・字牌の暗刻はありますか？");
            });
            $(".no").on("click", function(){
                make_question("1・9・字牌の明刻は2つですか？");
            })
            break;

        case "1・9・字牌の明刻は2つですか？":
            $(".yes").on("click", function(){
                fu += 8;
                make_question("1・9・字牌の暗刻はありますか？");
            });
            $(".no").on("click", function(){
                make_question("1・9・字牌の明刻は3つですか？");
            })
            break;

        case "1・9・字牌の明刻は3つですか？":
            $(".yes").on("click", function(){
                fu += 12;
                make_question("1・9・字牌の暗刻はありますか？");
            });
            $(".no").on("click", function(){
                fu += 16;
                score();
            })
            break;

        case "1・9・字牌の暗刻はありますか？":
            $(".yes").on("click", function(){
                make_question("1・9・字牌の暗刻は1つですか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の刻子はありますか？");
            })
            break;

        case "1・9・字牌の暗刻は1つですか？":
            $(".yes").on("click", function(){
                fu += 8;
                make_question("2~8牌の刻子はありますか？");
            });
            $(".no").on("click", function(){
                make_question("1・9・字牌の明刻は2つですか？");
            })
            break;

        case "1・9・字牌の暗刻は2つですか？":
            $(".yes").on("click", function(){
                fu += 16;
                make_question("2~8牌の刻子はありますか？");
            });
            $(".no").on("click", function(){
                fu += 24;
                make_question("2~8牌の刻子はありますか？");
            })
            break;

        case "2~8牌の刻子はありますか？":
            $(".yes").on("click", function(){
                make_question("2~8牌の明刻はありますか？");
            });
            $(".no").on("click", function(){
                make_question("槓子はありますか？");
            })
            break;

        case "2~8牌の明刻はありますか？":
            $(".yes").on("click", function(){
                make_question("2~8牌の明刻は1つですか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の暗刻はありますか？");
            })
            break;

        case "2~8牌の明刻は1つですか？":
            $(".yes").on("click", function(){
                fu += 2;
                make_question("2~8牌の暗刻はありますか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の明刻は2つですか？");
            })
            break;

        case "2~8牌の明刻は2つですか？":
            $(".yes").on("click", function(){
                fu += 4;
                make_question("2~8牌の暗刻はありますか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の明刻は3つですか？");
            })
            break;

        case "2~8牌の明刻は3つですか？":
            $(".yes").on("click", function(){
                fu += 6;
                make_question("2~8牌の暗刻はありますか？");
            });
            $(".no").on("click", function(){
                fu += 8;
                score();
            })
            break;

        case "2~8牌の暗刻はありますか？":
            $(".yes").on("click", function(){
                make_question("2~8牌の暗刻は1つですか？");
            });
            $(".no").on("click", function(){
                make_question("槓子はありますか？");
            })
            break;

        case "2~8牌の暗刻は1つですか？":
            $(".yes").on("click", function(){
                fu += 4;
                make_question("槓子はありますか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の暗刻は2つですか？");
            })
            break;

        case "2~8牌の暗刻は2つですか？":
            $(".yes").on("click", function(){
                fu += 8;
                make_question("槓子はありますか？");
            });
            $(".no").on("click", function(){
                fu += 12;
                make_question("槓子はありますか？");
            })
            break;

        case "槓子はありますか？":
            $(".yes").on("click", function(){
                make_question("1・9・字牌の槓子はありますか？");
            });
            $(".no").on("click", function(){
                score();
            })
            break;

        case "1・9・字牌の槓子はありますか？":
            $(".yes").on("click", function(){
                make_question("1・9・字牌の明槓はありますか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の明槓はありますか？");
            })
            break;

        case "1・9・字牌の明槓はありますか？":
            $(".yes").on("click", function(){
                make_question("1・9・字牌の明槓は1つですか？");
            });
            $(".no").on("click", function(){
                make_question("1・9・字牌の暗槓は1つですか？");
            })
            break;

        case "1・9・字牌の明槓は1つですか？":
            $(".yes").on("click", function(){
                fu += 16;
                make_question("1・9・字牌の暗槓はありますか？");
            });
            $(".no").on("click", function(){
                make_question("1・9・字牌の明槓は2つですか？");
            })
            break;

        case "1・9・字牌の明槓は2つですか？":
            $(".yes").on("click", function(){
                fu += 32;
                make_question("1・9・字牌の暗槓はありますか？");
            });
            $(".no").on("click", function(){
                fu += 48;
                score();
            })
            break;

        case "1・9・字牌の暗槓はありますか？":
            $(".yes").on("click", function(){
                make_question("1・9・字牌の暗槓は1つですか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の槓子はありますか？");
            })
            break;

        case "1・9・字牌の暗槓は1つですか？":
            $(".yes").on("click", function(){
                fu += 32;
                make_question("2~8牌の槓子はありますか？");
            });
            $(".no").on("click", function(){
                make_question("1・9・字牌の暗槓は2つですか？");
            })
            break;

        case "1・9・字牌の暗槓は2つですか？":
            $(".yes").on("click", function(){
                fu += 64;
                make_question("2~8牌の槓子はありますか？");
            });
            $(".no").on("click", function(){
                fu += 96;
                score();
            })
            break;

        case "2~8牌の槓子はありますか？":
            $(".yes").on("click", function(){
                make_question("2~8牌の明槓はありますか？");
            });
            $(".no").on("click", function(){
                score();
            })
            break;

        case "2~8牌の明槓はありますか？":
            $(".yes").on("click", function(){
                make_question("2~8牌の明槓は1つですか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の暗槓はありますか？");
            })
            break;

        case "2~8牌の明槓は1つですか？":
            $(".yes").on("click", function(){
                fu += 8;
                make_question("2~8牌の暗槓はありますか？");
            });
            $(".no").on("click", function(){
                make_question("2~8牌の明槓は2つですか？");
            })
            break;

        case "2~8牌の明槓は2つですか？":
            $(".yes").on("click", function(){
                fu += 16;
                make_question("2~8牌の暗槓はありますか？");
            });
            $(".no").on("click", function(){
                fu += 24;
                score();
            })
            break;

        case "2~8牌の暗槓はありますか？":
            $(".yes").on("click", function(){
                make_question("2~8牌の暗槓は1つですか？");
            });
            $(".no").on("click", function(){
                score();
            })
            break;

        case "2~8牌の暗槓は1つですか？":
            $(".yes").on("click", function(){
                fu += 16;
                score();
            });
            $(".no").on("click", function(){
                make_question("2~8牌の暗槓は2つですか？");
            })
            break;

        case "2~8牌の暗槓は2つですか？":
            $(".yes").on("click", function(){
                fu += 32;
                score();
            });
            $(".no").on("click", function(){
                fu += 48;
                score();
            })
            break;

        default:
            alert("error");
            break;
    }
}

make_question("親ですか？");

$(".restart").on("click", function(){
    answer = 0;
    tsumo_flg = false;
    han = 1;
    oya = 0;
    ko = 0;
    fu = 20;
    make_question("親ですか？");
});
