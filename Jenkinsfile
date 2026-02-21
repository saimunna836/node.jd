pipeline {
    agent any

    tools {
        // This must match the name you gave in Global Tool Configuration
        nodejs 'node20' 
    }

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
                echo 'Deploying...'
                // This will run the app in the background
                sh 'nohup npm start & '
            }
        }
    }
}
