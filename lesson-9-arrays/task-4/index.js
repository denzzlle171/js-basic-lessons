


function addPoints(points, homeTeam, awayTeam, result) {
let copyPoints = points.slice()

    if(result === 'win'){
        copyPoints[homeTeam - 1] +=3;

    }else if(result === 'lose'){
        copyPoints[awayTeam - 1] +=3;

    }else if(result === 'draw'){
        copyPoints[awayTeam - 1] +=1;
        copyPoints[homeTeam - 1] +=1;
    }
    return copyPoints;
  }
   const points = [44, 41, 40, 35, 19, 10, 7];
//    win, lose, draw

const res = addPoints(points, 3, 6,'lose');
console.log(res);
console.log(points)
