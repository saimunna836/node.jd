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
                //
