
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_USERNAME/my-web-app.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Local Test') {
            steps {
                echo 'Running final integration tests...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to local server...'
                // For a local app, this might just be starting the process
                sh 'npm start &'
            }
        }
    }
}
