pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Note: Use 'sh' for Linux/Mac/Docker, 'bat' for Windows
                sh 'npm start &' 
            }
        }
    }
}    
