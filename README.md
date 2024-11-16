# Gesture Recognition for Interaction: Pose Detection using PoseNet

## Overview
This project demonstrates the power of real-time pose detection and lays the groundwork for a more impactful gesture recognition system, including **Sign Language Interpretation**. By leveraging **PoseNet**, a deep learning model, this application detects human body keypoints and provides interactive feedback, making it a potential solution for developing systems like gesture-based controls or communication aids for people with hearing or speech impairments.

**Technologies Used:**
- **JavaScript (ml5.js)**
- **PoseNet** (Machine Learning Model for Pose Detection)
- **HTML/CSS**
- **p5.js** (For drawing and animation)

## Features
- **Real-time Pose Detection**: Detects and visualizes key body parts (17 points) using the PoseNet model.
- **Skeleton Visualization**: Draws lines between detected keypoints, mimicking the human skeleton for easier analysis.
- **Interactive Visualization**: A real-time canvas that updates with the live webcam feed.
- **User-friendly Interface**: Simple design with visual feedback through keypoint and skeleton drawings.

## Setup Instructions
To run this project locally, follow the steps below:

1. **Clone the Repository**:
git clone https://github.com/your-username/pose-detection-gesture-recognition.git

2. **Install Dependencies**:
- This project uses **ml5.js** and **p5.js**, which are included via CDN links in the HTML file. No additional installation is necessary.

3. **Run the Project**:
- Open the `index.html` file in a web browser to start the project. The webcam feed will start automatically, and the pose detection model will begin identifying keypoints.

4. **Compatibility**:
- Ensure that your browser supports WebGL and access to the webcam for real-time performance.

## Usage
1. Open the project in your browser, and allow camera access.
2. The PoseNet model will detect the body keypoints in real-time.
3. Red dots will appear over your body's keypoints (head, shoulders, elbows, etc.).
4. Skeleton lines will connect these keypoints, providing a skeleton overlay.
5. The system is optimized to track the keypoints and visualize them on the screen.

### Example:
Here's an example of how the keypoints and skeleton are visualized:
- **Head**: Topmost keypoint
- **Shoulders**: Detects both left and right shoulder keypoints
- **Elbows & Wrists**: Visible along with arms connecting from shoulders to wrists

## Future Improvements (Scope of Gesture Recognition)
While the current project focuses on pose detection, the long-term goal is to enhance this system by developing a **Gesture Recognition for Interaction**. The project will evolve into a more advanced system capable of interpreting sign language, which can be valuable for:
- **Sign Language Interpretation**: A system for real-time translation of sign language gestures into text or speech.
- **Gesture-Based Control**: Enabling devices or systems to be controlled by gestures.
- **Assistive Technology for Mute and Deaf Individuals**: Helping people with communication challenges interact more naturally with technology.


