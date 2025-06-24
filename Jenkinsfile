pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Construindo os containers...'
                bat 'docker-compose up -d --build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                dir('frontend\\cypress') {
                    bat 'npm install'
                    bat 'npx cypress run'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

    post {
        failure {
            bat "docker-compose down"
        }
    }
}