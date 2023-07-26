//안전지대
function solution(board) {
    let answer = [];
    let ansCounter = 0;
    let MX = board.length -1;
    let ZONE = MX - 1;
    
    function Pchecker(x, y) {
        if ((0 < x && x < ZONE) && (0 < y && y < ZONE)) {
            //ZONE 안에 있으면 (가로 세로 모두 1부터 MX -1사이에 있어야함)
            ansCounter += 9;
        } else if (x == 0 || x == MX || y == 0 || y == MX) {
            //사이드에 있으면
            if ((x == 0 && y == 0) || (x == 0 && y == ZONE) || (x == ZONE && y == 0) || (x == ZONE && y == ZONE)) {
                //코너면
                ansCounter += 4;
            } else {
                ansCounter += 6;
            }
        }
    }
    
    for (line in board) {
        for (n in board[line]) {
            if (board[line][n] == 1) {
                answer.push([Number(n), Number(line)]);
                Pchecker(Number(n), Number(line));
            }
        }
    }
    
    //2개 이상이면
    if (answer.length > 1) {
        if (answer.length == MX*MX) {return 0}
        let [x, y] = [0,0]
        for(let i = 0; i < answer.length; i++) {
            if (answer[i+1] != undefined) {
                [x, y] = [answer[i+1][0] - answer[i][0], answer[i+1][1] - answer[i][1]];
            }
        }
        if (x > 0 || y > 0) {
            ansCounter -= 6;
        } else {
            
        }
    }
    return MX*MX - ansCounter;
}