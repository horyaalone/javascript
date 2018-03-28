function findOverlap(rect1, rect2){

  let overlapX;
  let overlapY;
  let overlapWidth;
  let overlapHeight;

  let leftRect;
  let rightRect;

  let upperRect;
  let lowerRect;

  if(rect1.leftX <= rect2.leftX){
    leftRect = rect1;
    rightRect = rect2;
  } else {
    leftRect = rect2;
    rightRect = rect1;
  }

  if(rect1.bottomY <= rect2.bottomY){
    upperRect = rect1;
    lowerRect = rect2
  } else {
    upperRect = rect2;
    lowerRect = rect1;
  }

  if(leftRect.leftX + leftRect.width <= rightRect.leftX){
    return null;
  } else if(leftRect.leftX + leftRect.width >= rightRect.leftX + rightRect.width){
    overlapWidth = rightRect.width;
  } else {
    overlapWidth = leftRect.leftX + leftRect.width - rightRect.leftX;
  }

  if(leftRect.bottomY + leftRect.height <= rightRect.bottomY){
    return null;
  } else if(leftRect.bottomY + leftRect.height >= rightRect.leftX + rightRect.height){
    overlapHeight = rightRect.height;
  } else {
    overlapHeight = leftRect.bottomY + leftRect.height - rightRect.bottomY
  }

    overlapX = rightRect.leftX;
    overlapY = lowerRect.bottomY;

    return {leftX : overlapX, overlapY : overlapY, width : overlapWidth, height : overlapHeight};

}

var rectangle1 = {
    // coordinates of bottom-left corner
    leftX: 0,
    bottomY: 0,
    // width and height
    width: 10,
    height: 10,
};
var rectangle2 = {
    // coordinates of bottom-left corner
    leftX: 7,
    bottomY: 9,
    // width and height
    width: 10,
    height: 10,
};

let overlap = findOverlap(rectangle1, rectangle2);
console.log(overlap);
