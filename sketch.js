let capture;
let posenet;
let singlePose;
let skeleton;

function setup() {
    createCanvas (800, 500);
    frameRate(30)
    // capture = createCapture(VIDEO)
    capture.size(800, 500);
    capture.hide();
    posenet = ml5.poseNet(capture, modelLoaded);
    
    // Yes, exactly! In your case, the callback function (modelLoaded) that prints "Model has loaded" will only be executed after the PoseNet deep learning (DL) model has been completely loaded. 
    // Knowns Asynchronous Loading
    posenet.on('pose', recievedPoses)
}
function recievedPoses(poses){
    console.log(poses)

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;

        // Log skeleton to inspect its structure
        console.log("Skeleton Data:", skeleton)
    }

}
function modelLoaded(){
    console.log('Model has loaded')
}
function draw() {

    // Flip the video horizontally for mirror effect
    translate(width, 0);
    scale(-1, 1);

    image(capture, 0, 0, 800, 500);
    fill(255, 0, 0);

    // Check if singlePose and keypoints are available
    if (singlePose && singlePose.keypoints) {
        for (let i = 0; i < singlePose.keypoints.length; i++) {
            let keypoint = singlePose.keypoints[i];
            ellipse(keypoint.position.x, keypoint.position.y, 17, 17);
        }
    }
     // Draw skeleton (bones) if available
     if (skeleton && skeleton.length > 0) {
        stroke(255, 255, 0); // Set color for skeleton lines
        strokeWeight(2);

        for (let j = 0; j < skeleton.length; j++) {
            let partA = skeleton[j][0];
            let partB = skeleton[j][1];

            // Check if both partA and partB have valid positions
            if (partA.position && partB.position) {
                line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
            } else {
                console.log("Invalid part detected:", partA, partB);
            }
        }
   
    }

}
        
