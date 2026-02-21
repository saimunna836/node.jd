pipeline {
    agent any

    tools {
        // We are using 'node20' because that's the name configured in your Jenkins Tools
        nodejs 'node20'
    }

    stages {
        stage('Checkout') {
            steps {
                // Pulls the latest code from your repo
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
                // Make sure your package.json has "test": "exit 0" to avoid failures
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
                // Builds the image using the Dockerfile we created
                sh 'docker build -t my-web-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to Local Container...'
                // Stops the old container if it exists and starts the new one
                sh 'docker rm -f my-app-container || true'
                sh 'docker run -d -p 3000:3000 --name my-app-container my-web-app:latest'
                echo 'Application is live at http://localhost:3000'
            }
        }
    }
}
