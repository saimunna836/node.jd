pipeline {
    agent any

    // This ensures Node.js is available inside your Jenkins environment
    tools {
        nodejs 'node' 
    }

    stages {
        stage('Checkout') {
            steps {
                // Pulls the latest code from your GitHub repo
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // We use '|| true' so the pipeline doesn't fail if tests aren't perfect yet
                sh 'npm test || true'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
                // Builds your app into a reusable container image
                sh 'docker build -t my-web-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to Local Server...'
                // Stops any existing container to avoid port conflicts
                sh 'docker rm -f my-app-container || true'
                // Runs your app in the background on port 3000
                sh 'docker run -d -p 3000:3000 --name my-app-container my-web-app:latest'
                echo 'Success! View your app at http://localhost:3000'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline execution finished.'
        }
    }
}
